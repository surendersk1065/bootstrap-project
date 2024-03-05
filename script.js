var processor = document.querySelector(".processor-container")
var ram = document.querySelector(".ram-container")
var storage = document.querySelector(".storage-container")
var cabinet = document.querySelector(".cabinet-container")
var monitor = document.querySelector(".monitor-container")

var probutton = document.querySelector(".probtn")
var rambutton = document.querySelector(".rambtn")
var strbutton = document.querySelector(".strbtn")
var cabbutton = document.querySelector(".cabbtn")
var monbutton = document.querySelector(".monbtn")

probutton.addEventListener("click",function(event){
    event.preventDefault()
    processor.style.display = "block"
    ram.style.display = "none"
    storage.style.display = "none"
    cabinet.style.display = "none"
    monitor.style.display = "none"
})

rambutton.addEventListener("click",function(event){
    event.preventDefault()
    processor.style.display = "none"
    ram.style.display = "block"
    storage.style.display = "none"
    cabinet.style.display = "none"
    monitor.style.display = "none"
})

strbutton.addEventListener("click",function(event){
    event.preventDefault()
    processor.style.display = "none"
    ram.style.display = "none"
    storage.style.display = "block"
    cabinet.style.display = "none"
    monitor.style.display = "none"
})

cabbutton.addEventListener("click",function(event){
    event.preventDefault()
    processor.style.display = "none"
    ram.style.display = "none"
    storage.style.display = "none"
    cabinet.style.display = "block"
    monitor.style.display = "none"
})

monbutton.addEventListener("click",function(event){
    event.preventDefault()
    processor.style.display = "none"
    ram.style.display = "none"
    storage.style.display = "none"
    cabinet.style.display = "none"
    monitor.style.display = "block"
})

var popupclose = document.querySelector(".popclosebtn")
var popup = document.querySelector(".signin-popup")
var popupopen =document.querySelector(".signinpopup")

popupopen.addEventListener("click",function(event){
    event.preventDefault()
    popup.style.display = "block"
    
})

popupclose.addEventListener("click",function(event){
    event.preventDefault()
    popup.style.display = "none"
})


var loginlink = document.querySelector(".login")
var acclink = document.querySelector(".account")
var dislog = document.querySelector(".display-login")
var disacc = document.querySelector(".display-account")
var logbutton = document.querySelector(".logbtn")
var subbutton = document.querySelector(".subbtn")

loginlink.addEventListener("click",function(event){
    event.preventDefault()
    dislog.style.display = "block"
    disacc.style.display = "none"
})

acclink.addEventListener("click",function(event){
    event.preventDefault()
    dislog.style.display = "none"
    disacc.style.display = "block"
})

/*logbutton.addEventListener("click",function(){
    popup.style.display = "none"
})

subbutton.addEventListener("click",function(){
    popup.style.display = "none"
})*/
var form = document.getElementById('form')
var number = document.getElementById('number')

form.addEventListener("submit", (e) => {
    
    let message = []
    if(number.value === '' || number.value ==null){
        message.push("Number is required")
    }
    if(number.value.length > 2 ){
        popup.style.display ="none"
    }


})

