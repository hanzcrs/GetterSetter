const computador = {
    marca: "lenovo",
    modelo: "legion gamer",
    color: "negro",
    precio: 790.990,
    locales: ["paris", "falabella", "PC Express"],
    // declarar un get es una seuda propiedad computada dentro de aca
    get marcaEnMayuscula() {
        return this.marca.toUpperCase()
    },
    // agregar nuevo local
     set agregarLocal(agregarnuevolocal) {
        this.locales.push(agregarnuevolocal);
    },
};


// mostrar en consola
console.log(computador);
// llamar para mostrar en mayuscula
console.log(computador.marcaEnMayuscula);
// agregar local
computador.agregarLocal = "PC Factory";


