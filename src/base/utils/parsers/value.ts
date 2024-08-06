export type PropValue = string | number | boolean | Date | FormDataEntryValue

const isString = (value: PropValue) => {
  return typeof value === 'string'
}

const isNumber = (value: PropValue) => {
  return !isNaN(+value)
}

const isBoolean = (value: PropValue) => {
  const possibilities = ['true', 'false', true, false]
  return possibilities.some((possibility) => possibility === value)
}

const isDate = (value: PropValue) => {
  return !isNaN(new Date(value.toString()).getTime())
}

export const value = <T>(value: PropValue) => {
  let parsed = value

  if (isBoolean(value)) {
    parsed = value === 'true'
    return parsed
  }

  if (isDate(value)) {
    parsed = new Date(value.toString())
    return parsed
  }

  if (isString(value)) {
    parsed = value.toString()
    return parsed
  }

  if (isNumber(value)) {
    parsed = +value.toString()
    return parsed
  }

  return parsed as T
}
