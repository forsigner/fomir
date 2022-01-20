import { FieldNode } from './field'
import { Node } from './node'
import { Errors } from './types'


export interface ArrayFieldNode {
  type: 'ArrayField'
  name: string
  children: (Node | ArrayFieldItemNode)[]
}

export interface ArrayFieldItemNode {
  type: 'ArrayFieldItem'
  children: Node[]
}

type Status = 'editable' | 'disabled' | 'preview' | ({} & string)

export interface FormNode<T = any> {
  submitting?: boolean
  submitted?: boolean
  submitCount?: number

  validating?: boolean
  dirty?: boolean
  valid?: boolean
  status?: Status

  labelWidth?: number | string

  // children?: (Node | FieldNode | ArrayFieldNode | ArrayFieldItemNode)[]
  children: Node[]

  validationMode?: 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched'

  watch?: {
    [key: string]: <T extends FieldNode = any>(nextData: T, prevData: T) => any
  }

  /**
   * callback when form submit
   * @param values current values
   */
  onSubmit?(values: T): Promise<any> | any

  /**
   * callback when form error
   * @param errors current errors
   */
  onError?(errors: Errors<T>): Promise<any> | any

  /**
   * callback when reset form
   */
  onReset?(): Promise<any> | any

  [key: string]: any
}
