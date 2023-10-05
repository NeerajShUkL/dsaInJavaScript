const sum = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

sum(10);
console.log(sum(10));
//time complexcity of this function is O(n)

//Time complexciety of Object
// insert - O(1)
// remove - O(1)
// access - O(1)
// search - O(n)
// Object.keys - O(n)
// Object.values - O(n)
// Object.entries - O(n)

// Time complexciety in array
// add/ remove at end - O(1)
// add / remove at begning - O(n)
// access - O(1)
// search - O(n)
// push/pop - O(1)
// shift / unshift / concat / slice / splice - O(n)
// forEach / map / filter / reduce - O(n)
