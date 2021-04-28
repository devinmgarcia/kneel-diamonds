import { getOrderBuilder, getSizes, setSize } from "./database.js"

const metals = getSizes()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "size") {
//             window.alert(``)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {

    const currentPicks = getOrderBuilder()

    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = metals.map(size => {
        if (currentPicks.sizeId === size.id) {
            return `<li>
            <input type="radio" name="size" checked="checked" value="${size.id}" /> ${size.carets}
        </li>`
        } else {
            return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
        }
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}