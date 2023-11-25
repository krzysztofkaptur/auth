import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import Input from '../components/Input'

import { registerService } from '../services/auth'

export default function LoginPage() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const { mutate: registerMut } = useMutation({
    mutationFn: registerService,
    onSuccess: () => {
      navigate('/login')
    }
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
