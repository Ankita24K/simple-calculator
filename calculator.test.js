function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function clear() {
  return "";
}

console.assert(clear() === "", "Clear test failed");

console.assert(add(2, 3) === 5, "Add test failed");
console.assert(subtract(5, 2) === 3, "Subtract test failed");

console.log("All tests passed!");