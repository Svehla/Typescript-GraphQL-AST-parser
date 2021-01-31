# Typescript GraphQL AST Parser

!!! DON'T USE THIS CODE IN THE PRODUCTION !!! 


If you want to interactive play with this source code, just copy paste `index.ts` into https://www.typescriptlang.org/play and set typescript version to at least 4.2-beta.


This repository is just my fun project where I demonstrate power of typescript by writing Graphql parser in pure Type system.

## Preview


you can interactive play with the TS-GQL parser [there](https://www.typescriptlang.org/play?target=1#code/PQKgBApgzgNglgOwC4FoAmcoEMBGMJgC2WAHivgmCMALABQoksiqG2eBAAkgJ4AO0AMYAnOH1TR4yYAgD2KAK4IFUCGhQA3LMKhVadesGBgUps+YuWrZw8evmwCpHBi77Nhnfff79CCT5ZYSQwXgEwAGEsKCQAHgAVABowAFUAPjAAXjB4yBIkCAQ0XRSwAH4csAAuVPowggAJCCw0BIzs3P8Cot0AbUQAMwhhMAAxOB0kAEkCwmSAOkXB4bAAfQAlaCQAXXKxiZiZiEJqsAQIDWG6-gJ4rBc2rMquwuKwfoQhkdXxyaO5sCLebLEabGK7CpgkI1c6XYT0a7hTaEWSXADKSG0SAA6gALOAFNF8LCCaCPDp5bpvAAGYAAJABvEE5AC+tMhx1REAxWLxBO5xNJUEeNXiiIIyK5AFEinzCYKyfF2s98q9dNTGcz4iywOywJLLjK0HKBSTFRlRQi6PV9Zz0ZjgkaADIIckqqnqgA6CE1nxW2r1Bu5DqQztdStOYs8oRutpRhqKYbdnVVPV1vq+rO9gbtECNSYjloM1tjQYAgk6YCaiWbhfQwDlEvWcgAGJ5BnnBasK4VKpt0BvxACM7dzRu7tYSLbSzaM9GVw6toDqWzAgiwMBgVpt8S2EVkCDhSDLwmEU2QsgA8jgAFZPfeH4bH0-npBX28QQRxZu9ZsNhlgHAaA1AA5EBQ4gckWgwKBQ4kPBJAgSy-YNv+gHAWAYFoAATJBYDQaB2EIYhyF-mAAFAaBQEAMx4QRmHUcRSEoWA2wsVhIHzvQ1DbrGD5HieZ4XteN6ft+A7umq5HvAA0oBlAyRAPDbDUMSiAgADmYAsr0bHNopPCUlJamIBpLGCQAahuCjQE88S9MohA4MMekSQZugdA5ChOS5vQGa5DYiU8DJkX58mRNEcTuckJmaWkKlgFK+TCCScSWdZ0DJABvQANZKeF-k1HJLIzhJLLzk8IlLl4VhgIJWA8CgTqILZTguG4PgeOKcZcv8nbjvi8qThGFIvGmunNhUE0STUv4SahPUJsag2mkKsQdiGE5rU0LRtGkaQsQtQJBn1DoDfyNZrXcDxKqVC3bLx4TjDABTCFKhDiDw-y9guRnjRC7y7DUO2tBGY1vCBIF7NdMAiu8INtAsiww20D3FjaABSsiIIJABCPAAHIQAA7s15zJn9bzTQ2FSQ82NRGGA3BQCg-gCF+rOnkE5RlLzZEagyCNKiy3qMljOOnvjROky1CT3LDt1so9BBEvASD4-uhDEL2lO6LFGm-eD6rUpNgP05JaYC8yZbIRmKy40rElTWWSPzKrBL42TZK4-F5u9PEaPde76s8F7OtG2A+uG6mNIm07ZszRbNJ2yMNui0yfojA7cc0+8LuAosweey1wo+2jDazQH1UmJ1tceIz9hrrIWuFEgHXuLYNd17XyuLRAADiACKTqa4Qrd1hJKYepHSDqWZzZh08RehyXiMLyX2IErishOATsgFB5fde52UDYjMuINNEuJ3BpsRhwdzYRPg2hqIPNnCIZ2TiwgeOEyTXt3w3lvHeSA94H1KsqJ+zRhCv3fjwXuUwoDHxDKfLel8oDXywLfEaSd1QAGIU5gAABpsj2LPGypwBgblUN1IeTovaINHq3BIyR4htmyBtXkK1LrmlYSObIiDkFYlQUgC+V8b5Tn2nZIcvcgxCJ0GfUR6DMHYOjtPamewNE1DoQwqATDkCxCFlIiO5CICmzkS1E+iixEYIkSjW6fsjGuwsecKx59lF2PlntQO0ZG50LqmiXIAAFbQqgdBdysJ3bu0SUBRPcPhDKYBiQ6BWL4XxMS67V3iPiXQGlCjDDgIIMAaBZC2TkCEZJqgwB5UMtBMAxMt5gG0Bpby49uohJSQZKyMAbJunLJWLa5pdbpgzpmAyLIqiEO6TZR2ucQrzVQjUmo-SqzcJ7LEAyd0FoJJ6RAZZuYKyrIuus6ZEAtkNnKonZQm5e4dNUGiOAH18BdIyj9OywyNFTXLqcO5EAXm7MMc0UGxiY66GuVueOvyHlPL+UpU5vYvEOMTr0X5-zelGIOgXeYULHl8GeXC15csbr7R8TaX56wsDEzoSeDSpzN6iIACIQCoQoF6l5xBwAPBTCOVtM5gAZVgTE8QbgskyIQplLKXqnNmXseZ2ydk2RqOSyldDTmxAFUKm45zUJoGZVgVlSBTn7PjBAQ5gzhQSv1VKjK2rLkV3ImRBs0FFVgGVVS4eaqlSOuKXqg1Rr8LYzQGRS57TQkQApe6p0nrlT9wgEgAAslgPgAg0DCoEOtA5Ay1nDX2r3WNCak0prTRAbloKRlahFQAQhznsfNibk1qHqjwYtCQtXmzrYWxtp4GotojAAHzOKyiFtC431pTU23taipLUl6IQwSLJtg1oqIzGBggFA6E5ZQN8YBZAcoPBuJpp4YwCDIm61VGVYiCV0ls7Ro7O1oFxtECAk6813obQ+p9k6sizn0IOYZIEMRz04gsio+syKin-a+YDC0KiOWcvCBZEGI4gVGDAWQgroOoVg95eD4HcGYVxrIWQz8ECYdzjgIjJG8NRjiRkzq1c6PeFo2YMA-jzx8CcMeggaSG6MbSYYEAIB6zgH8FgGFa4NxSA0lUZs3VdwxCeElWeqU6HsacMWqAZYYixDjogDjIQiFqZCHKppNRXyVubDgMzyALMSUEDUQDpl6BslKsJ-QNolMpS-KphA+mNNafEn+iO+sWIRuLY5zSh9fn9wAI4wCM2vCSTbLwDCM1FsNEajPhdnqZYUYWbgRY0lAB+ElGbM1ZgEMSnNhBBGbOsIj0xfNOCgCJMS94DwCRfMJD8X5L3dp4CltLyQQL1AJmJiAIESsNiM61r8UAMYqHVrINAn8HULLK23Cr7MJBcwQwtXoRDwo1NkAMfUDW0uzZ2Ms87TW26XYO9sXoIEKMrZAt8y5yoZs9bbgtmIhGVu3LDbF+Lt3YjNinsZHLmkKqjTLbyzMqw8SCouMMFkenOOEKM2NseLIGSY9u-9ngLIWSEKhDKqaAF6jWf09jiAABuMAL2eDU6cIT7SrtotxYS1CX2yLSWxjdVlgrUOiulvUd8r55sNsszZlV4YNW9uoRRRlylQuBCFcBbtW6HOVfEzV8GOeCLiW89DSkzLt3stzzB5PYZlObiqRFwzpnDu57s-BzcWno4TVmuzVdJ79Q3tTbAIToJNW+BQH+U8HFMK0VkmXmHBIT2meB6D9LrbcvdvNgu999rj5giCVfO+USvWQ9h4jwSmAw2amTZYmz7IJmGxp9lxzeXtWFlhUQNUpSJ2wDZ+L1d11uvz0Ar72JPyj2QLOom9sLZH3grNlG+N0UHvxuWeW8z4P6-nMMb49YZjFhWPDy4xEvf6Td+WCXEJugonxPxBk+jWM8mQjZE8yp4e-nAk6YX7GIhv+1sLWcCQHwAAApvV4BCACRrNn8wAhwWxvUTsBhVAkAoDK1khREJg0AaUHMRcyIABKbAueWzBafVURIIGoVDdDJAIg7SegakO6HiB-cIV-bzd-G4TTT-cHYZELOrSlS3XLKPIHOLDTRLQcNgwSAQs3Xg4XQ3daKQ9XEXYrFiJvSrFvXbKAd3AQFrW8XPTrISN8S7VtTQwSYbRfMeGvZseNYYPJDTefdbYwcrZvHbBXUKOSTvY7U7DTESBKTw28cfJPdfN7ZsOfbISw4QawtgwHFJYHYQzg4LHAugKdS2QhRHXEZHOEFkG0QhYtJlQQGAbQQVTdXHLIm4QnYnUnLYcnd4O3AQZfAQHIvIlKZwA8J3dfWoiANnZCLFTnGAYQnnb5WafncIN1PgyLMXKST5BOe1ZQ7barNvfbYY6Q0yTXYFTFIEBY+QmQ+xElSI1QfLDYpY2IstaovZGeOeFolbF3UyN3SeFfMeL3LkH3Y5Yaf3G4QPWvdfUPXdcvHgbpcQ7IX5YtWPERXEGlXsfw17GfJQ+wzbRw2YxXUvL4-5IKbIfiJ8AvbrfvWIBE8Pf5YwzCavIPOvf-VCXjUwMADSLBLAIgLBQpCJFwo7bvU7bE747pLwmoBvEk6EmXFQpwuY7ZZpKAJVMNYQCNOhYtQnUEz4vgDXZkpE3wmSCfAUwPb1aYjPZwhZJ1DKIUyQyNNVWUivESPwyfDKZUhZO1GghI2whsUwk44tWnNfC4zfAHOgENaMPgGBJAXgUIUQQQHKQySpFYYmfEQQXEb0wybdGBKAYjS4QCU7JZBVAgVIvWZuAgAUzuG8RbRnQyEMz8HKK4uAU7URAgBAcbeSXIhQXVdUYA2kHALzPKEIEM-Ir8K4aMXGeIbEGoIsmBQCXQNABQPFQpZHJuXVMAAYbmKAXFfAM4A8Q9FpMeZAXQGpMAVdddCcmcqoUA6MeIS8BlS8GoFoNARnONV6YpWQQQXQMckYdA3QPgQpAgHvDBAkL04gDSQpTubc3cmoIMwVJpCjTjbdKAAckIbdbCUcpQL8TdHdc4Uc7mSpfMvlKfGKT8A8Q8y8yOd0oFK47QFKHgKAMoU3VQQEivGyYE0EvpTNI5IaK6DIHlJdSYyMYZeHFYcZSZUZFYaVdOZkIJddcNCouixmAsssnpEc2skkesrIDIJcpM2cqAIEMiAyRiwhJHJAIcFkYAudMIqAGVXOCHJItikYAyWnNSjSorFkfAqZDcfGUEkWH0fS20GIbSrDd4b1BaDk+VBseMlZc1DNE1TsUMIoF0DZJSWnXNDU9yxmQoXAKcwCtWGSrMly7ZRmIcXAs4EmMAKQMxMK+VRmbCFKwQZuYgBK4gzS7U+5Sc2FH4wlIq7ZZ6V6d6T6b6WIePVeb+X+aWABZeUeaIPrIrfaUK9y7ZbVAaqfY1B4rNJ4tabpKyzSoa9yyM5A+ypAaq0iLK1CNYsNIiyq3ZUizSjNGIWahsb5BaWaaqty9yzyii7yzhR0AK10TZA6-kkq+igazU3ZUay4R4qiskU5B6i5Q6dy9alJTa+FelEE3a7imBHnBKo6hinlQhFiiy3ZGy8omIbCRyqaBKs6haC673car6vLXMPypMe66qgUgY6qkavuT61ab6m1BKlagawGwim4IE0GsiqEbCWamG8mvnHY4YUU1ggQCUzSqUjXH9HIHcvcyoDBHeGAQ85yKCmAQyZpZIcpepbeKcpnQ46eACeM-WBnSm-WbSXSd4lbKUrQu8FEjrNErrfQ77FhfEpScwyedhYkhsDvSgdwp0ngc2tkwfHU6lMIulLeS1A1dlJo10FUrk9PVQ9U+VZkw0hUp7KfQIhZWfGHVsHfc-CwffBwfxQobyE-SJM-bOrqEsJg5KN-J0GUbydg+Ia3ILMtbgiSPYg3fg-4wQmAGuwgH6FiYOTTI9DunU7uwrPLOQtuyLVPaO2E1vRXbui2trK2vPZ8PQovMSJqoCge4QEw24ibIPUIvJeeq0zkpmGEnkuE+ktwxkxKRyBer8BKee+7JO57AIx7ODFyIIjOg+vMW+vm4Heehu-DMDS02HaeJi74ZSlHYQFkAuk4QhbuoyvHOy7u0oknOysnOi3oY4moBB8bc4jfFB9fdnLozugBvov2QYggN1EekXN0EzVU2Ovkm09601PGmmsEkbV4mfcWhw8+2eh0jfWq4Yeq3gRqk6WYfqWUX3OPIC4uc4Dh5PGfUK10slXXGhzYxIqmCXei2aahxyDXDFHXYe-RhQolBWbY4sUk0unOku6x+uGqOx+xouux6uIM4jAgfK3VHAJ9SkLzN8HQV9JAYHMsDgm3OIueKEw-EeZbCAfRNuOyFiOhfcXVOJw+IMJJgq8eEQqJ-XOuxTSulgp0XJgLWIKIbTDJlJzJhcmKEXfaRJwW6AEJ3IF-ApoJhpuu0pyKWICp2JqptuGpueOp5sOheepp-J5TQp0Zz-MpuIHp1JgZ0yUK5UEzeoQUqJj-KMBsWBtZkZ2+pp5sdHNubRYeYpwJbfYsfKhABTeoCVQ+OOPBSIPp3QTvfuFKPgXEI-fWXQYAqABQEMppXQa8qCiAFKmILEepRpIssAJM0M4AvBUFngJyYjeYPwRyMAS8YQXVYQfGAyYmIIQ8kzEJiIZsBlKUNEYll07qeNJwAomckzS5zEL8UYIIQgTchaQ5moDFrFnFpSPFzF1A5sfAsAQrc5m0N+YYQyEzLBE418BfAkEAsicAyA3vZAJ4WAq0BaBApAlAtA-ETFrA4VkXagoVwragkg7eYQcgtDQVWzS5B5w5x5luZANQEJV8ksiOoJS8CIaSDllVqgi0h111xAWlygACSmwrC0uOAitQV5pND5p0J4fNYJz-eoHvG55lYrXuGwoe1QNAWN954eF4zQ1OjzW+iQ3N-N+Np7bZkt2MNLctmNt5qtsCW7KAVOoAA)


![Parser preview](/docs/highlighted-types-2.png)

![Parser preview](/docs/highlighted-inputs-1.png)

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


Inferred type will be:


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


![Parser preview](/docs/highlighted-types-1.png)

## My tODOs:

### Max recursion stack calling
Now there is no possible to have more then +- 21 lines, 21 types, 21 inputs, 21 enums etc... its because TS recursion deep level

So I have to resolve how to bypass recursion deep level. It could be possible by extract splitting arrays into more smaller chunks called in more recursion stacks and then joined by some heuristic rule.
