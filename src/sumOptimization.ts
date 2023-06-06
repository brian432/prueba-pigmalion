//Optimización de desarrollo
export function sumOptimizedDevelopment(nums: number[], requiredSum: number): boolean {
  for (let i = 0; i < nums.length; i++) { //Recorremos el array
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === requiredSum) { //Si se encuentra una suma que coincide con requiredSum retorna 'true'
        return true
      }
    }
  }
  return false //Si no se encuentra una coincidencia con requiredSum, al salir del bucle, retorna 'false'
}


//Optimización de recursos
export function sumOptimizedResources(nums: number[], requiredSum: number): boolean {
  let set = new Set()

  for (let i = 0; i < nums.length; i++) { //recorremos el array
    let result = requiredSum - nums[i] // Calcula la diferencia entre requiredSum y el elemento actual
    if (set.has(result)) { //Si la diferencia existe en el conjunto retorna 'true'
      return true
    }
    set.add(nums[i]) //Se agrega el elemento actual al conjunto
  }
  return false //Si la diferencia no esta dentro de set, retorna false
}

