const textarea=document.getElementById("textarea")
const chara=document.getElementById("chara")
const remain=document.getElementById("remain")
const msg=document.getElementById("msg")
const maxlength=textarea.getAttribute("maxlength")

textarea.addEventListener("input",updated)

const contain=document.getElementById("contain")

contain.addEventListener("submit",function(e){
    e.preventDefault()

})

function updated(){
    let type=textarea.value.length
    chara.innerText=type+"/"+maxlength
    remain.innerText=maxlength-type
    if(type==maxlength){
        alert("Maximum character limit reached!")
    }

};

function submit(){
    textarea.value=""
    chara.innerText="00/"+maxlength
    remain.innerText=maxlength
}