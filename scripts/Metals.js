import { getMetals, getOrderBuilder, setMetal } from "./database.js"

const metals = getMetals()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "metal") {
//             window.alert(`User chose metal ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)


export const Metals = () => {

    const currentPicks = getOrderBuilder()

    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        if (currentPicks.metalId === metal.id) {
            html += `<li>
            <input type="radio" class="metal--${metal.id}" checked="checked" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
        } else {
            html += `<li>
            <input type="radio" class="metal--${metal.id}" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
        }
    }

    html += "</ul>"
    return html
}