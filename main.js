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
const years = [ 2022, 2023, 2024, 2025 ]


// Define an array of strings, one for each month
const months = [ "January", "February", "March", "April"]


// Define an array of objects representing each customer
// Properties: yearOfBirth, name, monthOfBirth, id
const customers = [
    {
        id: 1,
        name: "Will Smith",
        yearOfBirth: 1972,
        monthOfBirth: "June"
    }
]

/*
        2022
        "April"
        ---------------
        Lisa Jackson is n years old
        Michael Weathersby is n years old
*/

// Iterate the years number array
for (const year of years) {
    // Print the current year

    // Iterate the months string array
    for (const month of months) {
        // Print the current month
        // Print the dashes

        // Iterate the customers object array

            // Compare the monthOfBirth property with the current month
                // Calculate customer age using yearOfBirth property and the current year
                // Print the customer name and current age

    }
}




