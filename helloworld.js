// console.log("merhaba");
// // alert("merhaba");
// // var serverName = "js ile basladik";
// // console.log(serverName);
// let serverName;
// console.log(serverName);
// let pass = "1212";
// console.log(pass);
// let fullName = "ahmet";
// console.log(fullName + " " + "deneme amacli");
// fullName = fullName + " yeni string";
// console.log(fullName);
// const password = "xyz";
// console.log(password);
// // const password = "yxc";

// let isActive = false;
// isActive = true;
// console.log(isActive);

// let userName;
// let isUserName = Boolean(userName);
// console.log(isUserName);

// let user = "user";
// console.log("User name:", Boolean(user));
// let price = 111;
// let strPrice = "111";
// let hasPassword = true;

// console.log("price: ", typeof price);
// console.log("strPrice: ", typeof strPrice);
// console.log("hasPassword: ", typeof hasPassword);

// let number1 = "11";
// number1 = parseInt(number1);
// console.log("number1 : ", number1, typeof number1);

// let number2 = "11px";
// number2 = parseInt(number2);
// console.log("number2 : ", number2, typeof number2);

// let number3 = "11.1";
// number3 = Number(number3);
// console.log("number3 : ", number3, typeof number3);

// let number4 = "11.4px";
// number4 = parseFloat(number4);
// console.log("number4 : ", number4, typeof number4);

// let number5 = 55
// number5 = number5.toString()
// console.log(number5, typeof(number5))

// let userName = 'Hakan'
// const DOMAIN = "kodluyoruz.org"

// let email = userName + "@" + DOMAIN
// console.log("Hello", userName, "wellcome our website,", "yor mail adress is : ", email)
// //TEMPLATE LITERALS
// let info = `Hello ${userName} wellcome  our website,
// Your email adress is: ${email}
// Your email adresss lenght is: ${email.length}
// you need to pay : ${(2 + 3) * 10} $
// the time is : ${new Date().getHours()}:${new Date().getMinutes()}
// Your name starts with: ${userName[0]}..
// `
// console.log(info)

// let email = "hakan@gmail.com";
// let firstName = "hakan";
// let lastName = "YALCINKAYA";

// console.log(email.length);
// console.log(firstName[0]);
// console.log(firstName.charAt(0));

// console.log(firstName.toUpperCase());
// console.log(firstName);

// console.log(email.search("@"));
// console.log(email[5]);
// console.log(email.search("ol"));

// console.log(document.location.pathname);
// console.log(document.head);
// console.log(document.body);

// console.log(document.URL);
// console.log(document.baseURI);

// document.body.style.backgroundColor = "aqua";

// let title = document.getElementsByTagName("h2");
// console.log(title.millet.innerHTML = "bakalim");

// let fullName = prompt("Adinizi giriniz: ");
// console.log(fullName);

// let deneme = document.querySelector("#deneme");
// deneme.innerHTML = `${deneme.innerHTML} <small style="color:red;">${fullName}</small>`;

// let item = document.querySelector("ul#select>li:last-child");
// console.log(item);

// let ulDOM = document.querySelector("ul#select")
// let liDOM = document.createElement('li')
// let wrapLiStart = "<li style='color:red'>"
// let wrapLiEnd = '</li>'

// liDOM.innerHTML =  "we created that"
// // ulDOM.append(liDOM)
// // console.log(ulDOM.lastChild)

// ulDOM.prepend(liDOM)

// let tryIt = document.querySelector("deneme");
// deneme.classList.add("text-one")
// deneme.classList.add("tahta")
// deneme.classList.add("new","secondary","third")
// deneme.classList.remove("new","secondary", "tahta")
// console.log(deneme.classList);

// let user = 'must'
// let price = "100"
// console.log(price == 1)
// console.log(" == ile ", price == 100)
// console.log(" === ile ", price === 100)
// console.log(price != 1)
// console.log( user != 'guest')
// console.log('<=',price <= 100)
// price = 0
// console.log(price > 0 && user != 'guest')
// console.log(price > 0 || user != 'guest')

// let username = prompt('enter your username: ')

// // if (username) {
// //     console.log(`your username ${username}`)
// // } else{
// //     console.log("there is no username")
// // }

// let username = prompt('enter your username: ')
// let age = prompt('enter your agee: ')
// let info = document.querySelector('#info')

// if (username && age >= 18) {
//     // console.log('you can get driver licence')
//     info.innerHTML = 'you can get driver licence'
// } else if (!username){
//     // console.log('there is no user name')
//     info.innerHTML = 'there is no user name'
// } else if (!(age >= 18)) {
//     // console.log('there is no age info or your age is less than 18')
//     info.innerHTML = 'there is no age info or your age is less than 18'
// }

// let userName = prompt('enter your user name')
// let info = document.querySelector('#info')
// info.innerHTML = `${userName.length > 0 ? userName : 'There is no user name info'}`

/*.
1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir
AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0-49
2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et
3- ff bilgisinde uzgun surat ikonu cikart, digerlerinde ise gulucuk olsun :)
4- ff class bilgisi text-danger, digerlerinin ise text-primary olsun
*/
// const SMILE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
// <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
// </svg>`
// const SAD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
// <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
// </svg>`
// let examGrade = prompt('enter the score')
// let textInfo;
// let info = document.querySelector('#info')

// if (examGrade >= 0 && examGrade <= 100) {
//     textInfo = SMILE
//     info.classList.add('text-primary')
//     if (examGrade >= 90) {
//         textInfo += ' AA'
//     } else if (examGrade >= 85) {
//         textInfo += ' BA'
//     } else if (examGrade >= 80) {
//         textInfo += ' BB'
//     } else if (examGrade >= 75) {
//         textInfo += ' CB'
//     } else if (examGrade >= 70) {
//         textInfo += ' CC'
//     } else if (examGrade >= 65) {
//         textInfo += ' DC'
//     } else if (examGrade >= 60) {
//         textInfo += ' DD'
//     } else if (examGrade >= 50) {
//         textInfo += ' FD'
//     } else if (examGrade >= 0) {
//         textInfo = `${SAD} FF`
//         info.classList.add('text-danger')
//     }
// } else {
//     textInfo = 'the info should between 0 - 100'
// }

// info.innerHTML = `${textInfo} :: ${examGrade}`
// console.log(textInfo)

// function helloWorld() {
//     console.log('hi')
// }
// function hello() {
//     console.log("hello everyone");
//     helloWorld()
// }

// hello()

// function hello(firstName) {
//     console.log(`Hello ${firstName}`)
// }
// hello('JS')

// const helloFuncV1 = (firstName) => {
//     console.log(`Hello ${firstName}`)
// }
// helloFuncV1('With fat arrow')

// const helloFuncV2 = firstName => console.log(`Hello ${firstName}`)
// helloFuncV2('with fat arrow and without curly braces')

// const helloFuncV3 = (firstName, lastName) => console.log(`Hello ${firstName} .. ${lastName}`)
// helloFuncV3('with','two arguments')

// const helloFuncV4 = (firstName, lastName) => {
// let info = `Hello ${firstName} .. ${lastName}`
// console.log(info)
// return info
// }
// helloFuncV4('there are more than one process', 'and we need to use curly braces again')

// work with DOM
// let gr = document.querySelector("#board");
// gr.addEventListener("click", domClick); // the click is a command and we can change it

// function domClick() {
//   console.log("clicked");
//   console.log(this);
//   console.log(this.innerHTML);
//   console.log((this.innerHTML = "if we can reach innerHTML we can change it"));
//   //this.style.color = 'blue'
//   this.style.color == "blue"
//     ? (this.style.color = "red")
//     : (this.style.color = "blue");
// }

// js -- end of the level

// let counter = 0;
// let counterDom = document.querySelector("#counter");
// let increaseDom = document.querySelector("#increase");
// let decreaseDom = document.querySelector("#decrease");

// counterDom.innerHTML = counter;
// increaseDom.addEventListener("click", clickEvent);
// decreaseDom.addEventListener("click", clickEvent);
// function clickEvent() {
//   console.log(this.id);
//   // if (this.id == "increase") {
//   //   counterDom.innerHTML = counter += 1;
//   // }
//   // else {
//   //   counterDom.innerHTML = counter -= 1;
//   // }
//   this.id == "increase" ? (counter += 1) : (counter -= 1);
//   counterDom.innerHTML = counter;
// }

// adding data with local storage

let user = { userName: "mstf", isActive: true };
console.log(user)
localStorage.setItem("userInfo", JSON.stringify(user));
let userInfo = localStorage.getItem('userInfo')
userInfo = JSON.parse(userInfo)
console.log(userInfo)