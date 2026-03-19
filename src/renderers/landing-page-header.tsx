interface Breadcrumb {
  label: string;
  url?: string;
}

interface PageHeaderConfig {
  title?: string;
  breadcrumbs?: Breadcrumb[];
}

export function LandingPageHeader({ config }: { config: Record<string, unknown> }) {
  const c = config as PageHeaderConfig;
  const breadcrumbs = c.breadcrumbs ?? [];

  if (!c.title && breadcrumbs.length === 0) return null;

  return (
    <header className="border-b border-zinc-200 bg-zinc-50 px-4 py-6 dark:border-surface-border dark:bg-surface-raised/50">
      <div className="mx-auto max-w-5xl">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-2">
            <ol className="flex flex-wrap items-center gap-1 text-sm">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1">
                  {i > 0 && <span className="text-zinc-300 dark:text-zinc-600" aria-hidden="true">/</span>}
                  {crumb.url ? (
                    <a
                      href={crumb.url}
                      className="text-zinc-500 transition-colors hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-zinc-700 dark:text-zinc-300">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {c.title && (
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">{c.title}</h1>
        )}
      </div>
    </header>
  );
}
