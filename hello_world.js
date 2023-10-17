/* khdfkdbdfs
comentario en varias lineas
*/


//esto es un comentario,, hola mundo
console.log("Hola, JavaScript!")


//variables

var myString = "Esto es una cadena de texto"
console.log(myString);

//el let solo funciona en un scope es decir si se pone entre {} solo funcionara dentro de ese scope, en cabio var funcionara mientras no se ejcute algo antes de que este definidida porque sino saldra undefined
let myString2 = "Esto es una cadena de texto"
myString2 = "Aqui estoy cambiando el texto"
console.log(typeof myString2)
myString2 = 6
console.log(myString2)
console.log(typeof myString2)

let myNumber = 7
myNumber = myNumber + 4
console.log(myNumber)
console.log(myNumber - 1)
console.log(myNumber) //vemos que mynumber aun que le hagamos un -1 en el console log en vrd no ha cambiado su valor 

console.log(myString + " " + myNumber)//esto traga ya que JS tiene tipado de datos debil

let myNumber2 = 6.5
console.log(myNumber2)
console.log(typeof myNumber2)//saldra como tipo number ya que en JS hay menos tipos de datos primitivoa

let myBool = false
myBool = true
console.log(myBool)
console.log(typeof myBool)

myBool = null
console.log(myBool + myNumber2)//esto en la mayoria de lenguajes peta pq null es nada 

myBool = undefined//le estamos diciendo que no tiene definicion
console.log(myBool)

let myUndefined
console.log(myUndefined)//como no le hemos puesto ningun tipo a la variable tmb se ejecutara como undefined


//constantes

const MY_CONST = "Mi propiedad constante"
//MY_CONST = "Otro valor" Error ya que no se puede cambiar el valor , se queda con un valor fijo
console.log(MY_CONST)


//control de flujo

if (myNumber == 10 && myString == "Hola") {//se tienen que cumplir los dos casos
    console.log("El valor es 10")
} else if (myNumber == 11 || myString == "Hola") {//aqui solo con que uno de los dos casos se cumpla se ejecutara
    console.log("El valor es 11")
} else {
    console.log("El valor no es 10")
}



//al ser un tipo de datos null o undefined JS lo interpreta como nada, falso y entonces no enseña nada en el console log
//en el caso de undefined y null habria que poner myBool=Undefined/null en el if y entonces lo cogeria
//si fuera un numero o cadena de texto si que tal y como esta puesto aqui el () lo ejecutaria y saldria el texto Null


//Funciones

function myFunction() {
   return "Mi Funcion"//para que salga este log hay que llamar a la funcion como esta abajo
}
//se pueden hacer llamadas a mi funcion antes y despues de ser definida la funcion si cabiamos el console log arriba no habra problema
console.log(myFunction()) //El console log hace el llamado de la funcion que esta con el return devuelve el Mi funcion


//Listas

let myList = ["Laura", "Fornos", 20]
console.log(myList)
console.log(myList[0])//solo mostrara lo que haya en la poscion 0 de la lista


//Set (no admite repetidos)

let mySet = new Set(["Laura", "Fornos", 20, "Laura"])
mySet.add("Tarragona")
console.log(mySet)


//Mapas

let myMap = new Map([["Laura", 20], ["Razer", 45], ["Asus", 723]])
myMap.set("Sanji", 22)
console.log(myMap)
console.log(myMap.get("Laura"))//se mostrara en el log el valor de la estructura en este caso 20


//Bucles
//buscar que valor vamos a guardarnos de un listado de valores formado por una estructura(mapa set y lista)
for(const value of myMap){
    console.log(value)//se hcae un print por cada uno de los elementos de la lista/mapa/set
}

let myCounter = 0

while (myCounter < myList.length){
    console.log(myList[myCounter])
    myCounter++ //sumamos uno cada vez que haga el bucle para que despues de la lenght de myList pare de ejcutarse
}

//Clases

class MyClass {
    constructor(name,age){//las propiedades que definen a la clase
        this.name = name
        this.age = age
    }
}

let myClass = new MyClass("Laura", 20)
console.log(myClass)
console.log(myClass.name)


//Enum
const MyEnum = {
    DART:"dart",
     PYTHON: "python",
      SWIFT: "swift",
       JAVA: "java",
        KOTLIN: "kotlin",
         JAVASCRIPT: "javascript"   
}
const myEnum = MyEnum.JAVASCRIPT
console.log(myEnum)