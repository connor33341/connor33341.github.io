const JavaEndpoint = ""
const BedrockEndpoint = ""

export async function GetJavaStatus(Url){
    let Connectable = false
    let Players = 0
    try {
        const Response = await fetch(JavaEndpoint+Url)
        const Json = await Response.json()
        Connectable = Json["online"]
        Players = Json["players"]["online"]
    } catch (Error) {

    }
    return Connectable,Players
}
export async function GetBedrockStatus(Url){

}