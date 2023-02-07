


let userName = prompt(`Lütfen adınızı giriniz`)
let myName = document.querySelector(`#myName`)
myName.innerHTML = `${userName}`

let date = new Date().toLocaleString();
// document.getElementById(`myClock`).innerHTML = date

function tarihSaat(){
    let myClock = document.querySelector(`#myClock`)
    myClock.innerHTML = `${date}` 

}
setInterval(tarihSaat, 1000)






  