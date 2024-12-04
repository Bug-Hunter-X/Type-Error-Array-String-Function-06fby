function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution: Handle the array correctly.  This example joins the array elements.
let userName = user.join(" ");
console.log(greeter(userName)); // Correct usage: passing a string

//Alternative solution: Type the function to accept an array
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}
console.log(greeterArray(user));