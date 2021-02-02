# Typescript GraphQL AST Parser

!!! DON'T USE THIS CODE IN THE PRODUCTION !!! 


If you want to interactive play with this source code, just copy paste `index.ts` into https://www.typescriptlang.org/play and set typescript version to at least 4.2-beta.


This repository is just my fun project where I demonstrate power of typescript by writing Graphql parser in pure Type system.

## Preview


you can interactive play with the TS-GQL parser [there](https://www.typescriptlang.org/play?target=1#code/PQKgBApgzgNglgOwC4FoAmcoEMBGMJgC2WAHivgmCMALABQoksiqG2eBAAkgJ4AO0AMYAnOH1TR4yYAgD2KAK4IFUCGhQA3LMKhVadesGBgUps+YuWrZw8evmwCpHBi77Nhnfff79CCT5ZYSQwXgEwAGEsKCQAHgAVABowAFUAPjAAXjB4yBIkCAQ0XRSwAH4csAAuVPowggAJCCw0BIzs3P8Cot0AbUQAMwhhMAAxOB0kAEkCwmSAOkXB4bAAfQAlaCQAXXKxiZiZiEJqsAQIDWG6-gJ4rBc2rMquwuKwfoQhkdXxyaO5sCLebLEabGK7CpgkI1c6XYT0a7hTaEWSXADKSG0SAA6gALOAFNF8LCCaCPDp5bpvAAGYAAJABvEE5AC+tMhx1REAxWLxBO5xNJUEeNXiiIIyK5AFEinzCYKyfF2s98q9dNTGcz4iywOywJLLjK0HKBSTFRlRQjPDkAPIAERtNWIAGsCABzQrDOCCUKyMBwN1yYQEAA6lCwIRiWN0WCKoVxBFeYGDggUOjglxgPHF+s56MxwSNABkEOSVVT1WHNZ8Vtq9QbuQWkMXS0rTmLrfVcyjDUUW2XOqqerrq19WWH63mIEb+23LQY6F34qJCLF6GAwEZ1zlEtv4gAGJ4NnnBE1Es3CpW7ugb+IARiPU6NZ4Vl-3aXoyvvhhAOfiWwiWQEDhJAAEFhGEKZkFkG0cAAKyeQDgOGMCIKgpAYPgiBBDibdem3DcGX9NAagAcjgNA71I5ItBgMi7xIRiSFIllrw3QjiLIiiACZqLAWiyO4pjmNYgiwCIiiuLQABmPiBLAUjpOEli2LAbZVPItBSM-ehqBzJCQPAyDoNguDsNwm9yzVcT3gAaX9ShbIgHhthqGJRAQN0wBZXp1O3JyeEpaz3MQN1VKMgA1LAYAUaAnniXplEIHBhj8yyAt0DpEoUZLUt6AK0o3UyngZMT8ocyJojiDLkhCzy0lcsApXyYQSTiSLotiqBkiI3pXUCxAwAKmp7JZD9LJZT8nlMq0jBMawwCMrAeBQItEDipwXDcHwPBzABZLA+FWZc4FXNsKReYdfL2a6al6E7VyaFo2jSBZFgOo6HoSe4YBe7ZZuMJcV1AmAYDW85LyC4c6rddorS7cYYAKYQpUIcQeH+SHLreGHfK-KG3l87cKiJyyaie1o22x3RSO0yyKjm7goBQfwBBwlmIKCMTEeR1H0cx76HiVcaNxqRmkGZ1nzI54Qucsjdegpto3vmHnhj53gBbuIW0ga+GbjAIl4CQAAhHgEgJ3QYeSO0IHgQh+RGamwBh-Hnepalifef6yas4cNSZGsRlAllGVt+3HdDwOxxNtkvd6UCVaNgkzdiE2bbt07Hb1337p9nMAClZEQC3ndjHhfIziPkctl2kA82H4tr0mNwqWntzF4wmZZgJpeGWWRjKIeyjEgOlaVKPw6z5Go6Lkvtd+q8wCnh3kbSOOFy7ZPTZ4QDCGILGhxx+vQuVbfU6SBTElI8at74Y2zfBxVa9dp5z-Ny-SLDG+c3f0C0eGNgIopcj5WxPvVN+98U4f2SKRAAZD-TeBs54ICMmbAAchAAA7k-EBFY64Nzxk8FBCRYHf3GjmTY98zR7wPvEWQmCcHrWFHuF+4Cwp7kPM7XGuxsjv1odEZWe4HzZBQWgngjDcEHnGl+O8+twj8NkPvLAoEihPxYZZQc+DaaqQPGwhuj5qGkgEVAehkjmFCM0SIw2UCd7qISO+KaHQ5ELjmjtdx5hbDzSsGAQQSjCCFAlt43w1oPFhPkRKKcABxAAikWWhgSNG3n0aFVS6jIEPx4PYq8251HYgJLiWQTh0GyAKJlfYSNhirFiUWJ+UwoAJOQLEdRr1tzi0lr3dm-c5YbgiPgbQagYmxWEIFURxdUEQQwdg3BeSClFKQCUspMjEL9ODGgIZwxsxIPCPUp+J4Jb5KQLiBo0RcR3DdAOWu1IADEo4VgAA02R7HrrFU4AxoqqABraB0NQWhoBdgoPggRghgAGEEMANSwBoCEKIcQcAgJQBzDUupDT-GBLLLs9a+yoCHOOac85bQIkVORtUuJKLGlxHOn7QmPtW7ew7hCsl616kUtiOPXWtcXkQC9mrYQpLanMtRfvdFC8XoMsVs0Smr1ASLF5fy8laKmmiuFvnUJC1IWgTRLkAACtoVQOhgmeLVWE8JxqLBgH6jUWirziQ6BWFYLxJqTVfPiPiXQHpziiB9GgWQcU5AhFtaoC1zl+LRTAFggpYBtBuhyoknMuq7VolOvfCAAUooxQgAOFcjx3Z3JGAFFkVQ81gHTbFDedLSry3YpanI2aAoi3Yhua1EBRTZtLRABtG5Jq+2UKDIlH1VgJtUEmtG+A02dUzVSrR1kW43VpacXoQ7uTJrHc5dtbLJUvRVgOpdI6U3jozYLReutVVdiXesLAWCangTdO23Ftt3kKCRjaOFQFLm5ujisO0EYsDxBuCyTIxaH1YCfUgdt5a9iVsbU2idNRz2Xpqeu79mI-0CE7exaFj6kbttbadWIwHQPtvQ920W4kxIwYzXBvVEAL1XrieupU5GoUQCw2B2D-Fi5oDEt2+N1HaOIYnWWKJEA2MZtQ5O7NwsiXCdE7FcT77QEjk-SMcTLIACEnt6YQpE+2paPB5PiYbTUGTumILLQMxkAAPmcJ9MBpM6YnXpizTd3a9GLUZFk2xNN0rmimNMUB4WUAwmAWQr6EBhu0CMLssgBghbC2G5tFUjkEEi8tMS8G6NFnXUZNIs7jMOYzSbaIEALP2dkxAIrqhnMXUU6RDEDc6Z0phgy6dw5SLoUa3sJKKV4S+1a28UiowYCyAjJ1io3Wrh9drqRE2shZD9IQGNsAOA5sLZa18p1O1HXmshVBPgThQgGxCW4zb3giXNXrm1Gpe2nDiagKBGIa5NEpM8qpWj4n6uhXKUuqJABHGAN3KWtMsnpm0AxAflJ3Xxy9gOPvsNiO9m4n3PJQGBxudpPc2YSE5r1jc6w5vTAQPtiWplzKISAoZNCJksI4ViKD8HROnDdQUvUdBWAAk31UoD0nOEoAFxUKbWQaBRlkarRjqWXScdlXsoNfqMX9QE4hzznYNR8elKVzTpA+Vti9FIit4XpF53duVNzzXfOBezeF0Sn7-3AdPeSdw9hTjqXqmLasPEEYLjDBZGGRAxP6TKbAIDtnASWQMmLYDy3PAWRR2ZFCCDJMiLhYCTUYP7OIAAG5ltC54KnxngvhfeRVjbgH+eEdbBzqR0m+1DqDuh1g2HSP4dTubvOkm87O5gG7hL7HA8yoZcbwIZHFz2XSqBFDu1tHB+Ngbkev61v6-T+H-bl3Nlk8toIaFLP+vc+b88kXtpXcJaY77lLyyUftWyz4FAA9TwJ-DpXamtdgnFHKNUWgbJuud+G91qpcXnTe8ekg988oBldydkJggjJ0JMIzJacL8r8b9n8YBYF+pOdtwo8SoxJ-8scZYgCFYZdKA5dYsNdYCVcwAMsBND0SDzJtdddm0f9txjdMDLJWd09cMzpdd18GDLId8ago96AeMzVTsHUhCUBGUiwHJkZ3khRDUjUTthDrBzsWors4l0JhhpDoBNV4gV9+swEG43sYdkB1CzRh9vtqM-tS8pCzRLF0cvAxDgwVACA-cDsoxghtpTBD9w0CAHCg1hs3RvRQVZYThIVnCQguwsF8RBBcQwBcRogXZ09s9C93IFAcI0wUtdA1DhANDEitkNx6dMiNDIda8B9884dZ8p8jCsiTD2FUc-8j8OkcDulccFd1dKiNCwDsgDIUIoDqdSC6czMeAwcCiLxYFWCOc0dNw7DkwIBHCHJ-drIjUNxhjSRldzcYgMDsgoN2JsDT8+8q1ypZdnJ5c1dCcrCVjNdGoTjliIBldaC9cc9DdGDndrjVj+d1ic8F87ULDridCXs3RnddClNmR3dYiCg4QfcEAWBjDSQA9mRriQ8IAw8I82izQo8Y9i149vMbok82DgCziIAETt8c8898SMDWIZV5gS8fioRK8F1VV5CFDLBtsfFIUuwfBmTGSLAlDLscIak7stDfjHd9DtxEch8aingS87sbCcgbh7sII79ij68yjQoEdL1lSUcJidjJcB5EVNFZTipOiKduiqcMJlcEhZSjJRibgES0DLI9phgPQ7tmDG0tTADmj8CKoiCZSBBQD4JGo7tTI7jv8jdnd7ThBHTZSXV7RHQo00B-lH8AlkBdB+osEgh-koBAVgUkBeMvj-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-Pj398QX5Wk3-sSv+zpT2u9UmPIXWPoD2OcOXPUOeP5K+PNPBO7IfWeB5cuudBldGpy4niM2nXNON2LDZudDDPFNs2xxc3yyzOwwoBsvtAnORgAuuO8H3OOzP6tMly1zfPBKvpzuIOeG0b8n2Jov1vjvhAe2xIkv-3Uu5D8ufFiBBpTV0uYOkURMLCBSMPoZqu9xD61B0lCz98xlEBxFzFzhYhhrs135sldZl7Vk1BAIAHUevIN7ok4kKVLwkeP9mEJialZuxX16mplDeTivvu0O4h6nSeO1VIak4utCnh4OOfEOhvNDHtef7bGfVDSiLStURf2ekBrt5efTyvYhpfoVZeix+TFfshReVeTn1fxWtf+ftxhX-XheDflfLfRWBSzedfriWeleeSjeixneHfie0A+flkUWNwjvSudBjNOeg+WftxnvUOQ-xfLPUOtCcbZTo+9eOwNwC3lXo-TX4-LJQiHrVfidk-tw4rCjo-PetU-2Fw-EEAYhDsBAH1yksTA-+zG1kMIAXENwi+zRUr7bxJJIg87Q1N0brk5iDsKU1BdV-DwtByEBtUbQIgbJQiSS1NvJC-88WKJ+-zKAiIXHh9l-LI0+wAbRhBoVhAzYApUyj-xJNUIhEg7QpQ0QIh0b9+0+y6iJE4wXkg5-tw7R0bI+uBMyVghyowKYFKEQ6rBb+QA9BFMHiBTAbQ6CBPuED2hOAN+jDDcJX0xA4RRgQQQgCrQX4H8j+wwU-s5HP5oA1MpDQ2Omy7TwCCAGyEZA1RTTnldAJSABnAi77QoX+YkTahvnQjJBnASAfAAHUPLVxF+TwO8My0PIxYBgqgJAHdHQhqZtgamHgfiCP43oagw+UgRoyQFT81MHApwIUmEA1AhsI2JANoImj0BNMOZVQGgCiStQ+AuITltkBkww9xW9QeXPUDr4UJ9mBAV1pR2oxWCbBdgosLrjT5QBHing0DrHzig+C7Ufgw6AEN1y-8QhPsLeFzxa5qBrBsQuJLrkb56pQhXYZ3qkJiG2DMh5EFEkKFyEGwnSUQywekKKGBCr2PpQ3LrhoE-skhBsCHAUJqFxCShxORIVaCAA)


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
- Interfaces 
  - definition ✅
  - implements keyword ✅
- Mutations ✅
- Directives ✅
  - option A | B | C values: ❌ 
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
