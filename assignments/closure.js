// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function sayQuack(duckSpeak) {
  const myQuack = duckSpeak;
  console.log(`I am a duck and I like to ${myQuack}`)

  function eatFood() {
    const theDish = "bread";
    console.log(`The duck ${myQuack} and it is now hungry. I will now feed it ${theDish}`)

    function goToSleep(
    )
  }
  eatFood();
  
}

sayQuack("say quack");


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
