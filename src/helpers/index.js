export const validateInput = (value) => {
  return value && /^\d+$/.test(value)
}
