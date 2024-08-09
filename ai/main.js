export function Init(){
    console.log("Init")
    var Buttons = document.querySelectorAll(".btn1")
    for (let i in Buttons){
        var Button = Buttons[i]
        if (Button){
            Button.addEventListener("click", ()=>{
                Button.querySelector("span").hidden = false
            })
        }
    }
}