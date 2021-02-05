/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */

// -------------------------------
// ------------ utils ------------
// -------------------------------
export type Cast<T, U> = T extends U ? T : U
type Head<T> = T extends [infer FirstItem, ...infer _Rest] ? FirstItem : never
type Tail<T> = T extends [infer _FirstItem, ...infer Rest] ? Rest : never

type RemoveStartWhiteSpaces<T> = T extends ` ${infer T}` ? RemoveStartWhiteSpaces<T> : T
type RemoveEndWhiteSpaces<T> = T extends `${infer T} ` ? RemoveEndWhiteSpaces<T> : T

// TODO: make generic to ignore \n at starts and the end recursively
type RemoveStartEndLn<T> = T extends `\n${infer T}` ? RemoveStartEndLn<T> : T
// type RemoveEndEndLn<T> = T extends `${infer T}\n` ? RemoveEndEndLn<T> : T

type Trim<
  //
  T,
  T0 = RemoveStartWhiteSpaces<T>,
  T1 = RemoveEndWhiteSpaces<T0>
> = T1
/*
type TestConvertArrIntoObj = NormalizeArray<
  [
    { id: 'id1', val: '1xxxx'},
    { id: 'id2', val: '2xxxx'},
    { id: 'id3', val: '3xxxx'},
  ],
  'id'
>
*/
// inspiration to name this generic `NormalizeArray` comes from normalizr library 
// which do the same data transformation
// > (source)[https://github.com/paularmstrong/normalizr]
type NormalizeArray<
  T extends { [K in Key]: string }[],
  Key extends string,
  ArrValues = T[number],
  Keys = T[number][Key],
  Obj = {
    [K in Cast<Keys, string>]: Extract<ArrValues, { [key in Key]: K }>
  }
> = Obj

// --------- Array-Lines utils ----------------

type Map_Trim<T> = T extends [] ? [] : [Trim<Head<T>>, ...Map_Trim<Tail<T>>]

// type TrimAllLines<T extends string> =

type IsTextEmpty<T> = T extends '' ? true : false

type Filter_IsTextEmpty<T> = T extends []
  ? []
  : IsTextEmpty<Head<T>> extends true
  ? Filter_IsTextEmpty<Tail<T>>
  : [Head<T>, ...Filter_IsTextEmpty<Tail<T>>]

type SplitBy<T extends string, Delimiter extends string> = T extends ``
  ? []
  : T extends `${infer A}${Delimiter}${infer B}`
  ? [A, ...SplitBy<B, Delimiter>]
  : [T]

type Join<T extends any[], Delimiter extends string> = T extends []
  ? ''
  : // @ts-expect-error ????
    `${Head<T>}${Delimiter}${Join<Tail<T>, Delimiter>}`

type SplitByCommas<T extends string> = SplitBy<T, ','>
type SplitByLines<T extends string> = SplitBy<T, '\n'>
type SplitByAmpersand<T extends string> = SplitBy<T, '&'>

type JoinArrByNewLine<T extends string[]> = Join<T, '\n'>

type ReplaceCommasToNewLines<
  T extends string,
  T0 extends string[] = SplitByCommas<T>,
  T1 = JoinArrByNewLine<T0>
> = T1

type SplitByCommaAndLines<
  T extends '',
  T0 extends string = ReplaceCommasToNewLines<T>,
  T1 = SplitByLines<T0>
> = T1

// -------------------------------
// --------- comments ------------
// -------------------------------

type RemoveGQLComments<
  T extends string,
  Lines = SplitByLines<T>,
  LinesWithoutNotes = Filter_IsLineGQLComment<Lines>,
  // @ts-expect-error
  ClearedQuery = JoinArrByNewLine<LinesWithoutNotes>
> = ClearedQuery

type IsLineStartsWithHashTag<T> = T extends `#${infer _X}` ? true : false

// TODO: add support for GQL descriptions
type IsLineGQLComment<T> = IsLineStartsWithHashTag<T>

type Filter_IsLineGQLComment<T> = T extends []
  ? []
  : IsLineGQLComment<Head<T>> extends true
  ? Filter_IsLineGQLComment<Tail<T>>
  : [Head<T>, ...Filter_IsLineGQLComment<Tail<T>>]

// --------- GQL AST Parsers --------
// ----------------------------------
// -------- key: value parser -------
// ----------------------------------

// This generic does not parse key val with arguments
type ParseSimpleKeyValue<T> = Trim<T> extends `${infer Key}:${infer Value}`
  ? {
      key: Trim<Key>
      value: Trim<Value>
    }
  : null

type Map_ParseSimpleKeyValue<T> = T extends []
  ? []
  : [ParseSimpleKeyValue<Head<T>>, ...Map_ParseSimpleKeyValue<Tail<T>>]

type ParseRawGQLArgValueWithDefaultOption<T> = T extends `${infer DataType}=${infer DefaultValue}`
  ? {
      value: ParseRawGQLValue<DataType>
      defaultValue: Trim<DefaultValue>
    }
  : {
      value: ParseRawGQLValue<T>
      defaultValue: void
    }

type ParseRawGQLValue<T> = GetValueType<Trim<T>>

type GetValueType<T> = T extends `${infer Type}!`
  ? GetValueArrayType<Type>
  : GetValueArrayType<T> | null

type GetValueArrayType<T> = T extends `[${infer Arr}]`
  ? // recursion to optional arr type of optional value in the array
    ParseRawGQLValue<Arr>[]
  : GetValueBaseType<T>

type GetValueBaseType<T> = T extends 'String'
  ? string
  : T extends 'Int'
  ? number
  : T extends 'Float'
  ? number
  : T extends 'Boolean'
  ? boolean
  : T

// -------------------------------
// ------ GQL Input type ---------
// -------------------------------

type ExtractGQLInputTypesAst<
  T extends string,
  RawTypeStrings = ParseGqlInput<T>,
  ArrayOfInputs = Map_ParseRawInputTypeString<RawTypeStrings>,
  // @ts-expect-error
  RootInputsObject = NormalizeArray<ArrayOfInputs, 'typeName'>,
  InputObjectsJustBody = {
    // @ts-expect-error
    [K in keyof RootInputsObject]: RootInputsObject[K]['body']
  }
> = InputObjectsJustBody

type ParseGqlInput<
  T extends string
> = T extends `${infer _Whatever}\ninput ${infer InputName}{${infer InputBody}}${infer Rest}`
  ? [{ name: InputName; body: InputBody }, ...ParseGqlInput<Rest>]
  : []

type Map_ParseRawInputTypeString<T> = T extends []
  ? []
  : // @ts-expect-error
    [ParseRawInputTypeString<Head<T>>, ...Map_ParseRawInputTypeString<Tail<T>>]

type ParseRawInputTypeString<
  T extends { name: string; body: string },
  // @ts-expect-error
  BodyPropsKeyVal = Map_ParseSimpleKeyValue<SplitByCommaAndLines<T['body']>>,
  // @ts-expect-error
  InputsObject = NormalizeArray<BodyPropsKeyVal, 'key'>,
  Body = {
    // @ts-expect-error
    [K in keyof InputsObject]: ParseRawGQLValue<InputsObject[K]['value']>
  }
> = {
  typeName: Trim<T['name']>
  body: Body
}

// -------------------------------
// ------ GQL interfaces ---------
// -------------------------------

type ExtractGQLInterfacesAST<
  T extends string,
  RawInterfaceStrings = ParseGqlInterface<T>,
  // --- reuse input starts ----
  // we reuse logic from GQL input type which has same body structure as Interface body
  ArrayOfInterfaces = Map_ParseRawInputTypeString<RawInterfaceStrings>,
  // @ts-expect-error
  RootInterfaceObject = NormalizeArray<ArrayOfInterfaces, 'typeName'>,
  // --- reuse input ends ----
  InterfaceObjectsJustBody = {
    // @ts-expect-error
    [K in keyof RootInterfaceObject]: RootInterfaceObject[K]['body']
  }
> = InterfaceObjectsJustBody

type ParseGqlInterface<
  T extends string
> = T extends `${infer _Whatever}\ninterface ${infer InterfaceName}{${infer InterfaceBody}}${infer Rest}`
  ? [{ name: InterfaceName; body: InterfaceBody }, ...ParseGqlInterface<Rest>]
  : []

// -------------------------------
// --------- GQL type ------------
// -------------------------------

type ExtractGQLTypesAST<
  T extends string,
  RawTypeStrings = ParseGqlTypes<T>,
  TypesArr = Map_ParseRawTypeString<RawTypeStrings>,
  // @ts-expect-errors
  TypesObj = NormalizeArray<TypesArr, 'typeName'>,
  MergeTypes = {
    // @ts-expect-error
    [K in keyof TypesObj]: TypesObj[K]['body']
  }
> = MergeTypes

// TODO: add implements keyword support
type ParseGqlTypes<
  T extends string
> = T extends `${infer _Whatever}\ntype ${infer TypeDeclaration}{${infer TypeBody}}${infer Rest}`
  ? TypeDeclaration extends `${infer TypeName} implements ${infer Implements}`
    ? [
        {
          name: TypeName
          body: TypeBody
          implements: Implements
        },
        ...ParseGqlTypes<Rest>
      ]
    : [
        {
          name: TypeDeclaration
          body: TypeBody
          implements: null
        },
        ...ParseGqlTypes<Rest>
      ]
  : []

type Map_ParseRawTypeString<T> = T extends []
  ? []
  : // @ts-expect-error
    [ParseRawTypeString<Head<T>>, ...Map_ParseRawTypeString<Tail<T>>]

type ParseRawTypeString<
  T extends { implements: any; name: string; body: string },
  TypeName = Trim<T['name']>,
  BodyPropsKeyValArr = ParseTypeKeyValuesWithArgs<T['body']>,
  // @ts-expect-error
  BodyPropsKeyValObj = NormalizeArray<BodyPropsKeyValArr, 'key'>,
  Body = {
    // now the GQL parser supports only 1 interface per type. No idea if real GQL supports more
    // TODO: check that + implement if yes
    implements: T['implements'] extends null ? [] : Map_Trim<SplitByAmpersand<T['implements']>>
    fields: {
      // ---- gaga magic ----
      [K in keyof BodyPropsKeyValObj]: {
        // @ts-expect-error
        args: ParserRawGQLTypeBodyArgsPropString<BodyPropsKeyValObj[K]['args']>
        // @ts-expect-error
        value: ParseRawGQLValue<BodyPropsKeyValObj[K]['value']>
      }
    }
  }
> = {
  typeName: TypeName
  body: Body
}

// Shitty tricky parser which try to resolve if key: value has some args
// just by checking if the name includes `(` bracket character
// BTW: there is duplicate code for simple non arguments key recursion :(
// TODO: add better docs for this pice of shitty magic
// TODO: what about to split to 2 function one for parsing infer value, second for spreading arrays?
type ParseTypeKeyValuesWithArgs<
  T extends string,
  TrimmedT extends string = Trim<T>,
  ClearedT = ReplaceCommasToNewLines<TrimmedT>
> = ClearedT extends ``
  ? []
  : ClearedT extends `${infer Key}:${infer Value}\n${infer PureRest}`
  ? // if include bracket => key has args...
    Key extends `${infer What1}(${infer Args}`
    ? ClearedT extends `${infer KeyName}(${infer Args}):${infer ValByArgs}\n${infer Rest}`
      ? [
          {
            key: Trim<RemoveStartEndLn<KeyName>>
            // enable split args by
            // 1) new line
            // 2) comma
            args: Map_ParseSimpleKeyValue<
              // @ts-expect-error
              Filter_IsTextEmpty<SplitByCommaAndLines<Args>>
            >
            value: Trim<ValByArgs>
          },
          ...ParseTypeKeyValuesWithArgs<Rest>
        ]
      : [
          {
            key: Trim<RemoveStartEndLn<Key>>
            args: []
            value: Trim<Value>
          },
          ...ParseTypeKeyValuesWithArgs<PureRest>
        ]
    : ClearedT extends `${infer Key}:${infer Value}\n${infer Rest2}`
    ? [
        {
          key: Trim<RemoveStartEndLn<Key>>
          args: []
          value: Trim<Value>
        },
        ...ParseTypeKeyValuesWithArgs<Rest2>
      ]
    : []
  : []

type ParserRawGQLTypeBodyArgsPropString<
  // TODO: T should be only arg, not whole body
  T extends { key: string; value: string }[],
  BodyPropsObj = NormalizeArray<T, 'key'>,
  T0 = {
    [K in keyof BodyPropsObj]: ParseRawGQLArgValueWithDefaultOption<
      // @ts-expect-error
      BodyPropsObj[K]['value']
    >
  }
> = T0
// -------------------------------
// --------- GQL enum ------------
// -------------------------------
type ExtractGQLEnumsAST<
  T extends string,
  RawTypeStrings = ParseGqlEnums<T>,
  SplitsArr = Map_ParseRawEnumString<RawTypeStrings>,
  // @ts-expect-error
  EnumsObject = NormalizeArray<SplitsArr, 'typeName'>,
  MergeEnums = {
    // @ts-expect-error
    [K in keyof EnumsObject]: EnumsObject[K]['body'][number]
  }
> = MergeEnums

type ParseGqlEnums<
  T extends string
> = T extends `${infer _Whatever}enum ${infer EnumName}{${infer EnumBody}}${infer Rest}`
  ? [{ type: EnumName; body: EnumBody }, ...ParseGqlEnums<Rest>]
  : []

type Map_ParseRawEnumString<T> = T extends []
  ? []
  : // @ts-expect-error
    [ParseRawEnumString<Head<T>>, ...Map_ParseRawEnumString<Tail<T>>]

type ParseRawEnumString<T extends { type: string; body: string }> = {
  typeName: Trim<T['type']>
  // @ts-expect-error
  body: Filter_IsTextEmpty<SplitByCommaAndLines<T['body']>>
}

// ---------------------------------
// ------- GQL Directives ----------
// ---------------------------------

type ExtractGQLDirectivesAst<
  T extends string,
  RawDirectives extends { name: string; body: string }[] = ParseGqlDirectives<T>,
  DirectivesObject = NormalizeArray<RawDirectives, 'name'>,
  Merged = {
    // @ts-expect-error
    [K in keyof DirectivesObject]: ParseRawGQLValue<DirectivesObject[K]['body']>
  }
> = Merged

type ParseGqlDirectives<
  T
> = T extends `${infer _Whatever}\ndirective @${infer directiveName} on ${infer DirectiveBody}\n${infer Rest}`
  ? [
      {
        name: directiveName
        body: DirectiveBody
      },
      ...ParseGqlDirectives<Rest>
    ]
  : []

// --------------------------------
// ---------- GQL Scalars ----------
// --------------------------------

type ExtractGQLScalarsAst<
  T extends string,
  RawDirectives extends { name: string }[] = ParseGqlScalar<T>,
  ScalarsObject = NormalizeArray<RawDirectives, 'name'>,
  Merged = {
    [K in keyof ScalarsObject]: any
  }
> = Merged

type ParseGqlScalar<
  T
> = T extends `${infer _Whatever}\nscalar ${infer directiveName}\n${infer Rest}`
  ? [
      {
        name: Trim<directiveName>
      },
      ...ParseGqlScalar<Rest>
    ]
  : []

// ----------------------------------
// ------------ main ----------------
// ----------------------------------
type GetGqlAST<
  T extends string,
  TTrimmedLines extends string = JoinArrByNewLine<Map_Trim<SplitByLines<T>>>,
  ClearedCode extends string = RemoveGQLComments<TTrimmedLines>,
  GQLScalarsAST = ExtractGQLScalarsAst<ClearedCode>,
  GQLDirectivesAST = ExtractGQLDirectivesAst<ClearedCode>,
  GQLInputTypesAST = ExtractGQLInputTypesAst<ClearedCode>,
  GQLTypesAST = ExtractGQLTypesAST<ClearedCode>,
  GQLEnumsAST = ExtractGQLEnumsAST<ClearedCode>,
  GQLInterfacesAST = ExtractGQLInterfacesAST<ClearedCode>
> = {
  scalars: GQLScalarsAST
  directives: GQLDirectivesAST
  types: GQLTypesAST
  enums: GQLEnumsAST
  inputs: GQLInputTypesAST
  interfaces: GQLInterfacesAST
}

const typeDefs = `
  scalar    Date1
  interface Node {id: ID!}
  # input CommentedPaginationPOC { input: Int! }
  input Pagination { value: String }
  enum OrderByKeyword {ASC,DESC}
  enum enum2 { A, B, C 
  D}
  directive @upper on FIELD_DEFINITION
  type Mutation {
    contactForm(input: OrderByKeyword!): String
  }
  type Query implements Node & Node2 {
    age: Int, title(
      limit: Int! = 10
      offset: [Int!]!, thirdArg: String!): Mutation!
    author: Float!
  }
`

type ParsedGraphQL = GetGqlAST<typeof typeDefs>

type Enums = ParsedGraphQL['enums']
type Directives = ParsedGraphQL['directives']
type Scalars = ParsedGraphQL['scalars']
type Interfaces = ParsedGraphQL['interfaces']
type Types = ParsedGraphQL['types']['Query']
type Inputs = ParsedGraphQL['inputs']

