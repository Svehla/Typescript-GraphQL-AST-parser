# Typescript GraphQL AST Parser

!!! DON'T USE THIS CODE IN THE PRODUCTION !!! 


If you want to interactive play with this source code, just copy paste `index.ts` into https://www.typescriptlang.org/play and set typescript version to at least 4.2-beta.


This repository is just my fun project where I demonstrate power of typescript by writing Graphql parser in pure Type system.

## Preview


you can interactive play with the TS-GQL parser [there](https://www.typescriptlang.org/play?target=1#code/PQKgBApgzgNglgOwC4FoAmcoEMBGMJgC2WAHivgmCMALABQoksiqG2eBAAkgJ4AO0AMYAnOH1TR4yYAgD2KAK4IFUCGhQA3LMKhVadesGBgUps+YuWrZw8evmwCpHBi77Nhnfff79CCT5ZYSQwXgEwAGEsKCQAHgAVABowAFUAPjAAXjB4yBIkCAQ0XRSwAH4csAAuVPowggAJCCw0BIzs3P8Cot0AbUQAMwhhMAAxOB0kAEkCwmSAOkXB4bAAJWgkAF1ysYmYmYhCarAECA1huv4CeKwXNqzKrsLisH6EIZHxyYO5sEX55YjdYxbYVYEhGqnc7CeiXcLrQiyc4AZSQ2iQAHUABZwArIvhYQTQe4dPLdF4AAzAABIAN6AnIAXypYMOSIgqPR2NxHIJRKg9xq8ThBAR7IAokVuXi+cT4u1HvlnroKXSGfFGWAWWs2edJWhpbzCXKMkLYXR6jrESi0cF9QAZBAkxXklUAHQQaveKw12rFNvRDqd8uOws8oSuVolRSDzs6Sp6Wq9HyZHr9uog+tjIbNBgtkf9EAAgvaYIb8caBfQwDlEtWcgAGB6FznBcuygXyut0GvxACMzYz+vblYSDbS9aMOQATIPrRzbUhs320t2a1P4gBmOfRtDZ6cTugK-vmqf2MBF4TCLA8FD2xDQRzOVwmHweEVR84-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-vqEB-dYApM8E3gFvgUA3EPB8bYtxQsBS4zmgkdDBmsObFwh+2BkbYP1maw8M9eGwCOSva5fzgW3VPpfZQZrrXBUdYCT+xhQGQMrP2d55bfm70BYfVwlpmyrnSpue4sDLa4jbba3tnglC4NAJAchozaGxItIa-hXDRmmNzfrH+tTQoriifrAVprI36AXOLfW6wJ9LClvtNW3NB9Udo8sDI57EG-adqLBvDLMbcpFYKkO7dTmafLsnTOztBN2pLq61s+nYXGdbqMmlgqe7MaEZfp2iHbqzu+dvcMK7QXn2vqg5Nr9dXYdqaO6B5tEHYiK89V+77UOkNgBQwD7T2H2pLII0e9VVwoAyLMzAVnfaGM0-B+olj9tONYm49CRklpoVXGSYIGA2gSk8sZOJoTOQrjNZk3JjYCnXjZYEDDgQgfg-XmcDk-LI2U8QFm8Z6LzOHc28s0gazNZoJJcjCugXrm3e8Q8zXCv9ljBLal6t67NZgtc-5wzi1HjTFRcWDXvv8WnGLztz3gXlP+0rOrYVi12fMML+WiVvtquAYVeLD86rAEVcCAa5jKcjD1kwF+lgSgXvzhECCAQKQj5cRgB4GTMAV+CCEFGS4B8orBczZGzt9rTrbIPRMFXraABJWJTsYbTDBrCbXXGDTGWbbIebFvfeMAAqC2LAIgC2d+fefCSXa9aXe9OXTbRHTDAAj7ShA7EBdXE7N1BbNvQgjvfZaBKAO7Xea5e0MFN7QVcLWIYnNyWIHgwAgJb7RhP7VDH9Vg4Heg1AxglbS7NbNZW7Cde7Tpe0bpAQ17f-d7NxMQ37I3f7H9IHMbEHHDV3OgmsA3VpKPAQOHdqBHZrZHUJcMPgDWJAXgDud+QBEWf+FYIyHEQQLEDuEWPlMADWKARNa-OAAYH7HTFpV-aIRaDKAgVgr6AAKxUBCBwBFiCJvUAVXxiNCCxAIAQDU02yDwUCGRVAAAoqQcAW1gEQggiQ83JvUpwcAkAjJijhgCBMBP4FA-F35uNfoDMCABhPIoBfF8ATgckf9YEkY4jwib0uUpickvp4h0lEl0kagWg0BP5ZBBBbdJoCAQCrgwD04sRICsFvlcFd945CFWUm9QxCF7YSEyEKFDEjp7ZN4uUIl48nipwijEBKihktNGiHksgMgT8vddBWD-h8ISFXjI8uMkA+xGQajGUiMoB6kLpZ9WMUwSFRMMSsTBdGQABKchSPShPSSA74yPeTBFMNV4fZGiFAtZBhAwlhO4siYkNCQMIoR0WIIktTf5DkrhKcQoXAGYqAIYkIVgrTHWWQtZKcPsckk4YyMAe-VkiU4wacdUv6TKLAHUmiVg9gjkaYuxT7BxSncUmiRiZiVidiTibXOUu6U4AUMWCWAyKWaKXGIOaIWISA3CMUu0msAZcUlQ7kwRWIGkngYMk0uCCIpAPhGIRMxqRMwvK+UAgJPrCA7E0vCMuCEaGiaCRM9kjkqcBQAqLEGoMSdjCwFNMM8Qz8bfHkuOPkqORcWMDhIstZM00lM5MM0-XhVsqrXkoRQxPsuCDM5UgiYfcJHM60wJfMwXWIX4jWcEacksl4haAklYd4qkhkOpYKBkjYacXEjqHUismiKsmsus9jStDWFAJsjkls6M35FCfku0QUp0XsxMgcixRMqM24mMhZHU2c8UrM-Vc43M8Akma48EA8fZHcyvMeEaOzYYTg7gnQ3gmnSnDcLYnYyoM2MmGAfYr1AVBAGAEWaBZIX+cBUmGY7TJ3BaW1UCI-YwTY7Y3YtACih5ZiE4NTY4msWJIAnIOAqbUrCOSw89Lioi3i-YgqGdH-A5GpEIFpfA1vS9dvRQzvV4JBeXSgMS-bMSQ7YDc0zg2JeJEmapEZDJIVJ0U7bSnzJgvS-ZLQoMojPQufFswyowwHQxM3GiThC3VaBsGRHSJArUOoXEfAGo+seAQgXEFTZAB4PsCK9qWQAYAYVQFM3TJAWFZIDKAqGocLegSkt9GnWFegEZeWIIGoQNYNQq2ql+VK+gTaD8B2B2TnNQ6fM9ZTf1EgYalNRwpwugVDDHAncwKahwNeQoWBXHQnfHaa98E4sALQv2SUWBLtCnViv1QdesYdUfFzXq1QKjbawgLiTGDnYAnvS68LAUY6nnXdRrEXTMD1U9LSxbHStymXJQuCDbBXOUqASS5XX9DfCAWgzynXKSufawiQk3EbIDMGmDcw9qIwCw96y644zCi6z6mfZ3C1Cw-Ej3VEnjYQRkBawge2S64kiPBkS6mPWTM8mIBPXoJPGwumtTJfHTJmkbErEze3HGwsp6WzdaldB6-Cq2M9AghQ-667BGscnfCcobCGg-UwjGly87Ig2XBwnPXYJiYYJ03gF0oiWYH8KUT84kAbfGWrMSU3Mbf5FHZLe6j1R6iuP1RvHRaCSW92-CyLbxN22BD2hLazWa1ajwOtSOiwCOmOuOyOnNAIxNAgP6IZHANVMkF7IIXG9aoFKjcneIQmtimnTGP2dKIZJuZAcdJII1LHCuiAKuoGLfcu-6JGNnGsNtWLG3Quh4TauGULaAbtOIKIHtVuyutu6u5IW1XCMuuGMnDePuzXVteenuinUeuIcexuyeoGaemnWe+sLaz63u7Ifu+0HGwu2IDe2ILepuqAPei1f5BUAam3OuVegQXasMGsfjJwNgrHQez++samv+o+nawu5wvMP6BAGIatapcdTaG2SIHe3QV9KGa8PgLEMtW1XQGoqABQIIqBXQeWfonJCAdUmIdEcBSBeWAgWE4Imom2chngT1RNeYPwD1MAdJYQIZXSHgEhIyIIfYs9cnCIesRJcUZEURiaj8R5JwUPOYs9KBtENyUYIIQgBKt1H+-KrhnhvSfhwRoq-CesSq9KZACDVR4QQgYEMFCBy0QWYWWS5wJAeK-CJKlKgq9KzK-CbK3Kh5VKwq5IYh7h2JMq6q4x0Ji1Gq9qOq0mYQRqoNEpKJmsC2Gw51JACBrRidAqRAeRygM9FQ8q6RugTqvMTCtANBl5TB7HbIfOmdS++obK2BlJPdFwj8MXO6q+cp9Bqp-faAM3S0HGs6tQCpjBuGH9YB-pyME9IZrpypsZsSLRqAM3egIAA)


![Parser preview](/docs/highlighted-inputs-2.png)

![Parser preview](/docs/highlighted-enums.png)


## TS Parser supports

- Comments
  - Single line comments ✅
- Descriptions ❌
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
- Interfaces ❌
- Mutations ✅
    
(Btw Source code is full of bugs and edge case issues...)



## Example of parser usage

This is example of using this TS parser


Let's have this graphQL Schema

```graphql
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
```


Inferred type result will be:


```typescript
{
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
            contactForm: {
                args: {
                    input: {
                        value: "OrderByKeyword";
                        defaultValue: null;
                    };
                };
                value: "ContactFormResType" | null;
            };
        };
        Query: {
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
```


![Parser preview](/docs/highlighted-inputs-1.png)
