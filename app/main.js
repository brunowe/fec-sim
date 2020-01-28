function appForm() {
  var ti = document.forms["fm1"]["d1"].value;
  var tf = document.forms["fm1"]["d2"].value;
  //var cr = document.forms["fm1"]["d3"].value;
  var x = "foto_2.png";
  if ((ti = "95") && (tf = "0")) {
    //var x = "foto_2.png";
  } else {
    if ((ti = "80") && (tf = "0")) {
      //var return = "url img 2"
    } else {
      //var x = "";
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
