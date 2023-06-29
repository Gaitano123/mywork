let catObj = {
    name: "Bom"
}

let catObj2 = {...catObj, age:9, name: "Bii"};

// catObj2.age = 9;

console.log(catObj)
console.log(catObj2)

let {name, age} = catObj2

console.log(name)
console.log(age)

let [colour1, colour2, colour3] = ["Red", "Blue", "Green"]

console.log(colour1)
console.log(colour2)
console.log(colour3)