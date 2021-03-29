export interface countArr {
  (v: Array<number>): number
}

export const countArr: countArr = (arr) => {
  return arr.reduce((a, b) => a + b)
}