import getText from "./getText.js"

const changeHandler = (e) => {
    document.getElementById("weather-result").textContent = getText(e.target.value);
}

export default changeHandler
