const display: HTMLDivElement = document.getElementById("root") as HTMLDivElement;;

let a:string = "Patel Het R";
let b:number = 30273;
let c:boolean = true;

if(c){
    display.innerHTML=`<h1>Name : ${a}</h1><h1>Enrollment Num. : ${b}</h1>`;
}