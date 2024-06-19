import { Generate_Items } from "@/components/Types/Generate/generate";



export const GENERATE_ITEMS: Generate_Items = {
  objectKey: ['number', 'password'],
  initInputObj: { number: '', password: '' },
  initErrorObj: { number: false, password: false },
  field: {
    number: {
      name: 'number',
      label: 'Number',
      type: 'number',
      placeholder: '...',
      readonly: false
    },
    password: {
      name: 'password',
      label: 'Password',
      type: 'text',
      placeholder: 'Generated Password',
      readonly: true,
    }
  }
}