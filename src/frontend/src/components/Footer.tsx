import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'verdant-horizons'
  );

  return (
    <footer className="border-t border-ocean-200 bg-ocean-50 dark:border-ocean-800 dark:bg-ocean-950">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center text-sm text-ocean-700 dark:text-ocean-300 md:text-left">
            <p className="font-medium">Verdant Horizons</p>
            <p className="text-ocean-600 dark:text-ocean-400">
              Raising awareness about plastic pollution
            </p>
          </div>
          <div className="text-center text-sm text-ocean-600 dark:text-ocean-400">
            <p>© {currentYear} Verdant Horizons. All rights reserved.</p>
            <p className="mt-1 flex items-center justify-center gap-1">
              Built with <Heart className="h-3 w-3 fill-rose-500 text-rose-500" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ocean-700 hover:text-ocean-900 dark:text-ocean-300 dark:hover:text-ocean-100"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
