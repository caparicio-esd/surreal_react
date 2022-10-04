import {
  HeartIcon,
  CloudArrowDownIcon,
  DocumentTextIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'

const stringToIconDB = {
  HeartIcon,
  CloudArrowDownIcon,
  DocumentTextIcon,
  ArrowRightIcon,
}

export const stringToIcon = (iconAsString = '') => {
  if (iconAsString == '') return null
  if (!Object.keys(stringToIconDB).includes(iconAsString)) return null
  return stringToIconDB[iconAsString]
}
