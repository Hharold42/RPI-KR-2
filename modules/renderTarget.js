export default function renderTarget() {
    const target = document.createElement("div")
    target.id = "weather-result"

    document.getElementById("root").appendChild(target)
}