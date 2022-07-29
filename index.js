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
const formatNumber = (x) => {
  if(num > 999 && num < 1000000){
    return (num/1000).toFixed(1) + 'K'; 
}else if(num > 1000000){
    return (num/1000000).toFixed(1) + 'M'; 
}else if(num > 1000000000){
  return (num/1000000000).toFixed(1) + 'B'; 
}

else if(num < 900){
    return num; // if value < 1000, nothing to do
}
}

module.exports = {isComma, removeComma, addComma}
