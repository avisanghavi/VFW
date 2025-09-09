'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container max-w-md text-center">
        <div className="space-y-8">
          {/* 404 Display */}
          <div className="space-y-4">
            <h1 className="text-8xl font-bold text-gradient">404</h1>
            <h2 className="text-2xl font-bold text-foreground">Page Not Found</h2>
            <p className="text-muted-foreground">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="gradient" size="lg">
              <Link href="/">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </div>

          {/* Help Text */}
          <div className="text-sm text-muted-foreground">
            <p>
              Need help? <Link href="mailto:support@videoforce.ai" className="text-brand-purple hover:underline">Contact support</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
