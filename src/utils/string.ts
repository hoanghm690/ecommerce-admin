interface FullName {
  first_name?: string
  last_name?: string
  display_name?: string
}

export const getFullName = <T extends FullName>(object: T | null) => {
  if (!object) return 'No Name'

  const { first_name, display_name, last_name } = object
  if (display_name) {
    return display_name
  }

  return [first_name, last_name].filter(Boolean).join(' ')
}

export const getShortName = <T extends FullName>(object: T | null) => {
  if (!object) return 'U'

  const fullName = getFullName(object)
  const [first, ...rest] = fullName.split(' ')
  const last = rest.pop()

  const f = first[0]
  const l = last ? last[0] : ''

  return [f, l].filter(Boolean).join(' ')
}
