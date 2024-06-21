import { Function_Items } from "@/components/Types/Function/function";



export const FUNCTION_ITEMS: Function_Items = {
  objectKey: ['key', 'text', 'returnText'],
  initInputObj: {key: '', text: '', returnText: ''},
  initErrorObj: {key: false, text: false, returnText: false},
  field: {
    key: {
      name: 'key',
      label: 'Key',
      type: 'text',
      placeholder: '...',
      readonly: false,
      typeInput: 'input'
    },
    text: {
      name: 'text',
      label: 'Text',
      type: 'text',
      placeholder: 'Your text',
      readonly: false,
      typeInput: 'textarea',
    },
    returnText: {
      name: 'returnText',
      label: 'Encrypted/Decrypted text',
      type: 'text',
      placeholder: 'aes-256-cbc',
      readonly: true,
      typeInput: 'textarea'
    }
  }
}