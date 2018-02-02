/****************
Ex 4. Write a function min that takes two arguments and returns their minimum.
******************/

function(n, m) {
	var min;

	if (n < m){
		min = n;
	} else {
		min = m;
	}

	return min;
}