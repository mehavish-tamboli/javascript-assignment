// ========Check vote eligibility===========

let ages = [45, 17, 8, 20, -10, 200, 0, null];

for (let age of ages) {
    if (age === null || typeof age !== 'number' || age <= 0 || age > 120) {
        console.log(`Given Input age: ${age} --> Invalid data`);
    } else if (age >= 18) {
        console.log(`Given Input age: ${age} --> Eligible for vote`);
    } else {
        console.log(`Given Input age: ${age} --> Not eligible for vote`);
    }
}


