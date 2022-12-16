let student = {
    //attribute
    name: "adrian",
    age: 36,
    isActive: true,
    nationality: "Mexican",
    //methods
    sayHi: function(){
        return "Hello!"; 
    },
    hobbies:["football","music","game"],
    adress:{
        street:"Palomar",
        zip:"91231",
        city:"San Diego"

    }
}
console.log(student);

let products = [];
let products1={
    name:"Laptop",
    description:"HP i7 core",
    price:200
}

let products2={
    name:"PC",
    description:"Dell radeon",
    price:250
}

let products3={
    name:"PC",
    description:"Lenovo",
    price:350
}

products=[products1,products2,products3];
products.push(products1,products2,products3);
//display the price of the product 3
console.log(products[2].price);
