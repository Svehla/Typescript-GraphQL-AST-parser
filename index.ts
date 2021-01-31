/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */

// -------------------------------
// ------------ utils ------------
// -------------------------------
export type Cast<T, U> = T extends U ? T : U
type Head<T> = T extends [infer FirstItem, ...infer Rest] ? FirstItem : never
type Tail<T> = T extends [infer FirstItem, ...infer Rest] ? Rest : never

type RemoveStartWhiteSpaces<T> = T extends ` ${infer T}` ? RemoveStartWhiteSpaces<T> : T
type RemoveEndWhiteSpaces<T> = T extends `${infer T} ` ? RemoveEndWhiteSpaces<T> : T

type RemoveStartEndLn<T> = T extends `\n${infer T}` ? RemoveStartEndLn<T> : T
// type RemoveEndEndLn<T> = T extends `${infer T}\n` ? RemoveEndEndLn<T> : T

type RemoveALlWhiteSpaces<
  T,
  T0 = RemoveStartWhiteSpaces<T>,
  T1 = RemoveEndWhiteSpaces<T0>
> = T1

// --------- Array-Lines utils ----------------

type RemoveItemStarEndWhiteSpaces<T> = T extends []
  ? []
  : [
      RemoveEndWhiteSpaces<RemoveStartWhiteSpaces<Head<T>>>,
      ...RemoveItemStarEndWhiteSpaces<Tail<T>>
    ]

type FilterEmptyItems<T> = T extends [] ? [] : Head<T> extends '' ? Tail<T> : [Head<T>, ...Tail<T>]

type JoinArrByNewLine<T> = T extends []
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

// -------------------------------
// --------- comments ------------
// -------------------------------

type RemoveGQLComments<
  T extends string,
  Lines = SplitByLines<T>,
  LinesWithoutNotes = RemoveLineStarsWIthHashTag<Lines>,
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
type ParseKeyValue<T> = RemoveALlWhiteSpaces<T> extends `${infer Key}:${infer Value}`
  ? {
      key: RemoveALlWhiteSpaces<Key>
      value: RemoveALlWhiteSpaces<Value>
    }
  : null

type ParseSimpleKeyValues<T> = T extends []
  ? []
  : ParseKeyValue<Head<T>> extends null
  ? ParseSimpleKeyValues<Tail<T>>
  : [ParseKeyValue<Head<T>>, ...ParseSimpleKeyValues<Tail<T>>]


type ParseRawGQLArgValueWithDefaultOption<T> = T extends `${infer DataType}=${infer DefaultValue}`
  ? {
      value: ParseRawGQLValue<DataType>
      defaultValue: RemoveALlWhiteSpaces<DefaultValue>
    }
  : {
      value: ParseRawGQLValue<T>
      defaultValue: null
    }

type ParseRawGQLValue<T> = GetMappedType<RemoveALlWhiteSpaces<T>>

type GetMappedType<T> = T extends `${infer Type}!`
  ? GetMappedArrayType<Type>
  : GetMappedArrayType<T> | null

type GetMappedArrayType<T> = T extends `[${infer Arr}]`
  ? // recursion to optional arr type
    ParseRawGQLValue<Arr[]>
  : GetMappedBaseType<T>

type GetMappedBaseType<T> =
  //
  T extends 'String'
    ? string
    : T extends 'Int'
    ? number
    : T extends 'Float'
    ? number
    : T extends 'Boolean'
    ? boolean
    : T

// ----------------------------------

// -------------------------------
// ------ GQL Input type ---------
// -------------------------------

type ExtractGQLInputTypesAst<
  T extends string,
  RawTypeStrings = ParseGqlInput<T>,
  Splits = ParseRawInputTypeStrings<RawTypeStrings>,
  MergeInputs = {
    // @ts-expect-error
    [K in Splits[number]['typeName']]: Extract<Splits[number], { typeName: K }>['body']
  }
  //
> = MergeInputs

type ParseGqlInput<
  T extends string
> = T extends `${infer _Whatever}input ${infer InputName}{${infer InputBody}}${infer Rest}`
  ? [{ type: InputName; body: InputBody }, ...ParseGqlInput<Rest>]
  : []

type ParseRawInputTypeStrings<T> = T extends []
  ? []
  : // @ts-expect-error
    [ParseRawInputTypeString<Head<T>>, ...ParseRawInputTypeStrings<Tail<T>>]

type ParseRawInputTypeString<
  T extends { type: string; body: string },
  TypeName = RemoveALlWhiteSpaces<T['type']>,
  BodyPropsKeyVal = ParseSimpleKeyValues<SplitByLines<T['body']>>[number],
  Body = {
    // @ts-expect-error
    [K in BodyPropsKeyVal['key']]: {
      // @ts-expect-error
      value: ParseRawGQLValue<Extract<BodyPropsKeyVal, { key: K }>['value']>
    }
  }
> = {
  typeName: TypeName
  body: Body
}

// -------------------------------
// --------- GQL type ------------
// -------------------------------

type ExtractGQLTypesAST<
  T extends string,
  RawTypeStrings = ParseGqlTypes<T>,
  Splits = ParseRawTypeStrings<RawTypeStrings>,
  MergeTypes = {
    // @ts-expect-error
    [K in Splits[number]['typeName']]: Extract<Splits[number], { typeName: K }>['body']
  }
> = MergeTypes

type ParseGqlTypes<
  T extends string
> = T extends `${infer _Whatever}type ${infer TypeDeclaration}{${infer TypeBody}}${infer Rest}`
  ? [{ type: TypeDeclaration; body: TypeBody }, ...ParseGqlTypes<Rest>]
  : []

type ParseRawTypeStrings<T> = T extends []
  ? []
  : // @ts-expect-error
    [ParseRawTypeString<Head<T>>, ...ParseRawTypeStrings<Tail<T>>]

type ParseRawTypeString<
  T extends { type: string; body: string },
  TypeName = RemoveALlWhiteSpaces<T['type']>,
  // key val can have more lines it you have multiline args
  BodyPropsKeyVal = ParseTypeKeyValuesWithArgs<T['body']>[number],
  Body = {
    // ---- gaga magic ----
    // @ts-expect-error
    [K in BodyPropsKeyVal['key']]: {
      // @ts-expect-error
      args: ParserRawGQLTypeBodyPropString<Extract<BodyPropsKeyVal, { key: K }>['args']>
      // @ts-expect-error
      value: ParseRawGQLValue<Extract<BodyPropsKeyVal, { key: K }>['value']>
    }
  }
> = {
  typeName: TypeName
  body: Body
}


// pretty tricky parser which try to resolve if key: value has some args
// just by checking if the name includes `(` bracket character
// btw there is duplicate code for simple non arguments key recursion
// TODO: add docs
type ParseTypeKeyValuesWithArgs<T> = RemoveALlWhiteSpaces<T> extends ``
  ? []
  : T extends `${infer Key}:${infer Value}\n${infer PureRest}`
  ? // if include bracket => key has args...
    Key extends `${infer What1}(${infer Args}`
    ? T extends `${infer KeyName}(${infer Args}):${infer ValByArgs}\n${infer Rest}`
      ? [
          {
            key: RemoveALlWhiteSpaces<RemoveStartEndLn<KeyName>>
            // enable split args by
            // 1) new line
            // 2) comma
            args: ParseSimpleKeyValues<
              FilterEmptyItems<SplitByLines<JoinArrByNewLine<SplitByCommas<Args>>>>
            >
            value: RemoveALlWhiteSpaces<ValByArgs>
            rest: Rest
          },
          ...ParseTypeKeyValuesWithArgs<Rest>
        ]
      : [
          {
            // ugh: '_-----'
            key: RemoveALlWhiteSpaces<RemoveStartEndLn<Key>>
            args: null
            value: RemoveALlWhiteSpaces<Value>
          },
          ...ParseTypeKeyValuesWithArgs<PureRest>
        ]
    : T extends `${infer Key}:${infer Value}\n${infer Rest2}`
    ? [
        {
          // ugh: '_pure-'
          key: RemoveALlWhiteSpaces<RemoveStartEndLn<Key>>
          args: null
          value: RemoveALlWhiteSpaces<Value>
        },
        ...ParseTypeKeyValuesWithArgs<Rest2>
      ]
    : []
  : []
  
type ParserRawGQLTypeBodyPropString<
  // TODO: T should be only arg, not whole body
  T extends string[],
  // TODO: add better names
  ArgKeyVal = T[number],
  T0 = {
    // TODO: add gql arg default value
    // @ts-expect-error
    [KK in ArgKeyVal['key']]: ParseRawGQLArgValueWithDefaultOption<
      // @ts-expect-error
      Extract<ArgKeyVal, { key: KK }>['value']
    >
  }
> = T0

type BBody = `
title(
  limit: Int = 10
  offset: Int!, omg: String
): String!
author: Float!
age: In
`

type XX = ParseRawTypeString<{
  type: 'xxx'
  body: BBody
}>
// -------------------------------
// --------- GQL enum ------------
// -------------------------------

type ExtractGQLEnumsAST<
  T extends string,
  RawTypeStrings = ParseGqlEnums<T>,
  Splits = ParseRawEnumStrings<RawTypeStrings>,
  MergeEnums = {
    // @ts-expect-error
    [K in Splits[number]['typeName']]: Extract<Splits[number], { typeName: K }>['body'][number]
  }
  //
> = MergeEnums

type ParseGqlEnums<
  T extends string
> = T extends `${infer _Whatever}enum ${infer EnumName}{${infer EnumBody}}${infer Rest}`
  ? [{ type: EnumName; body: EnumBody }, ...ParseGqlEnums<Rest>]
  : []

type ParseRawEnumString<T> = {
  // @ts-expect-error
  typeName: RemoveALlWhiteSpaces<T['type']>
  // @ts-expect-error
  body: FilterEmptyItems<RemoveItemStarEndWhiteSpaces<SplitByLines<T['body']>>>
}

type ParseRawEnumStrings<T> = T extends []
  ? []
  : [ParseRawEnumString<Head<T>>, ...ParseRawEnumStrings<Tail<T>>]

// ----------------------------------
// ----------------------------------
// ----------------------------------
// ----------------------------------

// whole codebase extractors

type GetGqlAST<
  T extends string,
  GQLCodeComments = T,
  // GQLCodeComments = RemoveGQLComments<T>,
  GQLInputTypesAST = ExtractGQLInputTypesAst<Cast<GQLCodeComments, string>>,
  GQLTypesAST = ExtractGQLTypesAST<Cast<GQLCodeComments, string>>,
  GQLEnumsAST = ExtractGQLEnumsAST<Cast<GQLCodeComments, string>>
> = {
  types: GQLTypesAST
  enums: GQLEnumsAST
  inputs: GQLInputTypesAST
}

const typeDefs = `
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
enum OrderByKeyword {
  ASC
  DESC
}
type Mutation {
  contactForm(
    input: OrderByKeyword!,
    
  ): ContactFormResType
}
type Query {
  title(
    limit: Int = 10



    offset: Int!, thirdArg: String!
  ): String!
  author: Float!
  age: Int
}
input Pagination {
  value: String
}
`

type ParsedGraphQL = GetGqlAST<typeof typeDefs>

type Types = ParsedGraphQL['types']
type Enums = ParsedGraphQL['enums']
type Inputs = ParsedGraphQL['inputs']
