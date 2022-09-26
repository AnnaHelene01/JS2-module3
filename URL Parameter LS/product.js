const url = "product.html?firstName=ola&lastName=nordmann";

//console.log(url);

const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);

console.log(searchParameters.get('firstName'));