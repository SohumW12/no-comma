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

module.exports = {isComma, removeComma}
