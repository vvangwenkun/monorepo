import dayjs from 'dayjs'

export function isNil(value: any) {
  return value === 'undefined' || value === null || Number.isNaN(value)
}

export function getDateString(timestamp: number, template?: string) {
  return dayjs(timestamp).format(template || 'YYYY-MM-DD HH:mm:ss')
}
