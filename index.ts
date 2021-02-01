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

type MapArrayTrim<T> = T extends []
  ? []
  : [Trim<Head<T>>, ...MapArrayTrim<Tail<T>>]

/*
test call
type TestConvertArrIntoObj = ConvertArrIntoObject<
  [
    { id: 'id1', val: '1xxxx'},
    { id: 'id2', val: '2xxxx'},
    { id: 'id3', val: '3xxxx'},
  ],
  'id'
>
*/
type ConvertArrIntoObject<
  T extends { [K in Key]: string }[],
  Key extends string,
  ArrValues = T[number],
  Keys = T[number][Key],
  Obj = {
    [K in Cast<Keys, string>]: Extract<ArrValues, { [key in Key]: K }>
  }
> = Obj

// --------- Array-Lines utils ----------------

type TrimAllLines<T extends string> = JoinArrByNewLine<TrimAllItems<SplitByLines<T>>>

type TrimAllItems<T> = T extends []
  ? []
  : [
      RemoveEndWhiteSpaces<Trim<Head<T>>>,
      ...TrimAllItems<Tail<T>>
    ]


type RemoveItemStarEndWhiteSpaces<T> = T extends []
  ? []
  : [
      RemoveEndWhiteSpaces<RemoveStartWhiteSpaces<Head<T>>>,
      ...RemoveItemStarEndWhiteSpaces<Tail<T>>
    ]

type FilterEmptyItems<T extends string[]> = T extends []
  ? []
  : Head<T> extends ''
  ? Tail<T>
  : [Head<T>, ...Tail<T>]

type JoinArrByNewLine<T extends string[]> = T extends []
  ? ''
  : // @ts-expect-error ????
    `${Head<T>}\n${JoinArrByNewLine<Tail<T>>}`
type SplitByCommas<T extends string> = T extends ``
  ? []
  : T extends `${infer A},${infer B}`
  ? [A, ...SplitByLines<B>]
  : [T]

type SplitByLines<T extends string> = T extends ``
  ? []
  : T extends `${infer A}\n${infer B}`
  ? [A, ...SplitByLines<B>]
  : [T]

type SplitByAmpersand<T extends string> = T extends ``
  ? []
  : T extends `${infer A}&${infer B}`
  ? [A, ...SplitByLines<B>]
  : [T]

// -------------------------------
// --------- comments ------------
// -------------------------------

type RemoveGQLComments<
  T extends string,
  Lines = SplitByLines<T>,
  LinesWithoutNotes = RemoveLineStarsWIthHashTag<Lines>,
  // @ts-expect-error
  ClearedQuery = JoinArrByNewLine<LinesWithoutNotes>
> = ClearedQuery

type IsLineStartsWithHashTag<T> = T extends `#${infer X}` ? true : false
type GQLLineIsComment<T, T0 = RemoveStartWhiteSpaces<T>, T1 = IsLineStartsWithHashTag<T0>> = T1

type RemoveLineStarsWIthHashTag<T> = T extends []
  ? []
  : GQLLineIsComment<Head<T>> extends true
  ? RemoveLineStarsWIthHashTag<Tail<T>>
  : [Head<T>, ...RemoveLineStarsWIthHashTag<Tail<T>>]

// --------- GQL AST Parsers ----------
// ----------------------------------
// ----------- value parser ---------
// ----------------------------------

// This generic does not parse key val with arguments
type ParseSimpleKeyValue<T> = Trim<T> extends `${infer Key}:${infer Value}`
  ? {
      key: Trim<Key>
      value: Trim<Value>
    }
  : null

type ParseSimpleKeyValues<T> = T extends []
  ? []
  : ParseSimpleKeyValue<Head<T>> extends null
  ? ParseSimpleKeyValues<Tail<T>>
  : [ParseSimpleKeyValue<Head<T>>, ...ParseSimpleKeyValues<Tail<T>>]

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
    ParseRawGQLValue<Arr[]>
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

/**
 * example calling:
  
type Test = ExtractGQLInputTypesAst<`
input XInput {
  a: Int!
  b: Int!
  c: String
}`>
 */
type ExtractGQLInputTypesAst<
  T extends string,
  RawTypeStrings = ParseGqlInput<T>,
  ArrayOfInputs = ParseRawInputTypeStrings<RawTypeStrings>,
  // @ts-expect-error
  RootInputsObject = ConvertArrIntoObject<ArrayOfInputs, 'typeName'>,
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

type ParseRawInputTypeStrings<T> = T extends []
  ? []
  : // @ts-expect-error
    [ParseRawInputTypeString<Head<T>>, ...ParseRawInputTypeStrings<Tail<T>>]

type ParseRawInputTypeString<
  T extends { name: string; body: string },
  TypeName = Trim<T['name']>,
  BodyPropsKeyVal = ParseSimpleKeyValues<SplitByLines<T['body']>>,
  // @ts-expect-error
  InputsObject = ConvertArrIntoObject<BodyPropsKeyVal, 'key'>,
  Body = {
    // @ts-expect-error
    [K in keyof InputsObject]: ParseRawGQLValue<InputsObject[K]['value']>
  }
> = {
  typeName: TypeName
  body: Body
}

// -------------------------------
// ------ GQL interfaces ---------
// -------------------------------

/**
 * example calling:
  
type Test = ExtractGQLInterfacesAST<`
interface Node {
  id: ID!
}
interface Node2 {id: ID!}g
`>
*/
type ExtractGQLInterfacesAST<
  T extends string,
  RawInterfaceStrings = ParseGqlInterface<T>,
  // --- reuse input starts ----
  // we reuse logic from GQL input type which has same body structure as Interface body
  ArrayOfInterfaces = ParseRawInputTypeStrings<RawInterfaceStrings>,
  // @ts-expect-error
  RootInterfaceObject = ConvertArrIntoObject<ArrayOfInterfaces, 'typeName'>,
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

/*
example T:
type Test = ExtractGQLTypesAST<`
  type TestType {
    title(
      limit: Int = 10
      offset: Int!, thirdArg: String
    ): String!
    author: Float!
  }
`>
 */

type ExtractGQLTypesAST<
  T extends string,
  RawTypeStrings = ParseGqlTypes<T>,
  TypesArr = ParseRawTypeStrings<RawTypeStrings>,
  // @ts-expect-errors
  TypesObj = ConvertArrIntoObject<TypesArr, 'typeName'>,
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

type ParseRawTypeStrings<T> = T extends []
  ? []
  : // @ts-expect-error
    [ParseRawTypeString<Head<T>>, ...ParseRawTypeStrings<Tail<T>>]

type ParseRawTypeString<
  T extends { implements: any; name: string; body: string },
  TypeName = Trim<T['name']>,
  BodyPropsKeyValArr = ParseTypeKeyValuesWithArgs<T['body']>,
  // @ts-expect-error
  BodyPropsKeyValObj = ConvertArrIntoObject<BodyPropsKeyValArr, 'key'>,
  Body = {
    // now the GQL parser supports only 1 interface per type. No idea if real GQL supports more
    // TODO: check that + implement if yes
    implements: T['implements'] extends null
      ? []
      : MapArrayTrim<SplitByAmpersand<T['implements']>>
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
type ParseTypeKeyValuesWithArgs<T> = Trim<T> extends ``
  ? []
  : T extends `${infer Key}:${infer Value}\n${infer PureRest}`
  ? // if include bracket => key has args...
    Key extends `${infer What1}(${infer Args}`
    ? T extends `${infer KeyName}(${infer Args}):${infer ValByArgs}\n${infer Rest}`
      ? [
          {
            key: Trim<RemoveStartEndLn<KeyName>>
            // enable split args by
            // 1) new line
            // 2) comma
            args: ParseSimpleKeyValues<
              FilterEmptyItems<SplitByLines<JoinArrByNewLine<SplitByCommas<Args>>>>
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
    : T extends `${infer Key}:${infer Value}\n${infer Rest2}`
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
  BodyPropsObj = ConvertArrIntoObject<T, 'key'>,
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
  SplitsArr = ParseRawEnumStrings<RawTypeStrings>,
  // @ts-expect-error
  EnumsObject = ConvertArrIntoObject<SplitsArr, 'typeName'>,
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
type ParseRawEnumString<T> = {
  // @ts-expect-error
  typeName: Trim<T['type']>
  // @ts-expect-error
  body: FilterEmptyItems<RemoveItemStarEndWhiteSpaces<SplitByLines<T['body']>>>
}
type ParseRawEnumStrings<T> = T extends []
  ? []
  : [ParseRawEnumString<Head<T>>, ...ParseRawEnumStrings<Tail<T>>]


// ---------------------------------
// ------- GQL Directives ----------
// ---------------------------------

type ExtractGQLDirectivesAst<
  T extends string,
  RawDirectives extends { name: string, body: string }[] = ParseGqlDirectives<T>,
  DirectivesObject = ConvertArrIntoObject<RawDirectives, 'name'>,
  Merged = {
    // @ts-expect-error
    [K in keyof DirectivesObject]: ParseRawGQLValue<DirectivesObject[K]['body']>
  },
> = Merged

type ParseGqlDirectives<T> = T extends `${infer _Whatever}\ndirective @${infer directiveName} on ${infer DirectiveBody}\n${infer Rest}`
  ? [
      { 
        name: directiveName; 
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
  ScalarsObject = ConvertArrIntoObject<RawDirectives, 'name'>,
  Merged = {
    [K in keyof ScalarsObject]: any
  },
> = Merged

type ParseGqlScalar<T> = T extends `${infer _Whatever}\scalar ${infer directiveName}\n${infer Rest}`
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
  // GQLCodeComments = T,
  ClearedCode extends string = RemoveGQLComments<TrimAllLines<T>>,

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
enum OrderByKeyword {
  ASC
  DESC
}
directive @upper on FIELD_DEFINITION!
type Mutation {
  contactForm(
    input: OrderByKeyword!,
  ): String
}
type Query implements Node & Node2 {
  age: Int
  title(offset: Int!, thirdArg: String!): String!
  author: Float!
}
`

type ParsedGraphQL = GetGqlAST<typeof typeDefs>

type Directives = ParsedGraphQL['directives']
type Scalars = ParsedGraphQL['scalars']
type Interfaces = ParsedGraphQL['interfaces']
type Types = ParsedGraphQL['types']
type Enums = ParsedGraphQL['enums']
type Inputs = ParsedGraphQL['inputs']