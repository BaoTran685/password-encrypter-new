'use server'
import crypto from 'crypto'

import base91 from 'node-base91'

export const generatePassword = async ({ length }: { length: number }) => {
  try {
    // const byteLength = Math.ceil(length * (91 / 128));
    const byteLength = length

    const randomBytes = await new Promise((resolve, reject) => {
      crypto.randomBytes(byteLength, (err, buf) => {
        if (err) {
          reject(err)
        } else {
          resolve(buf)
        }
      })
    })
    const base91String = base91.encode(randomBytes)
    const returnString = base91String.slice(0, length)
    return { message: 'success', content: { password: returnString }, ok: true }
  } catch (e) {
    console.log('Error in generatePassword', e)
  }
  return { message: 'fail', content: { password: '' }, ok: false }
}
