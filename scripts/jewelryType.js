import { getOrderBuilder, getTypes, setType } from "./database.js"

const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
)

export const JewelryTypes = () => {

    const currentPicks = getOrderBuilder()

    let html = '<div class="types">'

    // Use .map() for converting objects to <li> elements
    const listItems = types.map(type => {
        if (currentPicks.typeId === type.id) {
            return `<div>
        <input type="radio" name="type" checked="checked" value="${type.id}"/>
        ${type.name}
        </div>`
        } else {
            return `<div>
        <input type="radio" name="type" value="${type.id}"/>
        ${type.name}
        </div>`
        }
    })


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</div>"
    return html
}