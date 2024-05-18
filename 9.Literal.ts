/*
    Literal = Directly assign value instead of DataType like variable can only have mentioned values not other than that
 */

    const display: HTMLDivElement = document.getElementById("root") as HTMLDivElement;

    let t1:25 | 8 | 2003 = 25;
    //t1= 5; Error because it is not 25, 8 or 2003
    
    let t2:"Het" | "Patel" = "Het";
    // t2="Urvish" Error because it is not Het or Patel
    
    display.innerHTML += `${t1}  `;
    display.innerHTML += `<br><br>`;
    display.innerHTML += `${t2}  `;
    display.innerHTML += `<br><br>`;