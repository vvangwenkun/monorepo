import { getDateString } from '@monorepo/util'

export function showDate() {
  console.log('Current Date: ', getDateString(new Date().getTime()))
}
