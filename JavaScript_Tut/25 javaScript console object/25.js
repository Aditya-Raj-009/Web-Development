 
//  to list all console methods:
console.log(console)

 //by this u can check that how much time does yor code take to execute:

 console.time('your code took');

 console.log('hello prince');
 console.log(34 + 54);
 console.log(true);
 console.log(null);

 //    to print array
 console.log([23, 87, 45, 8]);

 //to print object:
 console.log({
     prince: 'Aditya',
     marks: 100
 });

 //to print object in table:
 console.table({
     prince: 'Aditya',
     marks: 100
 });

 //to print warning tag:
 // console.warn('This is warning');

 //to clear console screen:
 // console.clear();

 //till here it will measure time:
 console.timeEnd('your code took');

 //by this if u want to throw an error for your code to check whether the code you have written is wrong or not:
 // console.assert(55>189,'55>189 is not possible');

 //to print error tag:
 // console.error('This is an error');

 //console.count() method is used to count the number that the function hit by this counting method. :
 for (i = 0; i < 4; i++) {
     console.count(i);
 }

 //     Console.group() and Console.groupEnd():-
 // group() and groupEnd() methods of the console object allow us to group contents in a separate block, indented. Just like the time() and the timeEnd(), they also accept the label, again of the same value.

 console.group('simple');
 console.log('Grouped');
 console.log('Aditya');
 console.groupEnd('simple');
 console.log('new section');

 //     Custom Console logs:- 
 // If the user has even a little idea about CSS, they can add Styling to the console logs to make logs Custom. The Syntax for it is to add the CSS styling as a parameter to the logs, which will replace %c in the logs as shown in the example below: 

 const spacing = '8px';
 const mystyle =
     `padding: ${spacing}; background-color: white; color: blue ; font-style:
  italic; border: 1px solid black dotted; font-size: 2em;`;
 console.log('%cCode With Aditya', mystyle);
