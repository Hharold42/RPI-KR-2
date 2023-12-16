const getText = (country) => {
    const data = {
        paris: "-40, холодно",
        berlin: "+40, жарко",
        london: "+11, дождь",
        kzn: "-11, Нормально!!!"
    }

    return data[country]
}

export default getText
