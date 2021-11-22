// Instructions
// - Use this starting template, you'll find the data there => https://codesandbox.io/s/day-6-functions-template-es4eg?file=/data.js
// - As always, do not code your solution in CodeSandbox
// With the usual Users and Todo lists:
//   - Prompt the user for a letter
//   - Find all the users who's name contains the letter 
//   - Say hi to those users in the console - but only 1 greeting every 2 seconds.
// - Prompt the user for a user ID. Using the value, find all the todos that are Incomplete and console.log them.

// Tips
// - Don't forget to clear interval once it's done running
// - It's perfectly okay to prompt a user for details while other stuff (i.e. the interval) is running
// - Keep your code separated into functions for easier readability later

// Challenge
// - Prompt the user to enter a property (e.g. 'email' or 'address') and then console.log a list of name - given property. E.g. for email it would look along the lines of: 

// Bob Marley - bob@marley.com
// Steven Hawking - hawk@this.co.uk

const userLetter = prompt("Hi user, please type a letter: ")

const filteredNames = users.filter(function (user){
    return user.name.includes(userLetter)
}).map(function (user){
    return user.name
})
for(const user of filteredNames){
    console.log(`Hi ${user}`)
}
const userId = Number(prompt(`User please enter an ID: `))

const filteredUserId = todos.filter(function(user){
    return (user.userId === userId && user.completed === false)
})
console.log(filteredUserId)

const userProperty = prompt("Hi user, type email or address")

const filteredProperty = users.filter(function (user){
    return user.hasOwnProperty(userProperty)
})
const filteredEmail = filteredProperty.map(function (user){
    return [`${user.name} - ${user.email}`]
})

for(const list of filteredEmail){
    console.log(`${list}`) 
}