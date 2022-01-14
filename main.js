/*
    Problem/output:
        Solar Eclipse Bank has a problem. They want to have an automated
        way to display the customer birthdays, for each month, for the
        next 10 years. They would like to see the customer's name, and their
        current age, displayed in the correct month. Here's an example they
        provided of how they would like the data displayed.

        2022
        "February"
        ---------------
        Miles Goodworth is n years old
        Barbara Forsythe is n years old


        2022
        "March"
        ---------------


        2022
        "April"
        ---------------
        Lisa Jackson is n years old
        Michael Weathersby is n years old
*/


// Define an array of integers for each year
const years = [ 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031 ]


// Define an array of strings, one for each month
const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


// Define an array of objects representing each customer
// Properties: yearOfBirth, name, monthOfBirth, id
const customers = [
    { id: 1, name: "Will Smith", yearOfBirth: 1972, monthOfBirth: "June" },
    { id: 2, name: "Lester Hodkiewicz", yearOfBirth: 1988, monthOfBirth: "April" },
    { id: 3, name: "Nicolas Walter III", yearOfBirth: 1995, monthOfBirth: "September" },
    { id: 4, name: "Chelsea Kovacek", yearOfBirth: 1979, monthOfBirth: "March" },
    { id: 5, name: "Margaret Koelpin", yearOfBirth: 1999, monthOfBirth: "March" },
    { id: 6, name: "Terrell Streich", yearOfBirth: 1987, monthOfBirth: "June" },
    { id: 7, name: "Bessie Pacocha", yearOfBirth: 1986, monthOfBirth: "October" },
    { id: 8, name: "Clarence Beier", yearOfBirth: 1965, monthOfBirth: "December" },
    { id: 9, name: "Tim Corkery", yearOfBirth: 1993, monthOfBirth: "February" },
    { id: 10, name: "Alberta Lehner", yearOfBirth: 1991, monthOfBirth: "April" }
]


const displayCustomerString = (customerObject, currentYear) => {
    // Calculate customer age using yearOfBirth property and the current year
    const currentAge = currentYear - customerObject.yearOfBirth

    // Print the customer name and current age
    console.log(`${customerObject.name} is ${currentAge} years old.`)
}

// Iterate the years number array
for (const year of years) {

    // Iterate the months string array
    for (const month of months) {

        // Start off assuming, no birthday message for the month
        const birthdayMessages = []

        // Iterate customers
        for (const customer of customers) {
            // Does current customer have a birthday this month?
            if (customer.monthOfBirth === month) {
                const currentAge = year - customer.yearOfBirth

                // Add a message with customer info to messages array
                birthdayMessages.push(`${customer.name} is ${currentAge} years old.`)
            }
        }

        // If there are any messages in the message array
        if (birthdayMessages.length > 0) {
            // Print the current year
            console.log(year)
            // Print the current month
            console.log(month)
            // Print the dashes
            console.log("---------------")

            // Display messages

            // Iterate the messages array
            for (const message of birthdayMessages) {
                // Print the current message
                console.log(message)
            }

            console.log("\n\n")
        }

    }
}




