/**
 * @param {array} array 
 * @param {boolean} seperate
 * @returns {string}
 */
module.exports = function format(array, seperate) {
    var formated = ''
    for (let y in array) {
        formated = formated + '['
        if (seperate) {
            formated = formated + array[y]
        }
        else {
            for (let x in array[y]) {
                formated = formated + array[y][x]
            }
        }
        formated = formated + ']\n'
    }
    return formated

}