// This function accepts a number `guess`.  It could be any number, and our challenge
// is to return an appropriate upper bound for it.
//
// The upperBound should be the smallest number in the pattern below that is bigger than the guess.
//
// pattern: 2, 5, 10,
//          20, 50, 100,
//          200, 500, 1000
//
// and so forth.  If the guess is greater than 1000 we should continue the pattern.  For example, a guess of
// 1200 should result in an upperBound of 2000.
//
// see upperBound.test.coffee for more examples!  Write riley@peardeck.com if anything is unclear.

module.exports = function upperBound(guess) {
	// handle all the base patterns
    if(guess <= 2) {
		return 2;
	} else if(guess <= 5) {
		return 5;
	} else if(guess <= 10) {
		return 10;
	}
	
	// some craftiness to handle N length numbers.
	// get the placeholder base (10, 100, 1000, 10000, etc) by deriving from the guess's scientific notation.
	var base = Math.pow(10, parseInt(guess.toExponential().split('+')[1]));
	
	// strip the guess down to a single digit before the decimal (125 becomes 1.25) and recurse.
	var result = upperBound(guess / base);
	
	// take the result and apply the base.
	return result * base;
};