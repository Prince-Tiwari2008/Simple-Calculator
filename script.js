let input = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let isBracketOpen = false;

let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    const btnText = e.target.innerText.trim();

    if (btnText === "=") {
      if (string === "") return;
      try {
        string = String(eval(string));
        input.value = string;
      } catch (err) {
        input.value = "Error";
        string = "";
        isBracketOpen = false;
      }
    } 
    else if (btnText === "AC") {
      string = "";
      isBracketOpen = false;
      input.value = string;
    } 
    else if (btnText === "DEL") {
      let lastChar = string[string.length - 1];
      if (lastChar === "(") isBracketOpen = false;
      if (lastChar === ")") isBracketOpen = true;

      string = string.substring(0, string.length - 1);
      input.value = string;
    } 

    else if (btnText === "()") {
      if (!isBracketOpen) {
        let lastChar = string[string.length - 1];
        if (string !== "" && !isNaN(lastChar)) {
          string += "*(";
        } else {
          string += "(";
        }
        isBracketOpen = true;
      } else {
        string += ")";
        isBracketOpen = false;
      }
      input.value = string;
    } 
    else {
      string += btnText;
      input.value = string;
      input.scrollLeft = input.scrollWidth;
    }
  });
});