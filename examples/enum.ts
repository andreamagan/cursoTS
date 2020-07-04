export enum LookingForEnum {
  Enero = 'Ene',
  Febrero = 'Feb',
  Marzo = 'Mar',
  Abril = 'Abr'
}

const keys: string[]= Object.keys(LookingForEnum);
console.log(keys);

const index: number = Object.keys(LookingForEnum).indexOf('Febrero'); //1
console.log(index);

const values: string[] = Object.values(LookingForEnum);

console.log(values[index+2]); // Abr

const entries: [string, LookingForEnum][] = Object.entries(LookingForEnum);
console.log(entries);