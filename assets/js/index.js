let customer = {
    name: "Jhon",
    surname: "Wilki",
    mail: "JhonWilki123@gmail.com",
    password: "123123",
    number: "890-123-543-4-123",
    adress: "hengroad",
    getAdressCustomer: function(){
        return this.adress;
    },
    setNumber: function(number){
        this.number = number;
    },
};

customer.isMale = true;
delete customer.adress;
delete customer.getAdressCustomer;



let customer2 = {}

Object.assign(customer2, customer);             `копіювання за допомогою assign`
for(let key in customer){                       `копіювання за допомогою циклу`
    customer2[key] = customer[key];
}

let cat = {   
    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDemage: true,

};


for(let key in cat){                       `копіювання за допомогою циклу`
    console.log(cat[key]);
}

function book(author, name, year, publ_house,price){
    this.author = author;
    this.name = name;
    this.year = year;
    this.publ_house = publ_house;
    this.price = price;
    this.calcAge = function(current_year){
        return current_year - this.year; 
    }
    this.setPrice = function(new_price){
        this.price = new_price;
    }
};



