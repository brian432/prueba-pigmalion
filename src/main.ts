import { sumOptimizedDevelopment, sumOptimizedResources } from "./sumOptimization"

// Ejemplo de uso
let nums1 = [1, 4, 3, 9]
let nums2 = [1, 2, 4, 4]
let requiredSum = 8

//Pruebas con el primer array
console.time('Optimización de desarrollo') //Temporizador para chequear el tiempo de ejecución
let result1 = sumOptimizedDevelopment(nums1, requiredSum)
console.timeEnd('Optimización de desarrollo') ////Detiene el temporizador

console.time('Optimización de recursos')
let result2 = sumOptimizedResources(nums1, requiredSum)
console.timeEnd('Optimización de recursos')

console.log(result1, result2) //Mostramos en consola los resultados

//Pruebas con el segundo array
console.time('Optimización de desarrollo')
let result3 = sumOptimizedDevelopment(nums2, requiredSum)
console.timeEnd('Optimización de desarrollo')

console.time('Optimización de recursos')
let result4 = sumOptimizedResources(nums2, requiredSum)
console.timeEnd('Optimización de recursos')

console.log(result3, result4) 