/* enum = group of constant */

const display: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

enum MyDetails{
    ID = 30273,
    NAME = "Het Patel",
    DIVISION = 'D',
    COURSE = "Computer Engineering"
}

    display.innerHTML += `ID = ${MyDetails.ID}`;
    display.innerHTML += `<br><br>`;
    display.innerHTML += `NAME = ${MyDetails.NAME}`;
    display.innerHTML += `<br><br>`;
    display.innerHTML += `DIVISION = ${MyDetails.DIVISION}`;
    display.innerHTML += `<br><br>`;
    display.innerHTML += `COURSE = ${MyDetails.COURSE}`;
    display.innerHTML += `<br><br>`;