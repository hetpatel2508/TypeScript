const display: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

const numbers: number[] = [1, 2, 3, 4, 5];

const fruits: string[] = ["Apple", "Banana", "Orange"];

const mixed: (string | number)[] = ["Hello", 123, "World", 456];

numbers.forEach((temp2)=>{
    display.innerHTML += `${temp2}  `;
})
display.innerHTML += `<br><br>`;


fruits.forEach((temp2)=>{
    display.innerHTML += `${temp2}  `;
})
display.innerHTML += `<br><br>`;


mixed.forEach((temp2)=>{
    display.innerHTML += `${temp2}  `;
})
display.innerHTML += `<br><br>`;