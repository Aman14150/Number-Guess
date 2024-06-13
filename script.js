let inputEl = document.getElementById("userInput");
let givemesgeEl = document.getElementById("text");
let randomnumber = Math.ceil(Math.random() * 10);
console.log(randomnumber);

function verify() {
    let inputvalue = parseInt(inputEl.value); // Get the integer value from the input
    console.log(inputvalue);

    if (inputvalue === randomnumber) {
        givemesgeEl.textContent = "Number Matched";
    } else if (inputvalue > randomnumber) {
        givemesgeEl.textContent = "Number is bigger";
    } else {
        givemesgeEl.textContent = "Number is smaller";
    }
}
