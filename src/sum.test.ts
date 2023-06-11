import { sumOptimizedDevelopment, sumOptimizedResources } from './sumOptimization'

//true
test('sumOptimizedDevelopment tiene que devolver true si existen dos numeros, dentro del array, que igualen la suma requerida', () => {
  const nums = [2, 4, 6, 8];
  const requiredSum = 10;
  const result = sumOptimizedDevelopment(nums, requiredSum);
  expect(result).toBe(true);
});

test('sumOptimizedResources tiene que devolver true si existen dos numeros, dentro del array, que igualen la suma requerida', () => {
  const nums = [2, 4, 6, 8];
  const requiredSum = 10;
  const result = sumOptimizedResources(nums, requiredSum);
  expect(result).toBe(true);
});

//false

test('sumOptimizedDevelopment tiene que devolver false si no existen dos numeros, dentro del array, que igualen la suma requerida', () => {
  const nums = [2, 3, 5, 6];
  const requiredSum = 10;
  const result = sumOptimizedDevelopment(nums, requiredSum);
  expect(result).toBe(false);
});

test('sumOptimizedResources tiene que devolver false si no existen dos numeros, dentro del array, que igualen la suma requerida', () => {
  const nums = [2, 3, 5, 6];
  const requiredSum = 10;
  const result = sumOptimizedResources(nums, requiredSum);
  expect(result).toBe(false);
});