var total=document.querySelector('.total-price')
console.log(total)
var prices=document.querySelectorAll('.unit-price')
console.log(prices)
var plus=document.querySelectorAll('.plus-btn')
var minus=document.querySelectorAll('.minus-btn')
console.log(plus)
console.log(minus)
var qte=document.querySelectorAll('#quantity')
console.log(qte);
var heart=document.querySelectorAll(".fa-heart")
console.log(heart);
var trash=document.querySelectorAll(".fa-trash")
console.log(trash);
var card=document.querySelectorAll(".card")
console.log(card);
var dark=document.querySelector(".bb8-toggle__checkbox")
var body=document.querySelector("body")
console.log(dark);
console.log(body);

function totalprice(){
    var res=0
    for(let i=0; i<prices.length;i++){
        res=res+prices[i].innerHTML*qte[i].innerHTML
    }
    total.innerHTML=res
    return total
}

for(let i=0;i<plus.length;i++){
plus[i].addEventListener("click",function increment(){
    qte[i].innerHTML++
    totalprice()
})
}
for (let i=0; i<minus.length; i++){
    minus[i].addEventListener("click", function decrement(){
        if(qte [i].innerHTML>0){
            qte[i].innerHTML--
        }
        totalprice()
    })
}


for(let i=0; i<heart.length; i++){
    heart[i].addEventListener("click",function like(){
if(heart[i].style.color==="red"){
    heart [i].style.color="black"
}
        else{
        heart[i].style.color="red"
    }
    })
}

for (let i = 0; i < trash.length; i++) {
    trash[i].addEventListener("click",function remove() {
        card[i].remove() 
        qte[i].innerHTML=0
        totalprice()
    });   
}
dark.addEventListener("click", function theme(){
    if(body.style.backgroundColor===""){
        body.style.backgroundColor="black"
    }
    else{
        body.style.backgroundColor=""
    }
})
for (let i = 0; i < card.length;i++){
card[i].addEventListener("mouseover",function change(){
    card[i].style.background="linear-gradient(45deg,red,blue)"
})
card[i].addEventListener("mouseout",function change(){
    card[i].style.background=""
})
}
