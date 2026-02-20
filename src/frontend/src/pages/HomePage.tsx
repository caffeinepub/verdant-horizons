import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Waves, MapPin, Info, Mail, TrendingUp, AlertTriangle, Recycle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ocean-500 via-ocean-600 to-forest-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/generated/hero-ocean-plastic.dim_1920x800.png"
            alt="Ocean plastic pollution"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative mx-auto px-4 py-20 md:px-6 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Protecting Our Oceans, One Action at a Time
            </h1>
            <p className="mb-8 text-lg text-ocean-50 md:text-xl">
              Join Verdant Horizons in the fight against plastic pollution. Together, we can make a
              difference for our planet and future generations.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-white text-ocean-700 hover:bg-ocean-50">
                <Link to="/map">
                  <MapPin className="mr-2 h-5 w-5" />
                  Explore Interactive Map
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-forest-600 text-white hover:bg-forest-700"
              >
                <Link to="/about">
                  <Info className="mr-2 h-5 w-5" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16 dark:bg-ocean-950 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-ocean-900 dark:text-ocean-50 md:text-4xl">
              The Plastic Crisis in Numbers
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-ocean-700 dark:text-ocean-300">
              Understanding the scale of plastic pollution is the first step toward meaningful
              change.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-ocean-200 bg-gradient-to-br from-ocean-50 to-white dark:border-ocean-800 dark:from-ocean-900 dark:to-ocean-950">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-ocean-100 dark:bg-ocean-800">
                  <TrendingUp className="h-6 w-6 text-ocean-600 dark:text-ocean-400" />
                </div>
                <CardTitle className="text-ocean-900 dark:text-ocean-50">
                  8 Million Tons
                </CardTitle>
                <CardDescription className="text-ocean-700 dark:text-ocean-300">
                  Plastic enters our oceans every year
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-ocean-200 bg-gradient-to-br from-forest-50 to-white dark:border-ocean-800 dark:from-forest-900 dark:to-ocean-950">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-forest-100 dark:bg-forest-800">
                  <AlertTriangle className="h-6 w-6 text-forest-600 dark:text-forest-400" />
                </div>
                <CardTitle className="text-ocean-900 dark:text-ocean-50">
                  100,000+ Animals
                </CardTitle>
                <CardDescription className="text-ocean-700 dark:text-ocean-300">
                  Marine animals die annually from plastic
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-ocean-200 bg-gradient-to-br from-ocean-50 to-white dark:border-ocean-800 dark:from-ocean-900 dark:to-ocean-950">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-ocean-100 dark:bg-ocean-800">
                  <Recycle className="h-6 w-6 text-ocean-600 dark:text-ocean-400" />
                </div>
                <CardTitle className="text-ocean-900 dark:text-ocean-50">Only 9%</CardTitle>
                <CardDescription className="text-ocean-700 dark:text-ocean-300">
                  Of all plastic ever produced has been recycled
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12">
            <img
              src="/assets/generated/plastic-stats-infographic.dim_800x600.png"
              alt="Plastic pollution statistics"
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gradient-to-br from-ocean-50 to-forest-50 py-16 dark:from-ocean-900 dark:to-forest-900 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-ocean-900 dark:text-ocean-50 md:text-4xl">
                The Impact on Marine Life
              </h2>
              <p className="mb-4 text-lg text-ocean-700 dark:text-ocean-300">
                Plastic pollution devastates marine ecosystems, affecting everything from tiny
                plankton to massive whales. Sea turtles mistake plastic bags for jellyfish, seabirds
                feed plastic to their chicks, and microplastics enter the food chain at every level.
              </p>
              <p className="mb-6 text-lg text-ocean-700 dark:text-ocean-300">
                The consequences extend beyond wildlife. Plastic pollution threatens human health,
                damages coastal economies, and disrupts the delicate balance of ocean ecosystems
                that regulate our climate and produce much of the oxygen we breathe.
              </p>
              <Button asChild size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                <Link to="/about">
                  <Waves className="mr-2 h-5 w-5" />
                  Discover Our Mission
                </Link>
              </Button>
            </div>
            <div>
              <img
                src="/assets/generated/marine-life-impact.dim_1200x800.png"
                alt="Marine life affected by plastic pollution"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-ocean-600 to-forest-600 py-16 text-white md:py-20">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Make a Difference?</h2>
          <p className="mb-8 text-lg text-ocean-50">
            Explore our interactive map to see pollution hotspots or get in touch to learn how you
            can help.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-white text-ocean-700 hover:bg-ocean-50">
              <Link to="/map">
                <MapPin className="mr-2 h-5 w-5" />
                View Pollution Map
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
