function SkeletonBox({ className }: { className: string }) {
  return <div className={`animate-pulse rounded-[20px] bg-white/10 ${className}`} />;
}

export function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <div className="grid min-h-screen lg:grid-cols-[18rem_1fr]">
        <aside className="hidden border-r border-white/10 bg-slate-950/65 p-4 backdrop-blur-xl lg:block">
          <SkeletonBox className="mb-5 h-8 w-28" />
          <div className="space-y-3">
            {[...Array(6)].map((_, idx) => (
              <SkeletonBox key={idx} className="h-10 w-full" />
            ))}
          </div>
        </aside>

        <div>
          <div className="sticky top-0 border-b border-white/10 bg-slate-950/75 p-4 backdrop-blur-xl">
            <SkeletonBox className="h-11 w-full max-w-xl" />
          </div>

          <main className="space-y-6 p-4 sm:p-6 lg:p-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[...Array(4)].map((_, idx) => (
                <SkeletonBox key={idx} className="h-32" />
              ))}
            </div>
            <SkeletonBox className="h-56" />
            <div className="grid gap-6 xl:grid-cols-2">
              <SkeletonBox className="h-72" />
              <SkeletonBox className="h-72" />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
