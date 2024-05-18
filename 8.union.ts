/*
    union = Variable can have more then 1 data type
 */

const display: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

function combine(a:number | string,b:number | string){
    if(typeof a === 'number' && typeof b === 'number')
        return a+b;
    else
        return a.toString()+b.toString();
}
    
display.innerHTML += `${combine(2,4)}  `;
display.innerHTML += `<br><br>`;
display.innerHTML += `${combine("Het ","Patel")}  `;
display.innerHTML += `<br><br>`; 

