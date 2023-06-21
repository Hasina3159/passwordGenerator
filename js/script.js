let toggle = document.getElementsByClassName("toggle");
let round = document.getElementsByClassName("round");

let password = document.getElementById("password");
let gen = document.getElementById("generer");

let copy = document.getElementById("copy");
function getMaj(){
    let maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let n = Math.random()*(maj.length);
    n = n - (n % 1)
    return maj[n]
}

function getMin(){
    let min = "abcdefghijklmnopqrstuvwxyz";
    let n = Math.random()*(min.length);
    n = n - (n % 1)
    return min[n]
}

function getChiffre(){
    let c = "0123456789";
    let n = Math.random()*(c.length);
    n = n - (n % 1)
    return c[n]
}

function getSpec(){
    let cs = `&"'(-_ç)=^$ù*,;:!~#{[|\`\ç)=¨£%µ?./§]}`;
    let n = Math.random()*(cs.length);
    n = n - (n % 1)
    return cs[n]
}

function generer(n, isMaj, isMin, isChiffre, isSpec){
    let tmp = "";
    let final = "";
    let rnd = 0;
    let flag = false;
    for(let i = 0; i <= n; i++){
        tmp = "";
        if(isSpec){
            tmp += getSpec();
            flag = true;
        }
        if(isMaj){
            tmp += getMaj();
            flag = true;
        }if(isMin){
            flag = true;
            tmp += getMin();
        }if(isChiffre){
            flag = true;
            tmp += getChiffre();
        }
        if(!flag){
            tmp = ""
            tmp += getMin();
        }
        rnd = Math.random()*(tmp.length);
        rnd = rnd - (rnd % 1);
        final += tmp[rnd];
    }
    return final
}


for(let i = 0; i < toggle.length; i++){
    toggle[i].addEventListener("click", (e)=>{
        e.target.classList.toggle("true")
        round[i].classList.toggle("true")
    })
    round[i].addEventListener("click", (e)=>{
        e.target.classList.toggle("true")
        toggle[i].classList.toggle("true")
    })
}

gen.addEventListener("click", (e) => {
    let maj = toggle[0].classList.contains("true");
    let min = toggle[1].classList.contains("true");
    let ch = toggle[2].classList.contains("true");
    let cs = toggle[3].classList.contains("true");
    let n = Math.abs(parseInt(document.getElementById("number").value));
    console.log(maj)
    console.log(min)
    console.log(ch)
    console.log(cs)

    password.value = generer(n-1, maj, min, ch, cs)
})

copy.addEventListener("click", (e) => {
    myFunction()
    let me = e.target;
    me.classList.toggle("fa-copy");
        document.getElementById("true").style.display = "flex";
        password.style.border = "3px solid greenyellow"
        setTimeout(()=> {
            me.classList.toggle("fa-copy");
            document.getElementById("true").style.display = "none";
            password.style.border = "3px solid transparent"

        }, 1000)
})

function myFunction() {
    var copyText = password;
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
  } 