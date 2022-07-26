const botonNumero = document.querySelectorAll('[data-numero]')
const botonOperador = document.querySelectorAll('[data-operador]')
const botonIgual = document.querySelector('[data-igual]')
const botonBorrarTodo = document.querySelector('[data-borrar-todo]')
const botonBorrar = document.querySelector('[data-borrar]')
const textoValorSuperior = document.querySelector('[data-valor-superior]')
const textoValorInferior = document.querySelector('[data-valor-inferior]')
/* CREAMOS VARIABLES O CONST PARA QUE JVS SEPA QUE HACER CON ELLOS E INTERACTUEN ENTRE ELLOS*/
/* queryselector ( le indicamos que vaya al html y traiga los elementos referidos sea 1 o si es all todos aquellos )*/
/* en profundidad lo que hace ell QUERYSELECTORALL es crear una node list.. lista de nodos con los diferentes elementos 
que se vayan encontrando en ell html */


class Calculadora {
    constructor(textoValorInferior,textoValorSuperior){   /* texto valor inferior y sup son los valores que vamos a estar manejando */
        this.textoValorInferior = textoValorInferior     /* creamos nuevamente las variables LOCALES que tendran accion a diferencia de las otras variables GLOBALES de arriba */
        this.textoValorSuperior = textoValorSuperior      /* creamos nuevamente las variables LOCALES que tendran accion a diferencia de las otra variables GLOBALES de arriba */
        this.valorInferior = ''   /* constantes nuevas que vamos a utilizar donde marcamos que vamos a tener un valor incial , un valor final y vas a hacer algo con esos valores 
        this.valorSuperior = ''
        this.operador = undefined   */
    }

    /* repetimos dentro de las clases valor superior y valor inferior por que vamos a estar manipulando estos valores
    y por eso utilizamos el this para crearlas como variables LOCALES y no generales ( dentro de la class) */
    /* y las otras 3 que dan como resultado '' , '' , udefined . declaran el valor inicial valor final y vamos a hacer 
    con esos valores por lo cual creamos los metodos siguientes */

    agregarNumero(numero){
    if(numero === '.' && this.valorInferior.includes('.')) return  /* si mi variable numero es igual a un " ." y a la vez ese punto ya esta incluido dentro de mi programa no lo ejecutes. */
    this.valorInferior = this.valorInferior + numero /* sirve para concatenar cada numero respecto al otro */
    }
    imprimirDisplay() {
        this.textoValorInferior.innerText = this.valorInferior  /* el texto del valor inferior sea igual al texto del
        this.textoValorSuperior.innerText = this.valorSuperior
    }

    /* innerText va a ser igual al valor que figura en la zona de abajo del display */
    borrar (){
        this.valorInferior = this.valorInferior.slice(0,-1) /* slice es un metodo que retorna una posicion dentro de un string */ 
    }                                                       /* entonces asi borra de a 1 caracter */

    elegirOperacion(operador) {
        if(this.valorInferior == '') return  /* si la calculadora no tiene nada retorna nada osea uqe no se ejecute nada */
        if(this.valorSuperior != '') { /* si el valor superior es diferente a un string vacio 
            this.realizarCalculo() realizamos el calculo */ 
        }
        this.operador = operador 
        this.valorSuperior = this.valorInferior
        this.valorInferior = '' /* es un string vacio para que se borre */
    }
    realizarCalculo() {
        let resultado /* primero declaramos una variable resultado esta variable va a asignar los parametros */
        let conversionValorSuperior = parseFloat(this.valorSuperior) /* pasamos de string (valor de html , a number) a traves del parseFloa*/ /* donde en (this.valorSuperior transforma nuestro valor superior) */
        let conversionValorInferior = parseFloat (this.valorInferior) /* pasamos de string (valor de html , a number) a traves del parseFloa*/ /* donde en (this.valorInferior transforma nuestro valor inferior) */
        if(isNaN(conversionValorSuperior) || isNaN(conversionValorInferior)) return /* cuando le damos como ultimo valor una operacion a la calculadora con esta funcion hacemos que no termine en NaN , ejemp : 1+1+ . la letra || representa un "o".
        switch (this.operador) {     /* creamos switch para determinar los diferentes casos dentro de las operaciones */
            case '+':
            resultado = conversionValorSuperior + conversionValorInferior
            break    /* es una sintaxis que tiene la sentencia switch */
            case '-':
            resultado = conversionValorSuperior - conversionValorInferior
            break
            case '*':
            resultado = conversionValorSuperior * conversionValorInferior
            break
            case '÷':
            resultado = conversionValorSuperior / conversionValorInferior
            break
            default: return            /* si no se cumplen ningunas de esas condiciones retorna a nada */
        }

        this.valorInferior = resultado 
        this.operador = undefined
        this.valorSuperior= ''
    }

    limpiarPantalla() {
        this.valorInferior = ''
        this.valorSuperior = ''
        this.operador = undefined

    }
}



const calculadora = new Calculadora (textoValorInferior,textoValorSuperior) 









botonNumero.forEach(boton => {                 /* usamos el metodo forEach por que es un solo boton */
    boton.addEventListener('click', () => {
        calculadora.agregarNumero(boton.innerText)
        calculadora.imprimirDisplay() 
    })
})

botonBorrar.addEventListener('click',() => {    /* visualiza un click y al hacer un click nos genera esta funcion "borrar" */
    calculadora.borrar()
    calculadora.imprimirDisplay()
})

botonOperador.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadora.elegirOperacion(boton.innerText)
        calculadora.imprimirDisplay() 
    })
})
botonIgual.addEventListener('click',() => {
    calculadora.realizarCalculo()
    calculadora.imprimirDisplay()
})

botonBorrarTodo.addEventListener('click',() => {    /* arrow function nos genera una funcion luego de ello */
    calculadora.limpiarPantalla()
    calculadora.imprimirDisplay()
})