# no-comma

no-comma is a javascript library for dealing with inputted numbers that include commas. Nocomma will allow you to check if the number contains commas, and remove them. You can also add commas.

## Installation


```bash
npm i no-comma
```

## Usage

```js
const noComma = require('no-comma')

const isComma = noComma.isComma // check if input contains commas
const removeComma = noComma.removeComma // remove commas from string/number
const addComma = noComma.addComma // use commas to seperate number
const formatNumber = noComma.formatNumber // use commas to seperate number


const number = '5,000,000'
const noNumber = '5000000'


isComma(noNumber) // returns false
isComma(number) // returns true

removeComma(number) // returns 5000000
addComma(noNumber) // returns 5,000,000


formatNumber(5000000) // returns 5M (M for million)
```

# Examples
```js
const noComma = require('no-comma')

const isComma = noComma.isComma
const removeComma = noComma.removeComma
const addComma = noComma.addComma


// req.body.salary = 4,000,000

const salaryNoComma = removeComma(req.body.salary) // returns 4000000

//Adding the returned number with regular number
const salaryAdding = (salaryNoComma + 12) // returns 4000012

console.log(addComma(salaryAdding)) // returns 4,000,012
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
