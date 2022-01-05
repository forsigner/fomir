import type { FormNode } from './interfaces/form'
import type { FieldNode } from './interfaces/field'
export type ForceUpdate = any

export interface FieldUpdaters {
  [key: string]: ForceUpdate[]
}

export type Errors<T = any> = {
  [K in keyof T]?: T[K] extends any[]
    ? T[K][number] extends object
      ? Errors<T[K][number]>[] | string | string[]
      : string | string[]
    : T[K] extends object
    ? Errors<T[K]>
    : string
}

export interface OnValueChangeOptions<T> extends FieldNode<T> {
  setFieldState: <T = any>(name: string, fieldState: Partial<FieldNode<T>>) => void
}

export interface OnFieldInitOptions<T> extends FieldNode<T> {
  setFieldState: <T = any>(name: string, fieldState: Partial<FieldNode<T>>) => void
}

export interface FieldValidateOptions {
  fieldState: FieldNode
  values: any
}

export type ValidationRuleFn<T = any, K = any> = (
  value: T,
  validateValue: K,
  options: FieldValidateOptions,
) => any | Promise<any>

export interface ValidatorOptions<T = any> {
  validationSchema: any
  values: T
}

export type ValidateFn<T = any> = (options: ValidatorOptions<T>) => Promise<Errors<T>>

export interface FomirPlugin {
  Fields?: {
    [key: string]: any
  }

  Form?: any

  validate?: ValidateFn

  validators?: {
    [key: string]: ValidationRuleFn
  }
}

export interface FormSchema extends Partial<FormNode> {
  children: any[]
}
