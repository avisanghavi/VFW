import type { Metadata } from 'next'
import SignInClient from './SignInClient'

export const metadata: Metadata = {
  title: 'Sign In - VideoForce.ai',
  description: 'Choose your AI agent and sign in to VideoForce.ai platform.',
  openGraph: {
    title: 'Sign In - VideoForce.ai',
    description: 'Choose your AI agent and sign in to VideoForce.ai platform.',
    url: 'https://videoforce.ai/sign-in',
    type: 'website',
  },
}

export default function SignInPage() {
  return <SignInClient />
}
