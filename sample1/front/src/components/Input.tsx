import { forwardRef, Ref } from 'react'

type TProps = {
  label: string
  type?: 'text' | 'password'
}

const Input = forwardRef((props: TProps, ref: Ref<HTMLInputElement>) => {
  const { label, type = 'text', ...rest } = props

  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type={type} ref={ref} {...rest} />
    </div>
  )
})

export default Input
