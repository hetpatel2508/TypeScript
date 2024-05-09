/* If we assign variable String type then it can't be redefined as Number */
/* But in any type variable can be re-defined with any type */

const display: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

    let ID:any = 30273;
        display.innerHTML += `ID = ${ID}`;
        display.innerHTML += `<br><br>`;
    ID = "Het";
        display.innerHTML += `ID = ${ID}`;
        display.innerHTML += `<br><br>`;
    ID = true;
        display.innerHTML += `ID = ${ID}`;
        display.innerHTML += `<br><br>`;
