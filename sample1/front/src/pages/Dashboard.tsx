import { Form } from 'react-router-dom'

export default function DashboardPage() {
  return (
    <>
      <nav>
        <Form method="POST" action="/logout">
          <button>Logout</button>
        </Form>
      </nav>
      <h1>Dashboard</h1>
    </>
  )
}
