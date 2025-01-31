const JavaEndpoint = "https://api.mcsrvstat.us/3/"
const BedrockEndpoint = ""

export async function GetJavaStatus(Url){
    let Connectable = false
    let Players = 0
    try {
        console.log(JavaEndpoint+Url)
        const Response = await fetch(JavaEndpoint+Url)
        const Json = await Response.json()
        console.log(Json)
        Connectable = Json["online"]
        Players = Json["players"]["online"]
    } catch (Error) {
        console.warn(Error)
    }
    return Connectable,Players
}
export async function GetBedrockStatus(Url){

}