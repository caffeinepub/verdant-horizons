import { Link } from '@tanstack/react-router';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
      <img
        src="/assets/logo.png"
        alt="Verdant Horizons"
        className="h-10 w-auto md:h-12"
      />
    </Link>
  );
}
