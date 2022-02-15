import Ncrypt from 'ncrypt-js'
const { encrypt, decrypt } = new Ncrypt(process.env.CTP_CLIENT_SECRET)

export { encrypt, decrypt }
