import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import Input from '../components/Input'

import { loginService } from '../services/auth'

export default function LoginPage() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const { mutate: loginMut } = useMutation({
    mutationFn: loginService,
    onSuccess: () => {
      navigate('/')
    }
  })

  const onSubmit = handleSubmit(values => {
    loginMut(values)
  })

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <Input label="email" {...register('email')} />

        <Input type="password" label="password" {...register('password')} />

        <button>Login</button>
      </form>
    </div>
  )
}
