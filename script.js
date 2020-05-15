function rd() {
  let x = Math.floor(Math.random() * 50) + 1;
  if (x < 10) return "0" + x;
  else return x;
  //return Math.floor(Math.random() * 99) + 1;
}

function rdArr(s) {
  var i = 0;
  var arrRd = [];
  arrRd[0] = rd();
  while (i < s) {
    var x = rd();
    if (arrRd.includes(x) == false) {
      arrRd.push(x);
    }
    i++;
  }
  return arrRd;
}

var table = document.getElementById("mytable");
var table2 = document.getElementById("mytable2");

var arrTb = rdArr(100);
var k = 0;

for (let i = 0; i < 5; i++) {
  var row = table.insertRow(i);
  for (let j = 0; j < 5; j++) {
    var cell = row.insertCell(j);
    cell.innerText = arrTb[k];
    k++;
  }
}

var brrTb = rdArr(100);
var k2 = 0;

for (let i = 0; i < 5; i++) {
  var row2 = table2.insertRow(i);
  for (let j = 0; j < 5; j++) {
    var cell2 = row2.insertCell(j);
    cell2.innerText = brrTb[k2];
    k2++;
  }
}

setInterval(main, 4000);

var btn1 = document.getElementById("number1");
var btn2 = document.getElementById("number2");
var nb;
function main() {
  nb = rd();
  btn1.innerHTML = nb;
  btn2.innerHTML = nb;

  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
      let nutClick = table.rows[j].cells[i];
      let nutClick2 = table2.rows[j].cells[i];
      nutClick.addEventListener("click", () => {
        if (nutClick.innerText == nb) nutClick.style.background = "red";
      });
      nutClick.addEventListener("touchstart", () => {
        if (nutClick.innerText == nb) nutClick.style.background = "red";
      });
      nutClick2.addEventListener("click", () => {
        if (nutClick2.innerText == nb) nutClick2.style.background = "red";
      });
      nutClick2.addEventListener("touchstart", () => {
        if (nutClick2.innerText == nb) nutClick2.style.background = "red";
      });
    }
  }
}
