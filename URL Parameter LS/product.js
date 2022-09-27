const url = "product.html?firstName=ola&lastName=nordmann";

//console.log(url);

const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);

const newFirstName = searchParameters.get('firstName')
const newLastName = searchParameters.get('lastName')

console.log(newFirstName, newLastName);