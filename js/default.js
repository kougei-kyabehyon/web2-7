
var number= Math.floor(Math.random()*3);
var answer=parseInt(window.prompt('かずあて'));
var massage;
if(answer==nunber)
{
massage='good';
}
else if(answer<number){
massage='もうちょいうえ';
}else if(answer>number){
massage='もうちょいした';
}
document.getElementById('choice').textContent= message; 
