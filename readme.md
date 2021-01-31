# Typescript GraphQL AST Parser

!!! DON'T USE THIS CODE IN THE PRODUCTION !!! 


If you want to interactive play with this source code, just copy paste `index.ts` into https://www.typescriptlang.org/play and set typescript version to at least 4.2-beta.


This repository is just my fun project where I demonstrate power of typescript by writing Graphql parser in pure Type system.

## Preview


you can interactive play with the TS-GQL parser [there](https://www.typescriptlang.org/play?target=1#code/PQKgBApgzgNglgOwC4FoAmcoEMBGMJgC2WAHivgmCMALABQoksiqG2eBAAkgJ4AO0AMYAnOH1TR4yYAgD2KAK4IFUCGhQA3LMKhVadesGBgUps+YuWrZw8evmwCpHBi77Nhnfff79CCT5ZYSQwXgEwAGEsKCQAHgAVABowAFUAPjAAXjB4yBIkCAQ0XRSwAH4csAAuVPowggAJCCw0BIzs3P8Cot0AbUQAMwhhMAAxOB0kAEkCwmSAOkXB4bAAfQAlaCQAXXKxiZiZiEJqsAQIDWG6-gJ4rBc2rMquwuKwfoQhkdXxyaO5sCLebLEabGK7CpgkI1c6XYT0a7hTaEWSXADKSG0SAA6gALOAFNF8LCCaCPDp5bpvAAGYAAJABvEE5AC+tMhx1REAxWLxBO5xNJUEeNXiiIIyK5AFEinzCYKyfF2s98q9dNTGcz4iywOywJLLjK0HKBSTFRlRQi6PV9Zz0ZjgkaADIIckqqnqgA6CE1nxW2r1Bu5DqQztdStOYs8oRutpRhqKYbdnVVPV1vq+rO9gbtECNSYjloM1tjQYAgk6YCaiWbhfQwDlEvWcgAGJ5BnnBasK4VKpt0BvxACM7dzRu7tYSLbSzaM9GVw6tNoAslg+GXhMIsDxy5WJ0Lk5S1e9ts2Kr1TwPTr1d1X8fLJ00Wm00gtFqv15vt7f94r7jAX0vUA6i2MBBCwGAYCXWN4i2CJZAQOEkA3YQpmQWQAHkcAAKyeeDEOGZDNzQpBMJwiBBDiZtembBsGTAOA0BqAByRih2Y5ItBgFihxIPiSGYll+wbOiGKYsBWLQAAmDiwC4lipP4gShNosB6MYljGIAZlk+SJK0pTBOEsBtmMyTmPnehqGg8J8KQlCSLI7CKKoq8Uw9NT3gAaQYygvIgHhthqGJRAQABzMAWQvYz-J4I80xCxAwuMlCADUIIUaAnniXplEIHBhlM5tYt0DpcoUfLCt6WKiqvLDcOyBlVOq3zImiOISuSRLwrSIKwClfIt0o2I0oy6Bkno3oAGsAtamqah8lkZyvFl5yeeqrSMExrDAFDtxQJ1ECypwXDcHwPHFOMuX+Ttx3vU0DwjCkXjTC8zxPZsahoq8RKuhNjXumsDw7ENf2FJ9WiVNJX1UhsgSDG6HTu-kgb-B4odUy9LvGGACmEKVCHEHh-l7Bd4reC89kpmoIceF63mY5i9judGLXeWm+0BRYWYApUsZLcIAClZEQFCACEeAAOQgAB3Q7zkPem+kvBsKkZz6wC27goBQfwBEo3XNyCcoylN1SNQZDm0hZb1GWF0XNwl6W5aOhJ-xfNkbIIIl4CQCX4MIYhe3J3RurCsmld1al3req9RRD9MmT9EYyyEjMVjFz2r3PMs33mH2CQl+WyTF3qNd6eJ+ZtAu-Z4Yvg8jsOI9TGlo+zj64-dY8LeZVPbaTzNM7b1X3lzrn874X2i6O4VS5V69K69sAa4lstCeGbAigSBOm6eLu02pYeqfn+PI575PdpZAAydORiHmOx6BFe65n2I5-Lxfiy286f-MWxtqsGBWQgdChIDOu4f+v8oFLyDAAcQAIpOgDoQUBdY3I7yQKFZKzZ65PGfvXNoxl67YgJLiWQThJayAKKVP6EBi6digNiGYuIGjRFxHcMKsR64wyvBEfA2g1DwMysIOK2R7YIHFlLWWxcuEzxIUgMhFCqHQGWsqPhzRhCCOETwJeUwoD0JDIw0hrCoDsKwJwp6+8aQAGJb5gAABpsj2JgzKpwBgQVUJdBBTpi56OQaAhIyR4htmyCDXkgMeyEJyCObIeiDFYiMQokxZiLHTgXEOGBuZ4k6CYUkthHDFYt2VjHE+YBvG+KgP45AsQrYZEji4iA70gzZMYcw5JBSeYvnLlbPOzSjoMNySw-J5i3aszLl-LwgDvG7TRLkAACtoVQOgAFWEgVA9Zaz7ByTGmAYkOgVi+GjOsjZEycj4l0GFQoww4CCDAGgWQWU5AhD2aoMAM04pcTADLUhYBtBhQqqgy6Cz9mxXSjATKbofwRMnBGM+djYosiqHYsFmUs4jyaj9ES7yahQpRpE2Ky1foNi4plHFuYKx3jxZOFFEBCUiVWp3ZQkEl7AtUGiOAhN8CgrGqTbKCdY4jwFacVlEBuXgogDU5okNoYJyZVBduIr2WctFQFGlvZ3YY07r0EVYqIW1Lzoqjlk8VU8DVaM3m0Mq6xhFesLAMtvEbjCjS+RuIAAiEB3EKFxhhcQcAEKFI8ufTMrqsCYniDcFkmQ7Hus9bjGlaK9gYqJds8VNQbV2u8TS2IIaw03Dpb9NAHqsBeqQDSsl8YIAUrBtmotJaaX5sihrJNRKSUQDTYsiAtr7WIKzUqWGdza1xrGjUDQIs0CqQZUCjtXbM1jTdLAiASAPwCDQOGgQsRcUPketDJeC6l1rhXWuiVlj3LdzsUelkABCI+FQ93LrUHtHgR6Eh5o1neg9D6vxPpuI8AAPmcL18qvGLvvWgR9z6T0J2pL0OxKEWTbBvZrYwmjBAKB0H6ygpEwCyF9QhCCvzNwxgEKpdN3anRZpQheOlNR318BXWLaIEAIPLWA-uujagGOqGY1kWc+hBwJ2YhiLBFlMUVDDqpU+RSJIkRE79CoeUCrwkxZJjyzFRgwFkKG2TIl5MVUUxJqxuhmJi1kLIfhCBtMjxwKZ8zBmoybOORAo5FgymILAGhPgTgiMEEOd-Rz3hNogBAPWcA-gsDKrAhBKQYUqjNkurBGITwBqYJJEgbxHmnBHqgGWGIsQ26IE8yEexGWQjNqwDUEil7mw4Aq8gKrV5BA1CE0legbIWMDmsgLAgyWhppcQSVrLOXXL8cbpgpKxku1Hua+FGhIrYEAEcYAlcIc2R9GEBgldm9Ou1A2bjTbCsKSbe2xszZ4Q2LWYDdYBBcobYQQRmzrFM9MBAhWoD1RcnhBC9liLoXe8NNbG2XtOCgMkZi9RJbhYgMxM77mgdID+2AwWKg-ayDQKItSqkLs6z1jd4Yd2lO-V6PY1q7zZADH1E9zbCO+qPaoVT8ilEifbF6MxazaPmLzwZcqErCOoBI5iCZtHLKO0LaW3D2IzZT0JRO2FNaz0pNBpWKsPEoaLjDBZAVrzdiSsQ5QSyBk2u4eC54CyFkdioQJvPPRBAkPauFd1xAAA3GANnPA7dOGN5FA1IvFvLahOMhsX0rXhFI7tgQ+3eXy48kK88pSsdXf1hII2BORLau2zLMPwYsGSufFDb3+yu2Z4j+awCwuC87bh1NmXEv0GR2t7bsAYdneu+CjLr3kubgO9HBWqt0LHos5tygjnMPjdzLu3wKAYqniGuVbqsk+DX45VZ6jngw+Yfx5xwbPH92rz0+cpRT7BFggOV+wzuIo-x+T9VRBUH7zofGU941THxhtYJ9x8n5qPlEBvICmT2Hr3qd21y8yMs098XJqpmdmJW1h9mwucnhm1wcG8j0HdqsV8ahjdWtNpJl-NrAHNTBXMnRfI8Z3EhQVkLA8CcDyCv4gsQs8hwtjVItIIkpYsrx4tQJsgetUt0tkBhgSDoAyxZk8t6AWBeCzQwBKFC0McrwNJ3NXV6sGURDhA+DxDUcIApI1IZCpg5CWRZc6BqR2tOsl5ODKJuDiDawBD4ga8RspMw4JsK8zDSQI9p8fcxcHDj119JkwBNEVACBNcQgYgEkVleMvkCBvDXkNMwobkwABg7sThpk-DvMvl8RBBcQwBcRohG9IcXcV9G8XFKI0MCAMiSJRDSRsihcrwAdiilDaxnDgCi8ZdDt7CSis8kooAPCwBX9N8k98cHtKceDqjSQEdD9vtUJT9984hKj+i+CQcJJECh92izAvCIAfDfJCtIA0w-5d8pizRed+cUc0d4Dn8OjLsujbsd9Cdidv9Sdydadns3DACKc6dtjBiz8mcWdXcOdYC5dYd7iz8+dkcMDiwp19lRcqi+CrDDNcisFvipcaQ7Fld0iCg4QNdniCBDc3CHd9d0TmjjdTdzcthLd3h68UFasMTIdm80CficScihJx45tfdUSN0tgA9rx+YKDKCPA-Mpk3MbQfB2SOSUBAs-ASB6D8AcgWC2DEsODBouDEFBtBCj4bR7FlSpDfpnAkB8AAAKfteAQgAkUkp4IcFsftMnAYVQJAUky9ZIBRCYMDYQGLZeGXVSAASiaxl3q1+mLQUSCBqHU00yQA9MbT0MJUMK636hlJMLlJuGy0EMlwwSwTsJlirywS2xBMWyyxWzcmjJQlqNUCO3DwaI3TtWTNaPaM6Ouy32TygA7wEDexwmGMIhP1IgRxfVrJQlBzmKhxh2XGGEuSy0OMxQ3wrO6PONTy-0oGuJyGjPqj6iy3qggPeJX0+JWm+J7PtKY2jKwJyAwldQwhqBaDQAYmVRQWQF0HeRliCEPKgAUDoyCCQGBNUFFwzLjNG2hLoGbkDXhJVyRPVxtHPRuHdUEBgG0FDQwyxIHn9BuFxLNwgtBAJMQyPUAuAq3GcAQig3-IEExKPONRPLAXpFgvc2PNQUJO+l+non7UHzbSnMwvJP7Rb2oogE937SNXwFwqgAqyItPInWMjhkWHpJgAzP92bFKVIpEnIsxQbEotFAAoomQtAoQkdzospKPSYokuwtYtQRhEA24tUiBH4sEuZOEvLmDwIFIxLJmwDWPBjw7kDyQ2OOx2HLOJTwbDT2APMs4X1TpPT3cvVTGRMrADMuO2zxfKk3Uk4rAX3IQB4GSCkqhKSgpLR1bywXbyzJopQW7y5F7ypX72YkouHwfxXzHxwyv1NQghzOyBFSPTn0SVxEdV7EXPZ22DLJOMcu3xTwv2KrFXqgbOPx+2bLPzfkKsvzFXbIkjvxHxyKf0HOMDkBllCFxAIGmReRWGvNvOCF0AQhgDihHEUOUIEBGHqHmBULEmaAYnJ00Xw2mVWsCHWqICCEaWmu3N3JqBSIoimnmtDTAAAGp1LjhQEzqwAeBoBVIWK-rTzRQWdQa2KOdZVAMwB+1Y9+0agPxH1N0Hp59J5C4eA159rN5IZIbwqoA19VIBg4AIAYBigahm1ztsCwAwpzEsAiBzEojNjCdxyf8eA-8OqJ8uqcI+pqaRIhzE8nL+0-l2KAqO1hAZ0oyBBjc6qiq+B9tBq0cFaSqwV5yvJICxaYC1Khb38ei1LW0gC8yM0e051ua1aIINbIDoCmqJ17aVz3yByGxOzpK0qHqGx6LATJ1ow+BNEkBeBQhRBBApo4plqRgZZkjUjME4osNNEoAzNLgAbsUU1XF0jQ5gFCj7TqzoxsJkcXc4pXqQ6koAaFECBKLfIgKFBC11RNTaQcAhoZoQgUiQLKIrhowxZ4hsQagy7NEGJdA0Abz4BwICggFJCBhjYoBQazg0K-kAVTyOaljUN0M0KqhtTox4gdy9zfk0BDyCoA6Vh7lBBdAJ6DrzldkbkCA-9TECRA7iBIjBB-5N7nqkjPrcByEQgsMoBMbP7ZAwB1CBglBKIMNsNzhojjYXkS7mRW0uoKIEJDzT7G8-apUS7tAtweAoAygHyNyBBqqXU6rIVyU9w+9zQoNEMhUVMz0CKEUkUCL41+5mQ5kCiLdEMto4BydEAq7JCG6SQm6sgMh3k0iMixagRVJYp0KCLvyhwWRNTYNs6E0R5YT1R4UApMTZGCK6qWRXTkUIJV55GGGL4WGEb3h+0yLTGiUU60bUZDtcxOxQwigXRYhYoHcd01Lk0tpChcAxTv7fYCMDsC7zHfotohxnSzhZYwApAPbk0iUtopJQnBBgFiBAmRIxbjbuRQbqqITomiUcY8YCYiYSZYgF9zhhRxFJFnYZFn5kFogRps7oZXHsnfoG1smjbaEsqt0yQwU9GDtmmiUVI3GRI9KO0qrr9xUaqCGhKBn55fovpkmBbsnLGiHKUOmbGK07GkwCVenk1UmbLGniVh02niHsrOmxotn6UeLomhn9kRnSqxn8Hs7YgmHNFJnsnpnIwJHmQaGdHxUbYfQCKoQpIFGqZzH5mLGApy1MqjmVmmS1mQwNmAoGnGmdmhUWmDmrHIl61zH+nsmrmuMbg8HSEJmtgpJem3mg9jKy8llpanQVKV95bx8lbgjn7t7chTFyEKaXcr6EAtq-GYqqEkizMCBXcQqPJ6IU6m9U6qKw5IpopmwLbursg7JGy+qnIXJAkxqAp79JcQlVSxySdf9yd5W+a0nqXHVnVSEY1i1vVcNXR+09bKyDbk0jXsIFyoCxplymmvinaOhjTTkBTVlnNuTCDCgKoyCA2uT-WLowzjC+snQZQKoYzLCRXjxbCHtiygrWjcyIBRd43CBSZjIa5stCMKr09c3i98yWjTtjJ7WRyU9c26zxieqiJRj+rxiimf6i3hAOzO9IctWrw1zLl63nbBaX8Wrha2rP99XObyd62HjZ3XjNaGrV9mcFNCovXlQB28w8oc7sGc3t2ISlG4rwoYSPmL4ETVdkSQ2Tg7Fc3MSDcCLc3oL8SYgSL6J6gahb3ySyi3d+o8pPdaTcXs3Ft62mSYgWTyXiwbRSMy3q9LFm0a2RarxXbDnln0b6qwcbgdaab7K38HXRz6Lcnhh8neBCmEZZhbpZQSHhRinFQl219lofaoPS28pi9INI5rKKH3hoOWPq9PLAOu0YOUyS8oZ+YI3I3NixPxPTB+TI2ZP-WtzI7BWx6IAcBGNKResggd2wy91RcLCD34zxtgjvF4JC0qk8KOhjJjPVCzOaE4FEEbPMyGxuDCt5TchpSUtIynRM9stcsohcsrPTPEnUEuoZdoZLOZb+DZkksIzY3XPYg-O4gAuIAbOQusEwvmxvF62LDouPPY2svBCEvYgkuUuj3w4YdTDmjE2cvesKuBjIvLDCviugvTzUukpXHlQEDoyaMIvE3mwr3xbMvt2LDmw-CBv+tK9szZkRvUSxuvOZvhu6AfaEmEBEt6gY0aF8tUSVDJCmRxItDL0GVrFVivMzO1AFlIibdUKEA5kMIIhPI-DLSgyEjzvEB5LKB6JWn9sgyr2wAMJhBC1hAJZYoLz-vdWBCIhmxXUpQ0QIfFvLplwnA3vdXlvMRKJRgghCB17foHvfv-vhggeAoQe0ArTmxXTHS3yGUbQhFhg4oobUFtuCAr4Gf1CytLlSTmx1StTVJdT9SfjDTfXVJTTzTLTrT8R-vHU3SsFAyyf9tAyvSyFhBfSNNQ15D6A25sG0BYEtw+BcQ3NsgdPFs9P6g-81uPU2jdEZus3NftfdenRIaZvlybR+yS39lre1xbeWd6gibIDqeRFHfYwh2XfVA3edfEEWd+v-fwhNsretf3ew-WI4dvf6AgA)


![Parser preview](/docs/highlighted-interfaces-1.png)

![Parser preview](/docs/highlighted-types-1.png)

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
