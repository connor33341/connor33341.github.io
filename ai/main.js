export function Init(){
    console.log("Init")
    var Buttons = document.querySelectorAll("button")
    for (let i in Buttons){
        var Button = Buttons[i]
        Button.addEventListener("click", ()=>{
            Button.lastElementChild.hidden = false
        })
    }
}