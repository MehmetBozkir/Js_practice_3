function myFunction() {
  const message = document.getElementById("feedback");
  message.innerHTML = "";
  let x = document.getElementById("age").value;
  try {
    if (x.trim() == "") throw "not entered, please fill in";
    if (isNaN(x)) throw "is not a letter";
    x = Number(x);
    if (x > 18) throw "enough to vote";
    if (x < 18) throw "not enough to vote";
    else throw "just this year is enough"; //if (x = 18)
  } catch (err) {
    message.innerHTML = "Your age " + err;
  } finally {
    document.getElementById("age").value = "";
  }
}

let adan1 = 1;
let adan2 = 2;
let ada1 = 3;
let adn = 4;
let aan = 5;
let adan = 6;
let an = 7;
let a11dan = 8;
let ada3n = 9;
let adan5 = 11;
let ada7n = 12;
let ada8n = 13;
let ada9n = 14;
let ada11n = 15;
