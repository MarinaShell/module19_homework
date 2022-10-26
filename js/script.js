const userIvanov = {
    name : 'and',
    surname : "sec",
    age : 18,
    position : 'dev',
    [prop] : '123'   
}

const obg = {};
const obj = new Object();
obj.a = 1;
obj.b = 2;

console.log(obj.a);

const prop = 'prop';


obj["a"] = 4;

delete obj.a;

const res = ("b" in obj);

const person = {
    city : "moscow"
}
const student = Object.create(person);
student.ownCity = "Piter";

console.log(student.city);
for (let key in student)
{
    if (student.hasOwnProperty(key))
    console.log(key);
}

function a(obj){
    for (let key in obj)
    {
        if (obj.hasOwnProperty(key))
            console.log(key);
    }

}

const obj1 = {a:1, b:2, c:3};
a(obj1);

function b(obj, str){
    for (let key in obj)
    {
        if (obj.hasOwnProperty(key))
        {
            if (key == str)
                console.log(key);
        }
    }

}

const obj2 = {a:1, b:2, c:3};
const str = "c";
b(obj2, str);

function c(){
    return {};
}

const obj = c();
console.log(obj);

function Electro(name){
    this.name = name
}

Electro.prototype.turnOff= function(){

}

Electro.prototype.turnDown = function(){
    
}


function Electro1(size, name){
    this.size = size,
    this.name = name
}

function Electro2(num){
    this.num = num
}

Electro1.prototype = new Electro();
Electro2.prototype = new Electro();

Electro1.prototype.getNum = function(){

}
Electro2.prototype.getSize = function(){

}



const el = new Electro1(12);
el.getNum();
el.turnDown();
el.turnOff();

const el2 = new Electro2(12);
el2.getSize();
el2.turnDown();
el2.turnOff();

const el3 = new Electro();
el3.turnDown();
el3.turnOff();