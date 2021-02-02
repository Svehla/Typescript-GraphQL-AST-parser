# Typescript GraphQL AST Parser

!!! DON'T USE THIS CODE IN THE PRODUCTION !!! 


If you want to interactive play with this source code, just copy paste `index.ts` into https://www.typescriptlang.org/play and set typescript version to at least 4.2-beta.


This repository is just my fun project where I demonstrate power of typescript by writing Graphql parser in pure Type system.

## Preview


you can interactive play with the TS-GQL parser [there](https://www.typescriptlang.org/play?#code/PQKgBApgzgNglgOwC4FoAmcoEMBGMJgC2WAHivgmCMALABQoksiqG2eBAAkgJ4AO0AMYAnOH1TR4yYAgD2KAK4IFUCGhQA3LMKhVadesGBgUps+YuWrZw8evmwCpHBi77Nhnfff79CCT5ZYSQwXgEwAGEsKCQAHgAVABowAFUAPjAAXjB4yBIkCAQ0XRSwAH4csAAuVPowggAJCCw0BIzs3P8Cot0AbUQAMwhhMAAxOB0kAEkCwmSAOkXB4bAAfQAlaCQAXXKxiZiZiEJqsAQIDWG6-gJ4rBc2rMquwuKwfoQhkdXxyaO5sCLebLEabGK7CpgkI1c6XYT0a7hTaEWSXADKSG0SAA6gALOAFNF8LCCaCPDp5bpvAAGYAAJABvEE5AC+tMhx1REAxWLxBO5xNJUEeNXiiIIyK5AFEinzCYKyfF2s98q9dNTGcz4iywOywJLLjK0HKBSTFRlRQjPDkAPIAERtNWIAGsCABzQrDOCCUKyMBwN1yYQEAA6lCwIRiWN0WCKoVxBFeYGDggUOjglxgPHF+s56MxwSNABkEOSVVT1WHNZ8Vtq9QbuQWkMXS0rTmLrfVcyjDUUW2XOqqerrq19WWH63mIEb+23LQY6F34qJCLF6GAwEZ1zlEtv4gAGJ4NnnBE1Es3CpW7ugb+IARiPU6NZ4Vl-3aXoyvvVqtoDqWzAQQsBgGAc3iLYIlkBA4SQABBYRhCmZBZBtHAACsnkg6DhjghCkKQFD0IgQQ4m3Xptw3Bl-TQGoAHI4DQO9aOSLQYDou8SE4khaJZa8N0o6i6IYgAmZiwFYujhK47jeIosAqIYoS0AAZjEiSwFo5TpJ4viwG2XT6LQWjP3oagcywmD4MQ5DULQ4jSJvcs1Xk94AGl-UoVyIB4bYahiUQEDdMAWV6fTty8nhKWc-zEDdXSrIANWAhRoCeeJemUQgcGGMLHIi3QOgyhQspy3oItyjdbKeBk5LKjzImiOJ8uSGLArSXywClfJhBJOJEuS6Bkio3pXUixAwHKmp3JZD9HJZT8nls38vCsMArKwHgUCLRBUqcFw3B8DwrS7ABZLA+GXOBVzbCkXmHUK9gempeku1cmhaNo0gWRYzoulcEnuGBPu2Y6bhyFdYJA7bzkvKLh1at1lQAKVkRArIAIR4AA5CAAHdoYgWJfte2IiXgJBMYJy80hp0HwnGGACmEKVCHEHh-lhu63gR0Kvzht5Qu3CpBccmp3taNsud0WjjMciojDAbgoBQfwBBIlWEKCOSGaZlm2Y5gGHiVWaNxqBWlZVgJ7I14QtccjdenFtpvvmHXhj13gDbuI2aZBhcczJglMYSfndAR5I7QgeBCH5EYpbABG+fj6lqSF94-dNpzhw1JkaxGWCWUZSPo9jwvc7HdG2TT3pYJdwOKZ4WJ0YjqOrtj9rt2e+I-ZzFHEBD+PYx4UKW5LpnQ4TpAAsRp4s4Fv2Khl+gzeMC3Vet4ZbZGMod7Kbcc6dpUy+LtumbLvvW0B52wBPmOmbSKuFy7evMcgwhiE5oduan2LlRfxukgaUSLRWaz8+Dk0pjtT+FZJ7Tz-uAoOADki0TDCAgOCCG6wVZsMbARQB5fzDj-NqTx-4JGQQAMjQU-MGF8MbYzxgTfBMCebbGRqjVsyDUGzRzJscBZo34f3iLIHG+MoFrkcoOZhRC4p7kPPHFhJCMGv1kO-aIzs9wPmyLQhCmMRGMIPLNL8d46YEH-gIrAsEihU3EbeCeMtdIHgngjR8fDSTmKgEIvRYirwaMURAng1iDELQ6MYhcCtDoRPMLYEw1hAIqMIIUJAB13DRMiWkkx3YuQAHEACKRYBGJOFHuJx0jdJUz8YgwJX1txU2xASXEsgnBY1kAUAqmTLgExPFAbEMxcQNGiLiO4bpYhU2qY5c2STLZqwkJreEjkIj4G0GoHJKVhCRS0ewuhXjzgjKgXUpADSmktOgIYzCizgxoBWcMbM1DwhTCgJ0ps3T6n9KgIMrAwybpz3VAAYlHCsAAGmyPYU8UqnAGMBVQOZclFgJvcgpyAyE5EPNkY8TYXwXmvveJ49zHnRn2X0gZQyEjviMRkhseKdA9IOa895nyk4EPTtXDOpwYVwqgAiuIh8aYT1BRANOFKdpdOpYSt5xLvZA2Np3d43KXaCvOMK3ptLxVX2Nj3a09gwAwrWmiXIAAFbQqgdAxOsKktJ5qzWatYmC4kOgVi+A1ea9JYTjDxHxLoD05xRA+jQLIVKcgQi2tUGAUa4lgJgFxvUsA2g3TFUKTmA1dq0RXXARACKSUYApQHP9SWjKc7MgiiyKo-yRgZpSo-DcFQar234qNUU-0Iom34hua1EB61XViGWiATaNzzVFmcBQIEMmJtUMm1m+B00DWpmlCeItK1Mv7SO7kKaJ3eS7bEblGR47KCHXLMAS6x2psnZmxUqrab9t6Aeldaa10DQ3c0CWNMXZXvHTengXbLxno7rcggS71hYFxjC+Cbou0EsjhCwdSAbTiDgFBAcE9815xvhGLA8QbgskyCWm+EAIOMy7RWvY1bm0toGjUP9AGYXrrtChtDAge38TQDhrAkGu3ttXOB5jeGBr0b7ZnIjxHW1kcNRAf9gG8nrqVHJDcjHcNIFY+JVGaA5J9oTcJ0TlG71fKyRAOTA1aOExJlKn9WqdNdv0-B5OWH9MsgAISpz3dp3TJ71o8HM-pptNRHNdpc25jIAAfAdu7oWmYGj5m4ZZ6CSOctSXoWGrIsm2PZ+dCsUxpigLBygBEwCyBg1BcN2gRhdlkAMbLuWEDhtbfVA5BACsbTkuRsTRZ11WTSHO1lIWT3o2iBAXzGSvMDS66oXzM7460QxNPWW86EbSqi8OWi+FJt7EytlOZmdZtvFoqMGAsgIyLYqMtq4-b1vS3RrIWQiyEB7bADgM7F2ZvLRNU6lJjqHDaqQnwJwoQwYOvCU97wv4QAgHXOAfwWBX2AWAlIN0VRtxgQAtkLqU9eowve04fTUBYIxFiPZxAH2QgAtRyEfjWAaj4Rs9uHApPkDk8coIGo43Yr0DZCbMyi4waI56iRFHCA8fo8xw5Wx8jSnblE-phngU2lLqyQARxgIT9RjkXM2gGITyXamAOE7F9I4Uoubji7dFAMZG4JnK3XurTedsNzrDO9MHnTgoC2XsphKClk8I2SIiRWISuVd26Scg+oWMwcQBAbpQnjuSJQCRioCmsg0DrPknJE3UyN6zNqu5cao1iv6ht6r8POwajW5abnj3SAyrbF6LRG7cfaIsr7cqMPJfI-R9O3H4dwmZdy99zY75sDGd0AZTAxDY5Vh4gjBcYYLIwy48+1hwngeEksgZLP33LeeAsjLsyKEBHhZUXKwkqneP58QAANzXdjzwA-ThV-BWfe32X8uoTfsziLVTdrROa719rizjK2vCxZSvRWSZM3GZLeWqBrD-AQfXe9D6Y2W-N-DXX3LXaeT9H2b9V-VQd-RAz-aebvY7FyPfNtXvQKU-KvC-IgoKWSCRG4I-NKHNCvAgmvI3TcVeIAq2c3VPRyVfPVW2PgKAY9J4F9I9W9E9YUMxeJCxKxbxCvUgxgpgpPYAm2S3MAYvOyEiZ3bCYIKyfCQiVQuILgngvg4Q5BUaEPbca-bIfjY3Fg03NgkApQh2dPSgTPErFQ+yDqBrDTE9WIVwkiMvCvVtRg7cOvaqbcAPIPUUagoPCnc-GoVfJnB7P7f7F7MwLVPJDyJmCFIUR7CwS1RIqwAHIHG8EHEgMHVNCHECWKGHRyOHGIJ4DnZHPJfCYYTI6AWCXVbHegFgZos0MAZpRjBPRyRSZQu0GnPtLo4QFo3o2PCAYSeSIYqYEYlkN0egakWaVnLseornRo5AbooUNo+IXAkpaeXSTAjIs0fXNXO1DvJoiYs0BXKwk1ZMCAFQAgafSMJ5R7bcBWXGAgYMF4sAbbN0b0MAAYW2E4bVN4r7cIXGfEQQXEMAXEaIBOIPM-OPWBBQEiNMGrXQG4yY0g7cb3XEi8AQ9XXGCAxsZA2IU43Yik2KQ3XSeQ2wxQ1bbPIvHY240kPPdQ13ayAiPPL3BCDaZXIkoUf3SIhJUw8ZFaJ4-4yE5yKJRyEUiAPPJvGIcwgY5tRk6ZZktPeqZw1k23M4zkkvDqQvQ0mkvPPwyvc-GvII4JZQ9klolUqPNU8-NvK4+-R0u44pIXaee0vAofFYEfREgoOESfBAcYyY5fI0iAI-RfaMmk1fdfLDLfJLR6XfcIh0mMo-EgmIrMxM8-G-QERYKXT0mMqkrYJ-U4F-ZIvInI2s17NIrsHwXIushUwwQo0HcHeIKopceHTqbqBoosPndotMvsmIfTDU-iZwJAfAAACikwBNPipxCGyDvH3EXOKwGFUCQBXJs2SAOQmDQGA3p2kTkgAEpTzp4adm1mMDkggagtsdskAbzgoViWd9AcxNikAYURyDifTGVw4RcAMkC6SSSPSYB0d7icgbgMcEJwKMCQLsC6SqSkLIDtc5DrDk92Ct4oA9xYKqpsgLIcItD3ddCEhYKrIxSBAj9JSNwTphgPR0cQia0tSU9QCa06oM9vIs90dbIOo+L0IrSZDa97SGLhAmLYKHt4h7RHRo00A0B-RX0ElkBdBRpcYghFKoAFA+BAhgh0CIAO8oKAKpE-T+8Rs80sNgyx8wywwuwrMbhI5BAYBtAIwMt4zy5awbgkyN8kNUy059MnKXKepnAoIEMHKaKg8dRr0VKkl6RPKRgphlLCkCN51yIa1m1LDiMNwCCIjIqElFzm1SC8qIA4iMriMYrClSdkrVLCqb86qgRSzILYKKyYh6MNwWVn86qsrsrcqYKBAgrXLQqEA6qNxir+rSq3Tyrm1KrVKYRB1QJpr6qlrGq79mqBAddKzFz-8F0DLdd0LKSvk8Df8F1M42KcL7D3gGtQLApoDH0vpiz5hrrkKJdDZJVfZ3TELcYbrhkTLnIFIaqkkagh5T8+qEZcy48-JpFlrbxxSCAOg6DaIGDWFdJ9CctDD31gIrIEKesbhj0UpnkDlgNLxpCbSUavisKFCLcWS0beDj1CLIgXcSK3c+SS8m5z9uD0bj0qKNITCmD1SsqFY5BcZ4wCBtUg0VhtLdKgg4qoIswwAHxIyeiBBCsbh5gpjqJmh-QStgxw1tUpa9K4qURgxE9XVZKag4TiJnR4wIwwAABqJS1NWK7WsAHgaAOSWaoGnICvT2qAGvCeHdGAR6XYGoYmf6f+LBFW3BCWH2wGv21hejAYOAKOYoGoHq5gx7MAN0D5LAIgD5YEhU7KripwnikrWmjGjNfitOuq86uwlk7KmNKAITO1YQdTPJfTVfYmzmvgKA8u+moS1ycvWiRuwIpa2unUpawTfdUkzwrNPu4Q2yK0gI1hRc3jfiNe4Iiw0IuGkqo-aIyGsAMqlTa0NEfEJAXgUIb1Z0SKCWkYGE70eEqeSKLLYMKAc7S4F2utMNE9BEpEt+hJaNCSvC60NCaPa7SKS2wQZ0WKF26rM4FExAZyhQRjdUOc2kHATnV0EIOE1ykiQ7BWdGeIbEGoarYMf0XQNAHS+AICAoOJfogYIIBOa9M4MKmNONVSkNbyJ41MdMMKqoBc60GSh0YGhS67HTceX1QQXQBhwrd1MAPgb0AgLPN5AkC+4gIEwQaJIRuSmE223ARpEILLKADBX0MAWYgYJQEiDLbLc4EExhoNGB5kVtFqYiKCRSmRhOPgXWjAQKQBnqHgKAPeNncIJdfTfG6AAlYmw4302KBxFcBJNAPA5xBGjtHxeZc5NQXIVFCAVxCAdxTxBhbxeJzJ05IijJxJhDNMv-aVBZZoC5AMrDQtYtBKsAfDKsFpvVLE-yvdBWOAErRBzNfojBkkLBrIDIUNREmMIBoEOSCKcKlp0fJAO8FkOcuLIB1KvYWppZCpyzFpiKOM1Zlp4mlkS8rDDNTGY59pzfLYDZtK0aqc7K5tL+kmNFLEfsfZoPc9R54jBWQoXAfATx8mQBg3cB+5h4u8c8s4PGJc84MFjO4SSFwQcQuFxu5u0da9cJopJa7K8e6muFjcN2ZmVmT2WYUQpRHgcxSxNAaxYmr575-idqx5qekmc5ngWl+5yg+lx60JvG4QgmyJoB1qpARljqxc56e59O7K55-6V5wsKxUsRtEV4jVF06rl7+lKNjTtbjDl3Sb51au1MJvliJ+pKJzp4MR-Oqzq04LZ+p+ZgtbyItM5gacMlMrYYSDZ4Wbq+56VjtWV5seV2IRV+5lVtrb55l-6LtJVzlx5-VobXlzGkQgVg3IV4SRlq156HamsrsJdVuijdu7y8-LungqAim20YRyoN5RpGARS7KGx+WmNZIANCNBpAF-EiRCeKiL+8G9Vwg5xEKCqQ+jmgwhm4izQlmnQ+yJFWiPmhxFFB5tyPU0uwduPbuh3dCdwmevJYDUDepDjSDaDYa7vTUympkvF8q8uxewe-wgaW0mtJtTe5FVsts0wJ9lI7VQoYqbI-Ihs59r8wcrYosGUYqDHdov6+GYXRyfa2kiXHGjvIDwgamXSeuOCkYbIX6BreDqAqDi4zCwAmw7Us9jceDtd3Q7k5m3kidz3ZDnm2iMIiUpg8Sj0Yjli49vD7Cuu3U7ingLPYjvPDqXjkvYSsmoqEqYQUS8ytDxi6cTKYBgyuDmT6JwCs8iTnvQM74RZ8fYQFkD9k4LDeDuMpfFp+Dny11mIbfd4KieoGofToPCGsg4zws3iblta4joVqsjNjJdD0kzD6Rb-GBE6trAAteU9jg5tS9bzzKKAzdF2Lz+A3GHznAiVYGT6kTADBL2KJhf6qE3t6ROzqG6eYKZUfjOjwgwzCveoUeh44Lgj0L1Esgwlj2dmUl0mclylyQmGBIUm6vBO0t8ahr4lpr44Ml-xNr6lqQ607r89Y+37Z9ywV91IosG+CYeyDMVKZ7Gb2b9s4Jggb8mFO0Zbqxy4DHLHMD7+Y44C3GfblMZwI7jt+B-fcgvL8g4KB6bIJqq7lbo76Cj7w76ALkoipmsdij-k0TH7m7waDSBghjqTxSre1ik9mrjisLxwzh7jkrMH1bkjtwtF1LxrKjA78HrH3wq9ibngSrt8lTxjtQFLjvDHr7vcf0u1pDay0MifMMDAa71bxWLDDnz72MqKmx+K5kOnyauPF1lp7pu58qyV+7wg3n37vepa8akXsq7K6N5tWNwy2XEXzatquSTN9VDbzblAV9t9tItEICYK5Jb9o3zbjJXbvJC34CQ1fnRT0y2Ji7nXu7sG6G-t2D2XJ34K6CwPw1f7xmjQ3CYHtm0HgnzH5BKH3SKn2H+d4u1HrPEPnQPj4GhAG5XtMSmHmngPy37QXAxn3Z5kFnzT8MqAYvkYHn2Py4OMq5vym5qp94RcmXvqkmeX8Ho-Rl9X-iTXjvDPtz-X6VGs234303hwYgcaZ1Sfu37bkzH82XfYt36KCDjcG1tQSCfomJ3x7JnsQyvJTlS8CGKGbxJ9bcGFDPkDrJgcpHAD2-137ftAXf7tXSPbhv1o3VOo-9n8vJDrxf7lN3+TBbnLzkoq-8Ec--cAWjkopY5X+oAz-vmw2r7E-+j-AAcOUgEHFEB0xMAXkmI5oDoBGAmFIQPaK4DGM+AosEqTv7oDOcmAmgWvwoHdp7S-GGvs7x0CeZHetfO-tuB76Y8uBRYIAbqm3obVBBf5bcDpyboLcyBHYDcG8WkGwCkAEgwYl6SFCCDGBIgugMfSRYIBai9QcDG0jTLsDgqzaajAUFCTyC1BBAPogQCZA0RhiNmNej8g8h45Ga78RJGoANRAlysw1PVDaAiAuQ3ie5CnlYLcHeDEAblMKlRCnr65QhkATKGABtDCBGMwgTGBFA0opD5IbRCIIkDtBSg0QEQNejpwSHFRZiVEWuIfWSCBDtwdoNevwI-qcAdKKtQXqMCmBSghBqwfIW0KxhTB4gUwG0FjFfKnQnAUQygFlV0GYgSIowIIIQDnLBCkhKQ4YOkO8iZC0ANmS8mAH1x2lHIXYK5Gskdr4BYqugWwWAHIRTFGM5QuSB8kIL4QDyBIecouTHghC1yG5cqluR3LPQyc2wfcvGCPInkth0iDYVeViivkNwd5BpMIEfLbYIwr5PtPZgMpoAskPUPgLiDSLZBHMHeNfvUCzwGCcMhue3jJxxpIiURaIosBXikG3suwXvN7sJhJHnQyRFeBodACpFgxb+xI5EQyLyQV4TBhqVkXcmsGXFVA9I1EdyPoiCj+RtwWChyNJFij6g8dCvPsLJ5+wuwquGUVyPJHii8c8degEAA)


![Parser preview](/docs/highlighted-types-1.png)

![Parser preview](/docs/highlighted-interfaces-1.png)

![Parser preview](/docs/highlighted-types-2.png)

![Parser preview](/docs/highlighted-enums-1.png)

![Parser preview](/docs/highlighted-inputs-1.png)



## TS Parser supports

- Comments
  - Single line comments ✅
- Types ✅
- Enums ✅
- Input Types ✅
- Fields ✅
  - Basic Values ✅
    - String ✅
    - Boolean ✅
    - Float ✅
    - Int ✅
  - Nullable Fields ✅
  - Array Fields ✅
  - Arguments ✅
    - Default Parameters ✅
    - Fields ✅ - Basic Values ✅
        - String ✅
        - Boolean ✅
        - Float ✅
        - Int ✅
      - Nullable Fields ✅
      - Array Fields ✅
      - option A | B | C values: ❌ 
- Interfaces 
  - definition ✅
  - implements keyword ✅
- Mutations ✅
- Directives ✅
- Scalars ✅
- Descriptions ❌
    
(Btw Source code is full of bugs and edge case issues...)



## Example of parser usage

This is example of using GQL TS parser


Let's have this graphQL Schema

```graphql
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
```

just by calling

```typescript
type ParsedGraphQL = GetGqlAST<YOUR_GRAPHQL_SCHEMA_STRING>
```

`GetGqlAST<T>` generic will infer type with this shape:


```typescript
{
  interfaces = {
    Node: {
        id: "ID";
    };
  };
  enums: {
    OrderByKeyword: "ASC" | "DESC";
  };
  inputs: {
    Pagination: {
      value: {
        value: string | null;
      };
    };
  };
  types: {
    Mutation: {
      implements: [];
      fields: {
        contactForm: {
          args: {
            input: {
              value: "OrderByKeyword";
              defaultValue: void;
            };
          };
          value: string | null;
        };
      };
    };
    Query: {
      implements: ["Node", "Node2"];
      fields: {
        title: {
            args: {
                limit: {
                    value: number | null;
                    defaultValue: "10";
                };
                offset: {
                    value: number;
                    defaultValue: null;
                };
                thirdArg: {
                    value: string;
                    defaultValue: null;
                };
            };
            value: string;
        };
        author: {
            args: {};
            value: number;
        };
        age: {
            args: {};
            value: number | null;
        }
      }
    }
  },
  scalars: {
    Date1: any;
  },
  Directives: {
    upper: "FIELD_DEFINITION";
  }
}
```

![Parser preview](/docs/highlighted-types-1.png)

## My TODOs:

### Max recursion stack calling
Now there is no possible to have more then +- 21 lines, 21 types, 21 inputs, 21 enums etc... its because TS recursion deep level

So I have to resolve how to bypass recursion deep level. It could be possible by extract splitting arrays into more smaller chunks called in more recursion stacks and then joined by some heuristic rule.
