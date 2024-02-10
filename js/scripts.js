let words = ['Masters','PhD']
toggle = 1;
function animation(){
    if(toggle){
        document.getElementById('word').innerHTML=words[0];
        toggle--;
        console.log(toggle)
    }
    else{
        document.getElementById('word').innerHTML=words[1];
        toggle++;
        console.log(toggle)
    }
}
setInterval(
    animation,3000
)