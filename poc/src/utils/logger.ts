import { ClientResponse } from '../types/types'

const { log } = console
export default function logger(res: ClientResponse): void {
  log(
    ':::::::::::::::::::::: Start of log ::::::::::::::::::::::::::\n\r',
    res,
    '\n:::::::::::::::::::::: End of log ::::::::::::::::::::::::::::\n'
  )
}
