const typeDefs = `
1
#
#
#
#
#
2
#
#
#
#
#
3
#
#
#
#
# 
4 
#
#
#
#
# 
3
# 
# 
# 
# 
# 
4
# 
# 
# 
# 
# 
5
# 
# 
# 
#
#
6
# 
# 
# 
#
#
7
# 
# 
# 
#
#
8
# 
# 
# 
#
#
9
# 
# 
# 
#
#
10
`

export type Cast<T, U> = T extends U ? T : U
type Head<T> = T extends [infer FirstItem, ...infer Rest] ? FirstItem : never
type Tail<T> = T extends [infer FirstItem, ...infer Rest] ? Rest : never


// ------------ deep recursive error solution --------
type MapperData = {
  0: 1
  1: 2
  2: 3
  3: 4
  4: 5
  5: 6
  6: 7
  7: 8
  8: 9
  9: 10
  10: 11
  11: 12
  12: 13
  13: 14
  14: 15
  15: 0
}


type Mapper <T extends keyof MapperData>= MapperData[T]

type RemoveLast <T> = T extends [...infer B, infer LastItem]
 ? B
 : never

type GetLast <T> = T extends [...infer B, infer LastItem]
 ? LastItem
 : never

type SplitByLinesCount<
  T extends string,
  Count extends MapperData[keyof MapperData] = 1
  //
 > = 
  Count extends 0 
  ? [T]
  : T extends ``
  ? []
  : T extends `${infer A}\n${infer B}`
  ? [A, ...SplitByLinesCount<B, Mapper<Count>>]
  : [T]

type SplitALotOfLines<
  T extends string,
  T0Parse = SplitByLinesCount<T>,
  // @ts-expect-error
  T1Parse = SplitByLinesCount<GetLast<T0Parse>>,
  // @ts-expect-error
  T2Parse = SplitByLinesCount<GetLast<T1Parse>>,
  // @ts-expect-error
  T3Parse = SplitByLinesCount<GetLast<T2Parse>>,
> = GetLast<T0Parse> extends ``
 ? []
 : [
   ...RemoveLast<T0Parse>,
   ...RemoveLast<T1Parse>,
   ...RemoveLast<T2Parse>,
   ...RemoveLast<T3Parse>,
 ]



// type X = SplitALotOfLines<typeof typeDefs>

// type DeepFlat <T> = T extends []
//   ? []
//   : 

// type Omg <T> = T extends []
//   ? []
//   : [`${Cast<Head<T>, string>}x`, Omg<Tail<T>>]



type DeepFlat<T extends any[]> = T[0] extends any[]
  ?  DeepFlat<T[0]>
  : [...[T[0]]]




// type Wtf = [1,2,3]

// type Gen<T> = T extends { length: 2} ? true: false



// type XXX = ParsedGraphQL['types']['Query']
// type InputsExample = ParsedGraphQL['inputs']
// type EnumsExample = ParsedGraphQL['enums']




// map!
// type FnA = <T extends string>(a: T) => `x${T}`

// // type RetunType2<A, T = (arg: A) => A extends ()> = 

// type Omg<T> = T
// type Cycle <
//   Fn extends Omg
//   // Fn extends (...args: any[]) => any,
//   T extends any[]
// > = T extends []
//   ? []
//   : [Fn, ...Cycle<Fn, Tail<T>>]


// type B = Cycle<FnA, ['a', 'b', 'c']>