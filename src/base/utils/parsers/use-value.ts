export function useValue<T, K extends keyof T>(data: T, key: K) {
  const text = new Text(String(data[key]))
  let value = data

  const set = (newValue: T) => {
    value = newValue
    text.textContent = String(value[key])
  }

  return {text, value, set}
}
