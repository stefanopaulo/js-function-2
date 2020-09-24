let dobro = function(a) {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(3))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
console.log(ola())
