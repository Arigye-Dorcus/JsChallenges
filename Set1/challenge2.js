
let yearOfBirth = prompt("Enter your year of birth:");

let currentYear = new Date().getFullYear();

let age = currentYear - yearOfBirth;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age <= 36) {
    console.log("You are a youth.");
} else {
    console.log("You are an elder.");
}
