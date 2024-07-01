function solve(day, age) {
    if (age < 0 || age > 122) {
        console.log('Error!');
        return;
    }

    let price;

    if (day === 'Weekday') {
        if (age >= 0 && age <= 18) {
            price = 12;
        } else if (age > 18 && age <= 64) {
            price = 18;
        } else if (age > 64 && age <= 122) {
            price = 12;
        }
    } else if (day === 'Weekend') {
        if (age >= 0 && age <= 18) {
            price = 15;
        } else if (age > 18 && age <= 64) {
            price = 20;
        } else if (age > 64 && age <= 122) {
            price = 15;
        }
    } else if (day === 'Holiday') {
        if (age >= 0 && age <= 18) {
            price = 5;
        } else if (age > 18 && age <= 64) {
            price = 12;
        } else if (age > 64 && age <= 122) {
            price = 10;
        }
    }

    if (price !== undefined) {
        console.log(`${price}$`);
    } else {
        console.log('Error!');
    }
}

// Examples
solve('Weekday', 42);  // Output: 18$
solve('Holiday', -12); // Output: Error!
solve('Holiday', 15);  // Output: 5$

