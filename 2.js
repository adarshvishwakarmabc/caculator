let display = document.getElementById(`inputBox`)
let button = ''
let calBut =''
function  ac() {
  display.value = ''
}
function del() {
  display.value = display.value.slice(0,-1);
}
function allBut(event) { 
   button = event.target.innerHTML;
   display.value += button;
}
function math(event) {
  calBut = event.target.innerHTML;
  display.value += calBut;
}
function eqal() {
   let x = display.value;
   x = eval(x);
   display.value = x;
}




                                                                       