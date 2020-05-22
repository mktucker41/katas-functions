function sum(x, y) {
    return x + y
}
console.log(sum(5, 4))

function average(x, y, z) {
    return (x + y + z) / 3
}
console.log(average(10, 4, 1))

function greaterThan(x, y) {
    return (x < y)
}
console.log(greaterThan(4, 1))

function containsVowel(string) {
    console.log(string.includes('a'))
}
containsVowel('ape')

function calculateTip(mealCost) {
    const twentyPercent = mealCost * 0.20
    const totalRoundUp = Math.ceil(twentyPercent)
    return totalRoundUp
}
console.log(totalRoundUp)