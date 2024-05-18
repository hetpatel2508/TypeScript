/*
    Function Type = Return type of function
 */

const display: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

function output():void
{
    display.innerHTML += `Hello World`;
    display.innerHTML += `<br><br>`;
}

function sum(a:number,b:number):number
{
    return a+b;
}

function concate(a:string ,b:string):string
{
    return a+b;
}

output();
display.innerHTML += `${sum(2,5)}  `;
display.innerHTML += `<br><br>`;
display.innerHTML += `${concate("Het ","Patel")}  `;
display.innerHTML += `<br><br>`;