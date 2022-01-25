const isComma = (x) => 
{
 const string = x.toString()
const commacount = string.indexOf(",");
if(commacount > 0) {
  return true
} else {
  return false
}
};

const removeComma = (x) => {
  const inputtoString = x.toString()
  var nocomma = parseFloat(inputtoString.replace(/,/g, '')) 
  return nocomma
}
const addComma = (x) => {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = {isComma, removeComma, addComma}
