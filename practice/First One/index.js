const item = [
    { name :"cook", price: 300 },
    { name :"bus", price: 600 },
    { name :"big", price: 150 },
    { name :"how", price: 860 },
    { name :"cue", price: 760 },
    { name :"ball", price: 200 },
    { name :"then", price: 550 },
];


// function loopArray(item){
//     return item.name
// }

// console.log(loopArray)




// const totalPrice = item.reduce((currentTotal, item) =>{
//     return item.price + currentTotal
// }, 0 )

// console.log(totalPrice)


// const everyItem = item.every((item)=>{
//     return item.price <=100
// })

// console.log(everyItem)




// const someItem = item.some((item)=>{
//     return item.price <=0
// })
// console.log(someItem)


// item.forEach((item)=>{
//     console.log(item.price)
// }
// )



// const itemMap = item.map((item) =>{
//     return item.name
// })

// console.log(itemMap)


// const filterItems = item.filter((item) =>{
//     return item.price <= 400;
// })

// console.log(filterItems)



const findItems = item.find((item) =>{
    return item.price <= 400;
})

// console.log(findItems)



let num = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

// num.forEach((num) =>{
//     console.log(num)
// })

// let sum =0;

// num.forEach((item) =>{
//     sum += item
// })

// console.log("total:", sum)

// const times = num.map(double);


// function double(value, index, array){
//     return value * 2;
// }

// times.forEach((times) =>{
//     console.log(times)
// })

// console.log(times)


const books = [
    {
        name: "Pit",
        price: 200,
        count: 13,
    },
    {
        name: "When",
        price: 700,
        count: 24,
    },
    {
        name: "Will",
        price: 150,
        count: 3,
    },
    {
        name: "Boom",
        price: 900,
        count: 19,
    },
    {
        name: "Cap",
        price: 200,
        count: 8,
    },
]

// const findBooks = books.find((books)=> {
//     return books.price <=200;
// })

// console.log(findBooks)

// const filterBooks = books.filter((books) =>{
//     return books.price <=500;
// })

// console.log(filterBooks)
// console.log(books)

// books.forEach((books) =>{
//     console.log(books)
// })

// const totalBooks = books.reduce((currentValue, books) => {
//     return books.count + currentValue
// }, 0)

// console.log(totalBooks);


// const product = books.map((books) =>{
//     return books.price * books.count
// })

// console.log(product)

// let digit = [1,1,2,3,1,4,5,5,6,3,4,7,5,8,3,4,9]

// const filterNumber = digit.filter((value, index, arr) =>{
//     return arr.indexOf(value) === index;
// })

// console.log(filterNumber)

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

number.splice(5,4, 6, 7, 8, 9, );

console.log(number)
// console.log(result)

// let a = [1,2,3,4,5];
// let b = [6,7,8,9,10];

// let c = a.concat(b);

// console.log(c)

// const names = ["Mercy", "Jane", "Mary"];

// names.forEach((user) => {
//     console.log(user)
// })

// let newArray = []
// // let age = 50;
// names.forEach((user) =>{
//     let age = 50;
//     // console.log(user, "is of age", age)
//     newArray.push(`${user} is of age ${age}`)
// })

// console.log(newArray)