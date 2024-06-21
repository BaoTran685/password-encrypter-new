

export type Function_ObjectKey = 'key' | 'text' | 'returnText'
export type Function_InputObj = {
  key: string,
  text: string,
  returnText: string,
}
export type Function_ErrorObj = {
  key: boolean,
  text: boolean,
  returnText: boolean,
}

export type Function_LabelObj = {
  name: string,
  label: string,
  type: string,
  placeholder: string,
  readonly: boolean,
  typeInput: 'input' | 'textarea'
}

export type Function_Items = {
  objectKey: Function_ObjectKey[],
  initInputObj: Function_InputObj,
  initErrorObj: Function_ErrorObj,
  field: {
    key: Function_LabelObj,
    text: Function_LabelObj,
    returnText: Function_LabelObj,
  }
}