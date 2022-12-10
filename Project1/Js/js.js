// alert('Hello world!!!1');
// alert('Hello');
// document.write('zxczxczxc');
// let message;
// message = 'Hello432';
// alert(message)
// var admin, name;
// name = 'John';
// admin = name;
// alert(admin)
// var x, y;
// x = 10;
// y = 21;
// alert(x + y)
// var t = 'text1';
// alert(t)
// var t = 'text1';
// alert(t + 'text2')
// var t = 'text1';
// alert(t + "\n" + 'text2')

// var name=prompt('Введите ваше имя')
// var str=prompt('Введите ваш возраст')



// alert(name+str)

// let x=1;
// x=-x
// alert(x)

// let e="qwe" + "qweqweqwesad"
// alert(e)

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;
// document.write(d)

// let f = 2;
// let x = 1 + (f *= 2);
// document.write(x)

// "" + 1 + 0
// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" + 2
// "4px" + 2
// 7 / 0 
// "-9" + 5
// "-9" -5
// document.write("4px" + 2)


// let num = prompt(0);
//     if(num<0){
//         alert("Меньше нуля")
//     } else if(num>0){
//         alert("Больше нуля")
//     } else {
//         alert("Это ноль")
//     }

// №1

// let number1=prompt('Num1');
// let number2=prompt('Num2');
//     if(number1>number2){
//         alert(number1 + "больше")
//     } else if(number2>number1){
//         alert(number2 + "больше")
//     }

// №2

// let a = prompt("Number");
// let b = prompt("Number");
// x = a
// y = b
// r = parseInt(y)
// t = parseInt(a)
// a %= 2;
//     if(a == 0){
//         alert(x*y)
//     } else{
//         alert(t+r)
//     }


// №3

// let q = prompt("x-координата")
// let w = prompt("y-координата")
// x = parseInt(q)
// y = parseInt(w)
//     if(x>0 && y>0){
//         alert("1 четверть")
//     } else if(x<0 && y>0){
//         alert("2 четверть")
//     } else if(x<0 &&y<0){
//         alert("3 четверть")
//     } else if(x>0 && y<0){
//         alert("4 четверть")
//     }

// №4

// let a = prompt("Чётные числа" + "\n" +"1 число")
// let b = prompt("2 число")
// let c = prompt("3 число")
// x = a
// y = b
// z = c
// a %= 2;
// b %= 2;
// c %= 2;
// t = parseInt(x)
// r = parseInt(y)
// e = parseInt(z)
//     if(a == 0 && b == 0 && c == 0){
//         alert(t+r+e)
//     } else{
//         alert("Нечётное")
//     }

// №5

// let a = prompt("1 число")
// let b = prompt("2 число")
// let c = prompt("3 число")
// x = parseInt(a)
// y = parseInt(b)
// z = parseInt(c)
// alert(a*b*c)
// alert(x+y+z)

// №6

// let a = prompt("1 длинна")
// let b = prompt("1 ширина")
// let c = prompt("2 длинна")
// let d = prompt("2 ширина")
// x = parseInt(a)
// y = parseInt(b)
// z = parseInt(c)
// v = parseInt(d)
//     if(x>z && y>v){
//         alert("2 конверт можно вложить в первый")
//     } else if(x<z && y<v){
//         alert("1 можно вложить во второй")
//     } else{
//         alert("Нельзя вложить")
//     }   

// №7

// let a = prompt("1 число")
// let b = prompt("2 число")
// let c = prompt("3 число")
// x = parseInt(a)
// y = parseInt(b)
// z = parseInt(c)
//     if(x>y && y>z){
//         alert(x + ">" + y + ">" + z)
//     } else if(x>z && z>y){
//         alert(x + ">" + z + ">" + y)
//     } else if(y>z && z>x){
//         alert(y + ">"+ z + ">" + x)
//     } else if(y>x && x>z){
//         alert(y + ">" + x + ">" + z)
//     } else if(z>y && y>x){
//         alert(z + ">" + y + ">" + x)
//     } else if(z>x && x>y){
//         alert(z + ">" + x + ">" + y)
//     }

// №8

// let a = prompt("Рейтинг")
//     if(0<a && a<19){
//         alert("Ваша оценка - F")
//     } else if(20<=a && a<39){
//         alert("Ваша оценка - Е")
//     } else if(40<=a && a<59){
//         alert("Ваша оценка - D")
//     } else if(60<=a && a<74){
//         alert("Ваша оценка - C")
//     } else if(75<=a && a<89){
//         alert("Ваша оценка - B")
//     } else if(90<=a && a<100){
//         alert("Ваша оценка - А")
//     }



// let a = prompt("1 число");
// let b = prompt("2 число");
// a = parseInt(a);
// b = parseInt(b);
// let result = (a + b< 4)? alert("Мало"):alert("Много");


// let login = prompt("Кто вы?");
//     message;
// message = (login == 'Сотрудник')?alert("Привет"):
//     (login == 'Директор')?alert("Здравствуйте"):
//     (login == '')?alert("Нет логина"):alert("");

// let age = prompt("num");
// age = parseInt(age)
// if (age >= 14 && age <= 90){
//     alert(age + " = норм")
// } else {
//     alert("плохое число")
// }

// let age = prompt("num");
// age = parseInt(age)
// if (age >= 14 != age <= 90){
//     alert(age + " = норм")
// } else {
//     alert("плохое число")
// }

// let a = prompt("Логин")
// if (a == "Админ"){
//     b = prompt("Пароль")
//     if (b == "Я главный"){
//         alert("Здравствуйте!")

//     } else{
//         alert("Неверный пароль")
//     } 
    
// } else{
//     alert("Отменено")  
// }