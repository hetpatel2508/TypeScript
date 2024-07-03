 const display: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

 type MyObjType ={
     a: string;
     b: number;
     c?: boolean;  // ? means c object hoy ke na hoy doesn't matter 
 }
 
 const temp1: MyObjType = { a: "Patel Het R", b: 30273, c: true };
 
 if (temp1.c) {
     display.innerHTML += `<h1>Name : ${temp1.a}</h1><h1>Enrollment Num. : ${temp1.b}</h1><br><br>`;
 }
     
 
 const temp2:{a:string,b:number,c:boolean} = { a: "Patel Het R", b: 30273, c: true };
 if (temp2.c) {
     display.innerHTML += `<h1>Name : ${temp2.a}</h1><h1>Enrollment Num. : ${temp2.b}</h1><br><br>`;
 }