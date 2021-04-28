import { getMetals, getOrderBuilder, getSizes, getStyles, getTypes } from "./database.js";

export const currentOrderPrice = () => {

    const metals = getMetals()
    const styles = getStyles()
    const sizes = getSizes()
    const types = getTypes()
    const currentPicks = getOrderBuilder()


    const currentMetal = metals.find(metal => metal.id === currentPicks.metalId)
    const currentStyle = styles.find(style => style.id === currentPicks.styleId)
    const currentSize = sizes.find(size => size.id === currentPicks.sizeId)
    const currentType = types.find(type => type.id === currentPicks.typeId)

    let currentTotal = 0

    if (currentMetal && currentStyle && currentSize && currentType) {
        currentTotal = (currentMetal.price + currentStyle.price + currentSize.price) * currentType.multiplier
    }

    const costString = currentTotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return costString
}