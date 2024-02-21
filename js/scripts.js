const words = ["Masters","PhD"];
let currentIndex = 0;
let blinkCursor = ()=> {
    let toggle = true
    setInterval(() => {
        let cursorElement = '';
        try {cursorElement=document.getElementById('cursor');}
        catch(e){}
        try{
            if(toggle){ cursorElement.style.visibility='visible'; toggle=!toggle;}
            else{ cursorElement.style.visibility='hidden'; toggle=!toggle;}
        }
        catch(e){}
    }, 500);
}

let typeWords = ()=> {
    let currentWord = words[currentIndex];
    let wordElement = document.getElementById("word");
    wordElement.innerHTML="";
    let i=0;
    let typingInterval = setInterval( ()=> {
        wordElement.innerHTML += currentWord[i];
        i++;
        if(i>=currentWord.length) {
            clearInterval(typingInterval);
            setTimeout(()=> {
                let hidingInterval = setInterval(()=> {
                    wordElement.innerHTML = wordElement.innerHTML.slice(0, -1);
                    if(wordElement.innerHTML==="") {clearInterval(hidingInterval);currentIndex=(currentIndex+1)%words.length;setTimeout(typeWords,100);}
                },50);
            },2000);
        }
    },50);
}
blinkCursor();
typeWords();