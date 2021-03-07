const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
const intArray = [3,2,5,3,3,1,2];

/* Schreiben sie die Funktion map */
function map(array, fn) {
  let passed = [];
  for(let i = 0; i < array.length; i++) {
        passed.push(fn(array[i]));
  }
  return passed;
}

/* Funktion 1 */
var lenArray = map(strArray, function(item) {
  return item.length;
});

console.log("[ 10, 6, 3, 4, 1 ]");
console.log(lenArray);

/* Funktion 2 */
var switcher = (function () {
	var state = false;
	return () => state ? state = false : state = true;
})();

var landscape = map(intArray, function(length) {
        let result = "";
	let flat = switcher();
        if (!flat) result += "/";
        for (let count = 0; count<length; count++) {
                if (flat) {
                        result += "_";
                } else {
                        result += "'"
                }
        }
        if (!flat) result += "\\";
        return result;
});


console.log("___/''\\_____/'''\\___/'\\__");
console.log(landscape.join(""));
