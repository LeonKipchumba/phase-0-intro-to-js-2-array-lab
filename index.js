// Initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// 1️⃣ Destructively appends a cat
function destructivelyAppendCat(name) {
    cats.push(name);
}

// 2️⃣ Destructively prepends a cat
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// 3️⃣ Destructively removes the last cat
function destructivelyRemoveLastCat() {
    cats.pop();
}

// 4️⃣ Destructively removes the first cat
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// 5️⃣ Returns a new array with a cat appended (non-destructive)
function appendCat(name) {
    return [...cats, name];
}

// 6️⃣ Returns a new array with a cat prepended (non-destructive)
function prependCat(name) {
    return [name, ...cats];
}

// 7️⃣ Returns a new array without the last cat (non-destructive)
function removeLastCat() {
    return cats.slice(0, -1);
}

// 8️⃣ Returns a new array without the first cat (non-destructive)
function removeFirstCat() {
    return cats.slice(1);
}

// ✅ Export the functions if necessary
module.exports = {
    cats,
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat
};
