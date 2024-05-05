/**
 Interfaces provide custom user-defined data type for objects;
 for custom user-defined data type in variable we uses type-alias
 */

 const display: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

 interface het_no_vichar {
     a: string;
     b: number;
     c: boolean;
 }
 
 const temp: het_no_vichar[] = [
     { a: "Patel Het R", b: 30273, c: true },
     { a: "Patel Deep S", b: 30275, c: true },
     { a: "Patel Dev S", b: 30269, c: true },
 ];
 
 temp.forEach(obj => {
     if (obj.c) {
         display.innerHTML += `<h1>Name : ${obj.a}</h1><h1>Enrollment Num. : ${obj.b}</h1><br>`;
     }
 });