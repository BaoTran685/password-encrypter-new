

export type Generate_ObjectKey = 'number' | 'password'
export type Generate_InputObj = {
  number: string,
  password: string,
}
export type Generate_ErrorObj = {
  number: boolean,
  password: boolean,
}

export type Generate_LabelObj = {
  name: string,
  label: string,
  type: string,
  placeholder: string,
  readonly: boolean,
}

export type Generate_Items = {
  objectKey: Generate_ObjectKey[],
  initInputObj: Generate_InputObj,
  initErrorObj: Generate_ErrorObj,
  field: {
    number: Generate_LabelObj,
    password: Generate_LabelObj,
  }
}