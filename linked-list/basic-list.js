const array = ["one", "two", "three", "four"]

function arrayToList(arr) {
  // reverse array
  let array = arr;
  array.reverse();
  // create empty list object
  let list = {};
  // add array elements to object
  for(let element of array) {
    list = {value: element, next: list};
  }
  // return list
  return list;
}

console.log(arrayToList(array));


