/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
// --------- utils --------------
export type Cast<T, U> = T extends U ? T : U
type Head<T> = T extends [infer FirstItem, ...infer Rest] ? FirstItem : never
type Tail<T> = T extends [infer FirstItem, ...infer Rest] ? Rest : never

type RemoveStartWhiteSpaces<T> = T extends ` ${infer T}` ? RemoveStartWhiteSpaces<T> : T
type RemoveEndWhiteSpaces<T> = T extends `${infer T} ` ? RemoveEndWhiteSpaces<T> : T

type RemoveStartEndLn<T> = T extends `\n${infer T}` ? RemoveStartEndLn<T> : T
type RemoveEndEndLn<T> = T extends `${infer T}\n` ? RemoveEndEndLn<T> : T

type RemoveALlWhiteSpaces<
  T,
  T0 = RemoveStartWhiteSpaces<T>,
  T1 = RemoveEndWhiteSpaces<T0>,
  T2 = RemoveStartEndLn<T1>,
  T3 = RemoveEndEndLn<T2>
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
type ParseValueIntoTypescript<T> = GetMappedType<T>
type GetMappedType<T> = T extends `${infer Type}!`
  ? GetMappedArrayType<Type>
  : GetMappedArrayType<T> | null

type GetMappedArrayType<T> = T extends `[${infer Arr}]`
  ? // recursion to optional arr type
    ParseValueIntoTypescript<Arr[]>
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
type ClearEnumParse<T> = T extends []
  ? //
    []
  : [
      {
        // @ts-expect-error
        typeName: RemoveALlWhiteSpaces<Head<T>['type']>
        // @ts-expect-error
        body: FilterEmptyItems<RemoveItemStarEndWhiteSpaces<SplitByLines<Head<T>['body']>>>
      },
      ...ClearEnumParse<Tail<T>>
    ]

type ClearTypeParse<T> = T extends []
  ? []
  : // ---- gaga magic ----
    [
      {
        // @ts-expect-error
        typeName: RemoveALlWhiteSpaces<Head<T>['type']>
        body: {
          // TODO: extract into "variable" or MergeBody<> Generic
          // @ts-expect-error
          [K in ParseKeyValues<
            // @ts-expect-error
            SplitByLines<Head<T>['body']>
          >[number]['key']]: {
            // NO idea what am I doing :D :D :D but it works :D :D
            args: {
              // @ts-expect-error
              [KK in Extract<
                // @ts-expect-error
                ParseKeyValues<SplitByLines<Head<T>['body']>>[number],
                { key: K }
              >['args'][number]['key']]: ParseValueIntoTypescript<
                // @ts-expect-error
                Extract<
                  // @ts-expect-error
                  Extract<
                    // @ts-expect-error
                    ParseKeyValues<SplitByLines<Head<T>['body']>>[number],
                    { key: K }
                  >['args'][number],
                  { key: KK }
                >['value']
              >
            }
            // args: // @ts-expect-error
            // Extract<ParseKeyValues<SplitByLines<Head<T>['body']>>[number], { key: K }>['args']
            value: ParseValueIntoTypescript<
              // @ts-expect-error
              Extract<ParseKeyValues<SplitByLines<Head<T>['body']>>[number], { key: K }>['value']
            >
          }
        }
      },
      ...ClearTypeParse<Tail<T>>
    ]

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

type ParseGqlTypes<
  T extends string
> = T extends `${infer _Whatever}type${infer TypeDeclaration}{${infer TypeBody}}${infer Rest}`
  ? [{ type: TypeDeclaration; body: TypeBody }, ...ParseGqlTypes<Rest>]
  : []

type ParseGqlInput<
  T extends string
> = T extends `${infer _Whatever}input${infer InputName}{${infer InputBody}}${infer Rest}`
  ? [{ type: InputName; body: InputBody }, ...ParseGqlInput<Rest>]
  : []

type ParseGqlEnums<
  T extends string
> = T extends `${infer _Whatever}enum${infer EnumName}{${infer EnumBody}}${infer Rest}`
  ? [{ type: EnumName; body: EnumBody }, ...ParseGqlEnums<Rest>]
  : []

// whole codebase extractors

type GetExtractTypes<
  T extends string,
  RawTypeStrings = ParseGqlTypes<T>,
  Splits = ClearTypeParse<RawTypeStrings>
  //
> = Splits

type GetExtractInput<
  T extends string,
  RawTypeStrings = ParseGqlInput<T>,
  Splits = ClearTypeParse<RawTypeStrings>
  //
> = Splits

type GetExtractEnums<
  T extends string,
  RawTypeStrings = ParseGqlEnums<T>,
  Splits = ClearEnumParse<RawTypeStrings>
  //
> = Splits

type RemoveComments<
  T extends string,
  Lines = SplitByLines<T>,
  LinesWithoutNotes = RemoveLineStarsWIthHashTag<Lines>,
  ClearedQuery = JoinArrByNewLine<LinesWithoutNotes>
> = ClearedQuery

type GetGqlAST<
  T extends string,
  ClearedGql = RemoveComments<T>,
  // ------ gql input ---------
  // @ts-expect-error
  GqlInputs = GetExtractInput<ClearedGql>,
  MergeInputs = {
    // @ts-expect-error
    [K in GqlInputs[number]['typeName']]: Extract<GqlInputs[number], { typeName: K }>['body']
  },
  // ------ gql type ---------
  // @ts-expect-error
  GqlTypes = GetExtractTypes<ClearedGql>,
  MergeTypes = {
    // @ts-expect-error
    [K in GqlTypes[number]['typeName']]: Extract<GqlTypes[number], { typeName: K }>['body']
  },
  // ------ gql enums ---------
  // @ts-expect-error
  Enums = GetExtractEnums<ClearedGql>,
  MergeEnums = {
    // @ts-expect-error
    [K in Enums[number]['typeName']]: Extract<Enums[number], { typeName: K }>['body'][number]
  }
> = {
  types: MergeTypes
  inputs: MergeInputs
  enums: MergeEnums
}

const typeDefs = `
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
type Book {
  title: String!
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

type XXX = ParsedGraphQL['types']['Query']['books']
