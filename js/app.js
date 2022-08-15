var i = 0;
function add() {
  if (i === 0) {
    var inp = document.createElement("input");
    inp.setAttribute("id", "rate");
    inp.setAttribute("type", "text");
    inp.setAttribute("pattern", "[0-9]+.[0-9]{2}");

    var lab = document.createElement("label");
    lab.setAttribute("for", "rate");
    lab.innerHTML = "HOURLY RATE (112.56):";

    var pay = document.getElementById("pay");
    pay.appendChild(lab);
    pay.appendChild(inp);
    i = 1;
  }
}

function subtract() {
  var pay = document.getElementById("pay");
  pay.innerHTML = "";
  i = 0;
}

add();
subtract();
