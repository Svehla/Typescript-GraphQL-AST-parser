/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
// --------- utils --------------
export type Cast<T, U> = T extends U ? T : U
type Head<T> = T extends [infer FirstItem, ...infer Rest] ? FirstItem : never
type Tail<T> = T extends [infer FirstItem, ...infer Rest] ? Rest : never

type RemoveStartWhiteSpaces<T> = T extends ` ${infer T}` ? RemoveStartWhiteSpaces<T> : T
type RemoveEndWhiteSpaces<T> = T extends `${infer T} ` ? RemoveEndWhiteSpaces<T> : T

// type RemoveStartEndLn<T> = T extends `\n${infer T}` ? RemoveStartEndLn<T> : T
// type RemoveEndEndLn<T> = T extends `${infer T}\n` ? RemoveEndEndLn<T> : T

type RemoveALlWhiteSpaces<
  T,
  T0 = RemoveStartWhiteSpaces<T>,
  T1 = RemoveEndWhiteSpaces<T0>
  // Is ok to comment this two lines?
  // T2 = RemoveStartEndLn<T1>,
  // T3 = RemoveEndEndLn<T2>
> = T1

// --------- lines utils ----------------

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

// ------------------------------

// --------- comments ----------
type IsLineStartsWithHashTag<T> = T extends `#${infer X}` ? true : false
type GQLLineIsComment<T, T0 = RemoveStartWhiteSpaces<T>, T1 = IsLineStartsWithHashTag<T0>> = T1

type RemoveLineStarsWIthHashTag<T> = T extends []
  ? []
  : GQLLineIsComment<Head<T>> extends true
  ? RemoveLineStarsWIthHashTag<Tail<T>>
  : [Head<T>, ...RemoveLineStarsWIthHashTag<Tail<T>>]

// ----------------------------------
// ----------- value parser ---------
// ----------------------------------
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
> = T extends `${infer _Whatever}input${infer InputName}{${infer InputBody}}${infer Rest}`
  ? [{ type: InputName; body: InputBody }, ...ParseGqlInput<Rest>]
  : []

type ParseRawInputTypeStrings<T> = T extends []
  ? []
  : // @ts-expect-error
    [ParseRawInputTypeString<Head<T>>, ...ParseRawInputTypeStrings<Tail<T>>]

type ParseRawInputTypeString<
  T extends { type: string; body: string },
  TypeName = RemoveALlWhiteSpaces<T['type']>,
  BodyPropsKeyVal = ParseKeyValues<SplitByLines<T['body']>>[number],
  Body = {
    // ---- gaga magic ----
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
> = T extends `${infer _Whatever}type${infer TypeDeclaration}{${infer TypeBody}}${infer Rest}`
  ? [{ type: TypeDeclaration; body: TypeBody }, ...ParseGqlTypes<Rest>]
  : []

type ParseRawTypeStrings<T> = T extends []
  ? []
  : // @ts-expect-error
    [ParseRawTypeString<Head<T>>, ...ParseRawTypeStrings<Tail<T>>]

type ParseRawTypeString<
  T extends { type: string; body: string },
  TypeName = RemoveALlWhiteSpaces<T['type']>,
  BodyPropsKeyVal = ParseKeyValues<SplitByLines<T['body']>>[number],
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
> = T extends `${infer _Whatever}enum${infer EnumName}{${infer EnumBody}}${infer Rest}`
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

// --------- GQL AST Parsers ----------
type ParseKeyValue<
  T
> = RemoveALlWhiteSpaces<T> extends `${infer KeyName}(${infer Args}):${infer ValByArgs}`
  ? {
      key: RemoveALlWhiteSpaces<KeyName>
      args: ParseKeyValues<SplitByCommas<Args>>
      value: RemoveALlWhiteSpaces<ValByArgs>
    }
  : T extends `${infer Key}:${infer Value}`
  ? {
      key: RemoveALlWhiteSpaces<Key>
      args: null
      value: RemoveALlWhiteSpaces<Value>
    }
  : null

type ParseKeyValues<T> = T extends []
  ? []
  : ParseKeyValue<Head<T>> extends null
  ? ParseKeyValues<Tail<T>>
  : [ParseKeyValue<Head<T>>, ...ParseKeyValues<Tail<T>>]

// whole codebase extractors

type RemoveComments<
  T extends string,
  Lines = SplitByLines<T>,
  LinesWithoutNotes = RemoveLineStarsWIthHashTag<Lines>,
  ClearedQuery = JoinArrByNewLine<LinesWithoutNotes>
> = ClearedQuery

type GetGqlAST<
  T extends string,
  GQLCodeComments = RemoveComments<T>,
  GQLInputTypesAST = ExtractGQLInputTypesAst<Cast<GQLCodeComments, string>>,
  GQLTypesAST = ExtractGQLTypesAST<Cast<GQLCodeComments, string>>,
  GQLEnumsAST = ExtractGQLEnumsAST<Cast<GQLCodeComments, string>>
> = {
  inputs: GQLInputTypesAST
  enums: GQLEnumsAST
  types: GQLTypesAST
}

const typeDefs = `
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
type Book {
  title(limit: Int = 10, offset: Int!): String!
  author: Float!
  age: Int
}

enum DemoCarType {
  FOR_SALE
  ON_REQUEST
}

input Pagination {
  value: String
}

# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
  books(limit: Int!, offset: String): [Book]
  firstName: String!
  lastName: Boolean
}
`

type ParsedGraphQL = GetGqlAST<typeof typeDefs>

