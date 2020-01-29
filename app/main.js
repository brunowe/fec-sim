function appForm() {
  var ti = document.getElementById("d1").value;
  var tf = document.getElementById("d2").value;
  var cr = document.getElementById("d3").value;
  console.log(ti);
  if (ti == "95" && tf == "0" && cr == "-0.139") {
    var x = "foto_1.png";
  } else {
    if (ti == "80" && tf == "0" && cr == "-0.139") {
      var x = "foto_2.png";
    } else {
      var x = "erro.png";
    }
  }
  document.getElementById("img").src = x;
}

/*
document.getElementById("img").src = "graf1.png";
op1 = document.getElementById("d1").focus;
console.log(op1);
op2 = document.getSelection("d1");
console.log(op2);
*/
