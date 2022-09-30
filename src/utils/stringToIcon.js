import { HeartIcon } from '@heroicons/react/24/outline'

const stringToIconDB = {
  HeartIcon,
}

export const stringToIcon = (iconAsString = '') => {
  if (iconAsString == '') return null
  if (!Object.keys(stringToIconDB).includes(iconAsString)) return null
  return stringToIconDB[iconAsString]
}
