export function formatVal(strVal) {

    const val = (parseFloat(strVal.replace('%', '')) / 100).toFixed(4)

    return parseFloat(val);
}