const hasSpecialCharacters = (myString) => {
    pattern = /[^A-Za-z0-9 ñÑáéíóúÁÉÍÓÚüÜ\-]/;

    if (pattern.test(myString)) {
        return true
    }
}

module.exports = hasSpecialCharacters