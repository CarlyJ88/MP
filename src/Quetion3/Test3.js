/*
Describe what you know about javascript Promises.
Promises can be either pending (inital state), fulfilled (successful completion of an operation) or rejected (operation has failed).
When we create a promise we pass in two paramaters which are usually referred to as resolve and reject which are inbuilt methods which we
can use to either resolve or reject the promise within a thenable.

Why are they needed?
Since JavaScript is single threaded code must be exectuted in order and must finish executing onepiece of code before starting another. 
One benefit of promises is that the skeleton of the page (HTML & CSS) can load while the data is being fetched to give the user a better
experience by creating the look and feel of the website first rather than waiting for everything to be loaded or blocking this process
before the user will see anything.

What problem do they solve?
The fact that JavaScript is synchronous by nature promises allow us to bring in asynchrinicity to the language so that we can avoid 
blocking code while waiting for a block of code to finish executing.

What is the common promise syntax? 
*/

// typical promise syntax is like this
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('first promise returned');
  }, 1000);
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('second promise returned');
  }, 2000);
});

myPromise1
  .then((x) => {x})
  .then(myPromise2)
  .catch((error) => {
    console.error(error);
  });
  // can also add a .finally which returns a settled promise which is either fulfilled or rejected. This can avoid repetition.

// with ES6 syntax a promise can now be created via an async function
async function getInfo() {
  const data = fetch('http://search.com/data');
  const response = await data;
  return response;
}
