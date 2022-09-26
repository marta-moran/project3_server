const hasJustLetters = (myString) => {
    pattern = /[^A-Za-z ñÑáéíóúÁÉÍÓÚüÜ\-]/;

    if (pattern.test(myString)) {
        return true
    }
}

module.exports = hasJustLetters