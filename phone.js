var MobilePhones = {
    brand: "Iphone",
    model: "16",
    year: 2024
}

var MobilePhones2 = {
    brand: "Samsung",
    model: "S24",
    year: 2024
}

class Phone {
    constructor(make,model)
        this.brand = brand;
        this.model = model;
        this.year = year;
}

var tradeIn = ("Do you have a phone to trade in?")
if (tradeIn == yes) {
    console.log("Please enter the phone brand and model.")
} else if (tradeIn == no) {
    console.log("Ok, have a nice day.")
}


    console.log(myPhone.getPhoneDetails())
    console.log(myPhone.phoneAge())
    console.log(myPhone.phoneValue())