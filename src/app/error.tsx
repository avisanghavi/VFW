'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container max-w-md text-center">
        <div className="space-y-8">
          {/* Error Icon */}
          <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-foreground">Something went wrong!</h1>
            <p className="text-muted-foreground">
              We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
            </p>
            {process.env.NODE_ENV === 'development' && (
              <details className="text-left">
                <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs bg-muted p-3 rounded overflow-auto">
                  {error.message}
                </pre>
              </details>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={reset} variant="gradient" size="lg">
              <RefreshCw className="w-4 h-4" />
              Try Again
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/'}>
              Go Home
            </Button>
          </div>

          {/* Help Text */}
          <div className="text-sm text-muted-foreground">
            <p>
              Need help? <a href="mailto:support@videoforce.ai" className="text-brand-purple hover:underline">Contact support</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
