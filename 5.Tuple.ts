/* Tuple is different from array because we need to specify individual type of each element in tuple  */
/*While in array we don't have to specify types of each element*/

const display: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

const tuple:[string,string,number,boolean,number] = ["Het","Patel",2508,true,7.45];

tuple.forEach((temp2)=>{
    display.innerHTML += `${temp2}  `;
})
display.innerHTML += `<br><br>`;