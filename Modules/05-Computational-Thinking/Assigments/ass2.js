function perimeter (letter, number) {
    let result = letter === "s" ? (number * 4) 
    : letter === "c" ? (number * 6.28)
    : false
    return result
}
console.log (perimeter("s", 7));
console.log (perimeter("c", 7));
console.log (perimeter("r", 7));
