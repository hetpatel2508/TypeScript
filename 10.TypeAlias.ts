/*
    Type Alias = Store DataTypes in 1 variable and then use it pass data type
 */

const display: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

type MyType = string | number | boolean;

let a:MyType = 25;
let b:MyType = "Het Patel";
let c:MyType = true;


display.innerHTML += `${a}  `;
display.innerHTML += `<br><br>`;
display.innerHTML += `${b}  `;
display.innerHTML += `<br><br>`;
display.innerHTML += `${c}  `;
display.innerHTML += `<br><br>`;