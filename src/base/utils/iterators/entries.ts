export const entries = <T extends object, K extends keyof T>(value: T) => {
  return Object.entries(value) as [K, T[K]][]
}
