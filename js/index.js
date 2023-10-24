console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const postTitle = "New Post";
const postContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam blanditiis optio animi natus et expedita consequuntur doloremque beatae adipisci numquam pariatur, illum, ratione delectus fugiat explicabo fugit veritatis ex?";
let likes = 0;
const author = "John Doe";
const isReported = false;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(postTitle);
console.log(postContent);
console.log(likes);
console.log(author);
console.log(isReported);
likes += 1;
console.log(likes);
// --^-- write your code here --^--
