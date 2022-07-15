const numero = "5493885802412"

const quitNumber9 = (numero) => {

    let from = numero.split("")
    if (from.includes("9")) {
        for (let i = 0; i < from.length; i++) {
            if (from[2] === "9") {
                const test1 = from.slice(0, 2)
                const test2 = from.slice(3, from[from.length])
                const newNumber = test1.concat(test2).toString().replace(/,/g, "")
                return newNumber
            }
        }
    }
    else {
        console.log(numero)
        return numero
    }
}

module.exports = quitNumber9
