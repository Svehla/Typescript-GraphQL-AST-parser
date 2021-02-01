# Typescript GraphQL AST Parser

!!! DON'T USE THIS CODE IN THE PRODUCTION !!! 


If you want to interactive play with this source code, just copy paste `index.ts` into https://www.typescriptlang.org/play and set typescript version to at least 4.2-beta.


This repository is just my fun project where I demonstrate power of typescript by writing Graphql parser in pure Type system.

## Preview


you can interactive play with the TS-GQL parser [there](https://www.typescriptlang.org/play?target=1&ssl=500&ssc=2&pln=497&pc=2#code/PQKgBApgzgNglgOwC4FoAmcoEMBGMJgC2WAHivgmCMALABQoksiqG2eBAAkgJ4AO0AMYAnOH1TR4yYAgD2KAK4IFUCGhQA3LMKhVadesGBgUps+YuWrZw8evmwCpHBi77Nhnfff79CCT5ZYSQwXgEwAGEsKCQAHgAVABowAFUAPjAAXjB4yBIkCAQ0XRSwAH4csAAuVPowggAJCCw0BIzs3P8Cot0AbUQAMwhhMAAxOB0kAEkCwmSAOkXB4bAAfQAlaCQAXXKxiZiZiEJqsAQIDWG6-gJ4rBc2rMquwuKwfoQhkdXxyaO5sCLebLEabGK7CpgkI1c6XYT0a7hTaEWSXADKSG0SAA6gALOAFNF8LCCaCPDp5bpvAAGYAAJABvEE5AC+tMhx1REAxWLxBO5xNJUEeNXiiIIyK5AFEinzCYKyfF2s98q9dNTGcz4iywOywJLLjK0HKBSTFRlRQjPDkAPIAERtNWIAGsCABzQrDOCCUKyMBwN1yYQEAA6lCwIRiWN0WCKoVxBFeYGDggUOjglxgPHF+s56MxwSNABkEOSVVT1WHNZ8Vtq9QbuQWkMXS0rTmLrfVcyjDUUW2XOqqerrq19WWH63mIEb+23LQY6F34qJCLF6GAwEZ1zlEtv4gAGJ4NnnBE1Es3CpW7ugb+IARiPU6NZ4Vl-3aXoyvvVq7AFksHwACCwjCFgPDLnAq5thSLzDr02zbhU8HbjUvQQauTQtG0aQLIs-5ASBYHoQk9wwNhCELqAdRbGAghYDAMA5vEWwRLICBwkgwHCFMyCyDaOAAFZPKx7HDJxIE8UgfGCRAghxNuvTbhuDL+mgNQAORwGgd7qckWgwBpd4kMZJDqSy14bspqkaVpABMulgPpGm2SZpnmUpYAqVpNloAAzA5TlgOpvmuWZFlgNs4WaWg6mfvQ1A5iJHFcZJ0kCbJ8k3uWaqee8ADS-qUHlEA8NsNQxKICBumALLweFxU8JSOUVYgbrhVxABq9EKNATzxL0yiEDgwyRduDW6B0A0KENI29A1o1ZfxQnZAyHlzYVkTRHE43JC1VVpGVYBSvkoFybEnXddAyQqb0rqNYgYDzTUBUsh+WUsp+TxLVaRgmNYYBcWBKBFogvVOC4bg+B4TEroBDEg+cl5NcOe1usqABSsiIFxABCPAAHIQAA7gjEAJLDDH-MKRLwEgeOk5eaRMz+Nw5BTMBUwOyNvMhWVIRRG6oR5G4Ns++Lyhe5OQbEmGtEqTPhZZgKLOhcMc7Ml6kdhHkUSzSJTv8J5i-y55ClzsE8wLey84L7zC920qyuLppm8eTYvpLsvYTh9tAg2hsFsbEtm3cDzyzresEOMMAFMIUqEOIPCc4OFZgKj8FftzfRW-zKFgF7bYW7o6mxXzORa0qee9AXOHK-ModkUquuLqzmPYyBeOEyToMJFnadIJVboZ31fc23sJd5793BQCg-gCHJs8gUE5RlKvHkagyNcslWDJtwguME8TpMkWHTNsjmNMEnjrGEMQSNF-3g+Zw-1LUoh7xW6Kfcb8ygHmaOKwcbnzLr0QCuF5iXzpjwBmsQcYHSrvEZuXZIH01BvfIcbxUbPwweqN+IDP7ZWHD-GsIw-472ZEAvBG4kJgLrig6BaDYHwKyqhRBkcwD0MAgnYY2Aii9wflgkeL8qHWwISnHKxCxx-wAGQAJGJQ9+oDwH0JgXAghaFm6-Shto8wtg-pWForIW+hQkCQ3cHonRlj2ENgAOIAEUiw30ICY4Ue4+6o3CgzJ4KjGFXm3AzbEBJcSyCcPjWQBQJoO0uKTE8UBsQzFxA0aIuI7huliAzH2WUp6mNngEDKi9hBBG3BEfA2g1B2J6sIRq2Q94Hy7sfAJQSQlIDCREt6yoSnNGDGgCpwxswLi7FMKAMSmxxKCUkqAKSsBpOgoQmkABiORYAAAabI9gDx6qcAY9FVA5nsUWUmQynEmISMkA8j4eyNl5M7U25ozkPmyEMkZ0ZAlIESck1JCR3xfjvNYqczydDxLeRMqZMzsGpzHrnFhYB9mHKgMc5AMtmhyyZn3DZEB34NgBXEhJILPkN21tC6uyK2jgKxaDWJQL3mTPxRXJmmivAGP2QDNEuQAAK2hVA6H0VYCxlj+V8vsI5S6YBiQ6BWL4a0-KBWUWMPEfEugPTnFED6NAshepyBCGK1QYA7rCpgGAImQSwDaDdNNFxOYOXirRJBPg+AGpdRgD1AcK5HgvyWQ1FkVQlmOp6sA6hnl7Z3VFK6hqb0lYbn0j1EN0tfUQHDZZD60LlAMXYVa1QNqE72pKnGxmQicEf0UQQ9N3JbXZp4HGpFWF5Z9xTYxMuJbM12ogA6y6mtT4JtQo2stLac2XSrSi2uQJu1Zt7RWttJ9G70rTZyiA6wsBE32cBN0cbXm4jtBAbZCgY42nEHANi5sC2SJWHaCMWB4g3BZJkJZG6t0xzjf6vYq0spKyjRAGoJb52LocZW09mIL0CATUrNAm6sDbqQHGmNq5b1gfvZdIDNU87Pojfq6NYBP0Lv2ZWyuL7LIgbvRBy6NQNBYzQB5JNlrZ1fqw-22ZNiICEadRAADZNiLhwGazejjGeoscPanY9IwWMsgAIQiIqFxuNgNwI3ASDcTtMKGOScItJgQjwAA+Zxt31r2Ypy6UneOzPEUQ3oSyuIsm2GJzcxgUxpigPuygUkwCyD3WxeiJqQKhFZrIAYTmXMIDc2+jabyCDaFAv0pWGHv1FkrVxDOecJOXRxtEZjMmcM6e4xAJLqgDPgpyupDEg9S4BtRnnIzbx1KSSK3sQaw14TQrK8XUYMBZARiqxUGrVx6t93UjjWQshSkIDa2AHAfWBulZ+oy6V5ipUWBhQ4sAPE+BOE8+ESVWipveB+iAEA65wD+CwKO2i9EpBuiqNuJiNFsjHQHiSJA+zFtOBY1AQCMRYh4MQEtkIyyHshGQyamoklhPbhwAD5AQOsqCBqAV1q9A2ThoSi3cI13Tp3YcT9p7L3Mq3ncQPVq4Uv0seh1VSJJabEAEcOYIE+6S7cUmbQDB+yTqjC70c3CJ26YUBO2e4+J5kjc2SZ5z3ycMQpdWRZ9emFTpwUAloZWEmxZKEleKy7OnThnUvTHJHUvUfGB2IDqT5wtjXKvTHoxUHTWQaBqmBtwwL3J88JBLzF5ZdaD07ref1BLxnJvDrrC9xrmXMk5JzW2L0dSI2rfqStkm5UP2TdQDNzEXrVuZ3ivJ5T6nbiBE87dJ9GCR6lmrDxBGC4wxt4IA+8tpZP3dfOJZAyavGvk88BZCyJZUJH1IRUv55xoPPu14gAAbmG5bngfenDN5quA0nFOfuxChMw22vNKPiq-azgQ7O8354hTnQt0K7dC4XiLopuHeiRfX42QeA7sLT+Z0TC-m-J3kVT6oNfGvCc57XFlBruUe-vsfq1MPhHmPgAVVFPnuDcAPn1K6v1OpH-lHobs3myoUnwFAK2gatkCOs2ugT1NTHalfAwojAkGHsAQgYbgfnkkfk7tuN7kHiENkElGJClMrnQbAqPsgc5mgX2jAFrndAbuFJPitB5BQQ7gUifkrK7pQO7j5rQelHJIdJFjRkxrELIRlCHmHm+ggduDHk8H9jrnrqKJAXrsDqPjUM3rDhNjyhtryjNg4MyiwMMNskKFYborYdYTYYYNtrtnkAds2kdgxK1GdllBdjEE8MjrdvdsgI4ReIBKym9vQA4cIE4QQGEiBjbhuN5AtnaODkmokckWAKkRALZJ5JkVMNkSyLnnQNSG9Ajl2OEXJJEbHMkc9nEVngWh4tuG-k0WaJvk8DPpTt0aSDTlkoysmBACoAQJXpGKMjytuL9ETAQMGBMWAM1m6N6GAAMIUicPYRritgQETPiIILiGALiNEGnHriPlbo-AoHJGmCFroJJNEaSJceFgDMpvTo8UkReH0Xfg-jnpzizlEV8aSJvuQcYNPPbsLtQVlH7uEp8ckSbvLqJMEMwVJCbudO8eroMVdEFPoc4vwXMaMUsTqlMZAMOK4RuPCWaPHonhblcUIbbuCTkofo7qLmtAVG7iVB7rCZLtiT7jUDyVSaSCbuoeHqPlHtoXnkbnyXQQnubuYRxuEP0UKWTG0anCVnQLlkQoXsXgUHCOXnkWaPSEyCQtKU8RAAPvXo3tic3q3u3lsJ3u8N3gYWacCRaXrkAaYa6ckZPuZHXMqUCckfPlsIvqcMvm4e4RYIKpYHNkWHsS4ZYNGZGa4Z4X4CQL4fgDkEEUuJdkdCdBEQ4hjnESIjmTECxukZZM4EgPgAABT2zwCEAEig70FgB3j7j2zeYDCqBIDNnCbJBvITBoDLpQ454eQACUI5g84OSsYGbyQQNQTWLWSA05iGVR8O+gOY9RqORYRZ8QX+2O2eg8+OC6H+g8TOaeFOT2wxt4Nwz2HmmBd+p5rUAJRMT5vO4UIhUJouUAEBAggey0kQCuTBSuaJrBGOIEWueJ+uhuv4wwHoT2uhwhTJgulBrJ4hLuHJUhXJPmT2S0h0uFgkoppB0eUpsFwg8Ft5lh8Q9ojoJqaAaA-oo6ziyAugd0RMQQDFUACgfAgQwQK+qg6eV5apzUo5mp+a-GOppxepZeYYXYSyLGG6ggMA2gEY9mVpJpY4LGtpbeGlKwHelmClskyloEzgbE388lRhdejFzazFpixpzIUwTFLij6AaikuGSsf2KGG4f+hhAgA+9sSswBvlmWo+AVlkPatlUAAOTlLFYV7k7llkw6s6glt5wZMQCGG4VsS+YVnlXlPlOQNwilxlqlbEYVG4QVBVAgCpXl4VMVpiMIWmcVisEaSVF5MAV5C+9s6iSCrMkWb5HOfGOUkKe+tsn5VBbJp+fV3OV+NcQ6iwU1G+-xT+8sPVSpj501rU+5cyugXkdVUVJqCAPAw++VqMnpVu5UOe4B3+llBAHQMBYe8B2wiB7BKBXB46MAXEPx4qLGOB0Aa6y6l4JB4pT1H5yFkJ416FSBr16BS0SJiu3ELBchcQUNnB6BXEvBJUBJWUghFZ-OxgcgRM8YBAzK2qKwXFPFQQdlbEWYrZhU2JoqKw9Q8wBRfoWkzQ-oPmwYbmzK5NvFdlKIwYSFtoDoNQRxskzo8YEYYAAA1NZfgLZRzWADwNAB5BFS4qKGHmrSxVHrWo1QlVCihjUPhPpq6pwtwjoLGHLJrXtWQR5AMHABADAMUDULlXjTymAG6NMlgEQNMusRSRGpIbqthWACjagTDYJIdK7ZZGNWhc7ihqavtSWsINRoWTcM3gDRwXwOzmwVbpnW9Y6ktKKQnVoQlW7RCSyWIXHRGm+h+nfkoc6qHfnfRIXXlKHupJoU9fbEmkrN3aucqHoTdcFf5VlBVQqRRtaGiOLLwKECqs6I1KTSMAcd6McQPI1I5sGFAP1pcIrcGqhgQKcboJvc4u5hznogJObsNo1GLYIM6K1IrcFmcBcYgEpQoCBuqDWbSDgKdK6CEEcSpXJJ1r9DjPENiDUMFsGP6LoGgNxfAHRAUIYmkQMMvHZodnIOGOReaixUHY1DZumGZVUHWdaNRSLXRQxcNEgLHGAGqoILoEgyMAOboHwN6AQB7pMgSNPcQGsYIHosQ7RQcVLbgM0r6GnPgSEI5sUQMEoHJPZk5ucBscvNqnfcyG+rtLJGxAxXQyI1zRgGAaFmBFAGUPxSlgIL9WMm8gDS6tLIXEepZmPF-O6rpSMJ6t6o42AA+uQqaWyncfpe-L9HAD5s-U6mkV-SSD-VkBkHqgfSfVAECB5A1OZa47qXeCyDWaZuRVAC5XsD-gJo9CVJaak64wDSyBOT6vRHjEUx42OD4-rXbKXZZFHShrvcRG7FiP2A1APszHU0rL9IULgJmVAKI9E5fWVdHcYHeGOWcMTCsaDCM27bZBM4IEYsQLM9E7Xdaj2qY1tTVUrNHLHPHInJzD4kQbUh3IfN3OcLEPQk4tEBiRzkzJ09s5ZBlV5TXWzLGmUzwADc8z3c1Shq1dljcKY-9ek2lUgN8xFPbELF07jds0066i04WEUCWLEGGuCzOek6hFlds688RHGmi1dY8-88Y2OrmsCwNV48GJ1XU1i-YwXq4846U0xuXvaTELZJk0hDlSM3C9LAi82Ei6WKiyMwnZiyMzi66ni01WFUSz9dwbgWS5zlsLZM8zSyNWGRRF2EnSnTuWnaPhnSgdnYScLbRbkJMiEk7cNiwwgDTaaskJqoasEpmcAcJcOCpLvadXvRdYPDVHVNuI3bDQwUBSiSBWlBlKckFHwYbucgyRIZhdgx7n6xHWs6-phg4suqukEjBuBruqZaWPbDHZXfbAmwJKKR3R5AmjoR0O2RGcmaYEmXYfNoUNNAmVGdWzW5ufmQ0Q4jKNNC0Xuc65gjnsea+RtcTl9QJRTt24QIzOFJAneSMA+avgupO4-lzotWeWCWAOXahQW1lJO-+XLgG8ieJAjaBUjZc6I3O5BTdVjRuGRR6Hu4hYyZu8ydu8flXYHdIUdINPu-ITUHuyKa3UDZHqHh1sICRWJdkHe9ON+0Y+nnu1tT-hqVqTSJJSXvqY2ycEspO5aQ3q45O9pSy0gI6b0CpPUH+4NAPmdSAfh6PlPv6clRO9+6C6GSK4jgQJFsu5-rMn9vm2+9uFBVBsQdrjcCXWXS+6IXxyPV6bs8MPs7wJzP7LMEbE7CbK+Oe7TKgkQbAcRfcxYWx+hnfpx2eYNXBLvnY+8Bx4NNnbNbfou0TEZ8+ctdOguHWzW7W627GWAHaBMBlBmL1NNutm5y2+2zdp20WN5ymM4JcM9q9v24fYO50QuhF759F33M6b3qAW1C8Z63fbVLsAu+OzAMl9I9F9eV5z5yV9AIiYe-DalOiV+sV1FziXAXrje2AFBwxdG6M8+yhRJ9CTGxtJ+4135z+zsEm3Oim9Fv2sN9FwB23Tp9odeMqB1y-hAOnjN+aOJRIqh9JcIOXhgJF355u0sgdyl+6VZWZTehV017aZU3pQ6bY-bCpGFflad5V5R2AGFRVRt5Pl3b8-R21Rtwq+lRHESgys28ma52YJ52iHRMZWYjYYF0F+5yFyjvsrD-RJypjghzjkeYl0TED2l4-Rl6jN6-lwZ21Rj8ZWV1T5ytV4BUe6iSG2dA19dyN1rvATBXBWoI+wN5yTwB7rTzoPyQda8fFct9z2RoqexwxzAELyZyh640XlJaXntyGFAHD9oPZaaW9015aXd6CA94ok9593U-lcRLr35x03977PNbL-L1S0rN1ZYcj4ma27NsQA9FYu725+lunrEX29-rj3joa-sqxCBginZR0OFJ0mUmgOH4mO0ZddkLYg4pH5eOzDAvLNeNuOj5rzoAH2ER29uULzF3ELH90gn4bvskD4X1dsXzX2z9F9jxX2oFX+FJEZ9ruUX6F9uRfmX7EK3-H5bvGh36nX+XX3mb3-sruYP6UpXyP9X129+5P1ufsnuwH3P10m34v2P0WCqb2z32j2joGTEXEUP1X1KX9hr5jzoDUHn7f729uJb9F-fw4rX6yvx7eW-9qxP5-1lBh32rr8V+--DIgHh-798A+24Q0kKAgGn8hQUAugOPUWYIBQi9QW9JEjwQ39jKSsP9BAF+R0AYBKREfiUTUhZFhMSaeZIVE+yAVjEURNAByjWL+Yc2bKG0BEFyhTFeyq5UkowMQAlVKAKkV5uzlXIYcwANoYQCBmEB4wGo7FCQRWViIRBtwdoKUGiEUFID6AL-LgNxQEAjAzKowKYFKHC6rBlB+g-GFMHiBTAbQ+McHH+CcD8CKyKAzEHJFGBBBCAhDJWJwLEESDhg0gkqLILQB9ltwE5DhKJSTRdhekVSOWscBcQs00i0iWIUUQrLTJ-8kkfjgSFrKdluyvZfsviAkHDkQhU5YIezhXKzlgkwgBcs1gjA5F6AeCIxmgBsSgQ+AuIebNkC4z+84i9QD3OgM3RQA3oOYQngVzUANCAIzQosGHk0FQAJS+nUvmOyGGNDRhYebAZyimGDJ4BvUQYfUPmEOJNaawyYeq1ZgIUNhwwpodsOE5-kVhrMB9kcK2FjD1IgAi4eEEZyzDNhIw04VMT2FAA)


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
interface Node {id: ID!}
# input CommentedPaginationPOC { input: Int! }
input Pagination { value: String }
enum OrderByKeyword {
  ASC
  DESC
}
type Mutation {
  contactForm(
    input: OrderByKeyword!,
  ): String
}
type Query implements Node & Node2 {
  age: Int
  title(
    limit: Int = 10

    offset: Int!, thirdArg: String!
  ): String!
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
  }
}
```

![Parser preview](/docs/highlighted-types-1.png)

## My TODOs:

### Max recursion stack calling
Now there is no possible to have more then +- 21 lines, 21 types, 21 inputs, 21 enums etc... its because TS recursion deep level

So I have to resolve how to bypass recursion deep level. It could be possible by extract splitting arrays into more smaller chunks called in more recursion stacks and then joined by some heuristic rule.
