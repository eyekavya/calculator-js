// let one = Number(document.getElementById("1").innerHTML);
// let two = Number(document.getElementById("2").innerHTML);
// let thr = Number(document.getElementById("3").innerHTML);
// let fou = Number(document.getElementById("4").innerHTML);
// let fiv = Number(document.getElementById("5").innerHTML);
// let six = Number(document.getElementById("6").innerHTML);
// let sev = Number(document.getElementById("7").innerHTML);
// let eig = Number(document.getElementById("8").innerHTML);
// let nin = Number(document.getElementById("9").innerHTML);
// let zer = Number(document.getElementById("0").innerHTML);

let number = document.getElementsByClassName("number");

for (let i = 0; i < number.length; i++) {
  const num = Number(number[i].innerHTML);
  console.log(num);
}
