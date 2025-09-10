import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <div className="hidden md:flex space-x-8">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Skeleton className="h-12 w-3/4 mx-auto" />
            <Skeleton className="h-12 w-2/3 mx-auto" />
          </div>
          <Skeleton className="h-6 w-1/2 mx-auto" />
          <div className="flex justify-center gap-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>

      {/* Content Sections Skeleton */}
      <div className="space-y-16">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="container mx-auto px-4">
            <div className="text-center space-y-8">
              <Skeleton className="h-8 w-1/3 mx-auto" />
              <Skeleton className="h-4 w-1/2 mx-auto" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="space-y-4">
                    <Skeleton className="h-48 w-full" />
                    <Skeleton className="h-6 w-3/4 mx-auto" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Skeleton */}
      <div className="mt-16 border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-4 w-1/4 mx-auto" />
        </div>
      </div>
    </div>
  )
}
