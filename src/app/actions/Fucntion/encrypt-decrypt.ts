'use server'
import crypto from 'crypto'

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

  let encrypted: string = cipher.update(text, 'utf-8', 'hex')
  encrypted += cipher.final('hex')
  return iv.toString('hex') + ':' + encrypted
}

const decrypt = ({ text, key }: { text: string; key: Buffer }) => {
  const parts: string[] = text.split(':')
  const iv: Buffer = Buffer.from(parts.shift() as string, 'hex')
  const cipherText: string = parts.join(':')

  const decipher: crypto.Cipher = crypto.createDecipheriv(
    'aes-256-cbc',
    key,
    iv
  )

  let decrypted: string = decipher.update(cipherText, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}
