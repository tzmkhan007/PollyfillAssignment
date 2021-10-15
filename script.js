// Assignment-2

// Pollyfill (own implementation) for join,split & reverse.

// Pollyfil for join:-

const countries = ['London', 'UK', 'Paris', 'Canada.'];

const res = countries.join(', ');

console.log('I want to visit ' +res);

/*Expected Output:

I want to visit London, UK, Paris, Canada.
*/

// Pollyfil for split:-

const str = "Hi guys let's learn pollyfill for split.";

const arr = str.split(" ");

console.log(arr)

/*Expected Output:-

0: "Hi"
1: "guys"
2: "let's"
3: "learn"
4: "pollyfill"
5: "for"
6: "split."
length: 7
[[Prototype]]: Array(0) 

const arr = str.split(' ',4);

0: "Hi"
1: "guys"
2: "let's"
3: "learn"
length: 4 
*/



// Pollyfil for reverse:-

const arr1 = [10,9,8,7,6,5,4,3,2,1,0];

const reversed = arr1.reverse();

console.log(reversed);

/* Expected Output:-
0: 0
1: 1
2: 2
3: 3
4: 4
5: 5
6: 6
7: 7
8: 8
9: 9
10: 10
length: 11
*/
