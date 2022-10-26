/*****************************************************************************/
/*функцию, которая принимает в качестве аргумента объект и выводит в консоль 
все ключи и значения только собственных свойств. Данная функция не должна 
возвращать значение.*/
function showOwnPropertyForObj(obj){
    for (let key in obj)
    {
        if (obj.hasOwnProperty(key))
            console.log(key);
    }
}

/*for testing
const obj = {a:1, b:2, c:3};
const str = "c";
showOwnPropertyForObj(obj);*/
