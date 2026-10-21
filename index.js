let saveE1=document.getElementById("save-el")
let countE1= document.getElementById("count-el")
let count=0
function increment(){
    count += 1
    countE1.textContent = count
}
function save() {
    let countStr = count + "-"
    saveEl.textContent += countStr
    countE1.textContent=0
    count=0
}