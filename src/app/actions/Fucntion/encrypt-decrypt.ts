'use server'
import crypto from 'crypto'

const base91 = require('node-base91')
export const EncryptDecrypt = async ({
  key,
  text,
  type
}: {
  key: string
  text: string
  type: 0 | 1
}) => {
  try {
    if (type === 0) {
      // encrypt
      const encryptText = encrypt({
        text: text,
        key: hash({ text: key })
      })
      return {
        errorObj: { key: false, text: false },
        message: 'success',
        content: { returnText: encryptText },
        ok: true
      }
    } else {
      // decrypt
      const decryptText = decrypt({
        text: text,
        key: hash({ text: key })
      })
      return {
        errorObj: { key: false, text: false },
        message: 'success',
        content: { returnText: decryptText },
        ok: true
      }
    }
  } catch (e) {
    console.log('Error in encrypt-decrypt', e)
  }
  return {
    errorObj: { key: true, text: true },
    message: 'invalid key or text',
    content: { returnText: '' },
    ok: false
  }
}

// hash takes in a string and create a 32 bytes = 256 bits buffer using the sha-256 algorithm
const hash = ({ text }: { text: string }): Buffer => {
  const hash = crypto.createHash('sha256')
  hash.update(text)
  const buffer: Buffer = hash.digest()
  return buffer
}

const encrypt = ({ text, key }: { text: string; key: Buffer }) => {
  const iv: Buffer = crypto.randomBytes(16)

  const cipher: crypto.Cipher = crypto.createCipheriv('aes-256-cbc', key, iv)

  let encrypted: string = cipher.update(text, 'utf-8', 'binary')
  encrypted += cipher.final('binary')

  const encryptedData = iv.toString('binary') + encrypted // convert iv to string and add it to the front
  return base91.encode(Buffer.from(encryptedData, 'binary')) // then use base91 to convert it to string
}

const decrypt = ({ text, key }: { text: string; key: Buffer }) => {
  const encryptedData = base91.decode(text);
  const iv: Buffer = encryptedData.slice(0, 16);
  const encrypted: string = encryptedData.slice(16)

  const decipher: crypto.Cipher = crypto.createDecipheriv(
    'aes-256-cbc',
    key,
    iv
  )

  let decrypted: string = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}
