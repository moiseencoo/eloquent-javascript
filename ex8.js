/************************************
Ex. 8
write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements.
 Neither may use the standard reverse method.
***************************************/

// Your code here.
function reverseArray(array) {
	var newArray = [];

	for (var i = array.length; i >= 0; i--){
		newArray.push(array[i]);
	}

	return newArray;
}

function reverseArrayInPlace(array) {
	for (var i = 0; i < array.length; i++) {
		var element = array[i];
		array.splice(i, 1);

		array.unshift(element);		
	}

	return array;
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]