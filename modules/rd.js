const renderDropdown = (changeHandler = () => { }) => {
    const select = document.createElement("select")
    select.add(new Option("Выберите значение", "-"))
    select.add(new Option("Париж", "paris"))
    select.add(new Option("Лондон", "london"))
    select.add(new Option("Берлин", "berlin"))
    select.add(new Option("Казань", "kzn"))
    select.addEventListener("change", changeHandler)
    select.id = "city-select"
    document.getElementById("root").appendChild(select)
}

export default renderDropdown 
