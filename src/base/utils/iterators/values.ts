export const values = <T, K extends keyof T>(value: object) => {
  return Object.values(value) as T[K][]
}
