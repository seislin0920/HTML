// class 物件的模板

class phone {
    constructor(name, number, year){
        this.name = name;
        this.number = number;
        this.year = year;
    };
    phone_age(){
        return  2023 - this.year;
    };
};
let phone1 = new phone("Apple", "XR", 2018);
let phone2 = new phone("Samsung", "S23" , 2023);
let phone3 = new phone("Sony", "Z3" , 2012);

document.write(phone3.number);
document.write("\n");


