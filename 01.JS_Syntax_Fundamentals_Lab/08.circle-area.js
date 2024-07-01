function solve(argument) {
    if (typeof argument !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`);
    } else {
        let radius = Number(argument);
        let area = Math.PI * radius * radius;
        console.log(area.toFixed(2));
    }
}

console.log('name')