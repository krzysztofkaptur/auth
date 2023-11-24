import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'

import Input from '../components/Input'

import { registerService } from '../services/auth'

export default function LoginPage() {
  const { register, handleSubmit } = useForm()

  const { mutate: registerMut } = useMutation({
    mutationFn: registerService
  })

  const onSubmit = handleSubmit(values => {
    registerMut(values)
  })

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <Input label="email" {...register('email')} />

        <Input type="password" label="password" {...register('password')} />

        <button>Register</button>
      </form>
    </div>
  )
}
