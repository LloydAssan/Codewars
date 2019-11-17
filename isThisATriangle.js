
function isTriangle(a,b,c){
let side1 = a+b
let side2 = b+c
let side3 = a+c

if(side1 > c && side2 > a && side3 > b ){
   return true;
}else{
   return false;
}
}
