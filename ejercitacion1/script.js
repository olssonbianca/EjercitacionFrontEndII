// Realizar un script que permita sumar un array de números consecutivamente, de forma
// que se sume el primer número con el segundo y lo imprima por consola. Luego, tenemos
// que tomar este resultado y sumarle el tercer numero, y asi hasta terminar de recorrer el
// array:
const array = [1,2,3,4,5,6,7,8,9,1,2,3,45,6,7,5,43]


    let suma = 0;
        for (let i = 0; i < array.length; i++) {
        suma += array[i]
        console.log(suma);
        }