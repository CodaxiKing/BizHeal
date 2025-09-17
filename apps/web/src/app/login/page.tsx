import { redirect } from 'next/navigation'

export default function Login() {
  // Redirect to the SaaS app login page
  redirect('https://app.bizheal.com/login')
}