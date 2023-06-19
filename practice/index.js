const item = [
    { name :"cook", price: 300 },
    { name :"bus", price: 600 },
    { name :"big", price: 150 },
    { name :"how", price: 860 },
    { name :"cue", price: 760 },
    { name :"ball", price: 200 },
    { name :"then", price: 550 },
];


function loopArray(item){
    return item.name
}

console.log(loopArray)




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



// const findItems = item.find((item) =>{
//     return item.price <= 400;
// })

// console.log(findItems)
