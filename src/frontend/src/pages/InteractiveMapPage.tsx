import { useState } from 'react';
import PollutionMap from '../components/PollutionMap';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, TrendingUp, AlertCircle } from 'lucide-react';

export default function InteractiveMapPage() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regionData: Record<
    string,
    { name: string; pollution: string; level: 'high' | 'medium' | 'low'; description: string }
  > = {
    pacific: {
      name: 'Great Pacific Garbage Patch',
      pollution: '1.6 million km²',
      level: 'high',
      description:
        'The largest accumulation of ocean plastic in the world, located between Hawaii and California.',
    },
    atlantic: {
      name: 'North Atlantic Gyre',
      pollution: '200,000 pieces/km²',
      level: 'high',
      description:
        'A major accumulation zone in the Atlantic Ocean with high concentrations of microplastics.',
    },
    indian: {
      name: 'Indian Ocean Patch',
      pollution: '600,000 km²',
      level: 'medium',
      description:
        'Growing plastic accumulation zone in the Indian Ocean, affecting marine biodiversity.',
    },
    mediterranean: {
      name: 'Mediterranean Sea',
      pollution: '1.25 million fragments/km²',
      level: 'high',
      description:
        'One of the most polluted seas globally, with plastic affecting coastal communities and wildlife.',
    },
    caribbean: {
      name: 'Caribbean Sea',
      pollution: '150,000 pieces/km²',
      level: 'medium',
      description:
        'Plastic pollution threatens coral reefs and tourism-dependent coastal economies.',
    },
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-ocean-600 to-forest-600 py-12 text-white md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Interactive Pollution Map
            </h1>
            <p className="text-lg text-ocean-50">
              Explore global plastic pollution hotspots and discover the scale of the crisis
              affecting our oceans.
            </p>
          </div>
        </div>
      </section>

      {/* Map and Info Section */}
      <section className="bg-white py-12 dark:bg-ocean-950 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Map */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden border-ocean-200 dark:border-ocean-800">
                <CardHeader className="bg-ocean-50 dark:bg-ocean-900">
                  <CardTitle className="flex items-center gap-2 text-ocean-900 dark:text-ocean-50">
                    <MapPin className="h-5 w-5" />
                    Global Pollution Hotspots
                  </CardTitle>
                  <CardDescription className="text-ocean-700 dark:text-ocean-300">
                    Click on regions to view detailed pollution data
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <PollutionMap onRegionSelect={setSelectedRegion} />
                </CardContent>
              </Card>
            </div>

            {/* Info Panel */}
            <div className="space-y-6">
              <Card className="border-ocean-200 dark:border-ocean-800">
                <CardHeader>
                  <CardTitle className="text-ocean-900 dark:text-ocean-50">
                    Pollution Levels
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-red-500 hover:bg-red-600">High</Badge>
                    <span className="text-sm text-ocean-700 dark:text-ocean-300">
                      Critical pollution zones
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-amber-500 hover:bg-amber-600">Medium</Badge>
                    <span className="text-sm text-ocean-700 dark:text-ocean-300">
                      Significant pollution
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500 hover:bg-green-600">Low</Badge>
                    <span className="text-sm text-ocean-700 dark:text-ocean-300">
                      Minimal pollution
                    </span>
                  </div>
                </CardContent>
              </Card>

              {selectedRegion && regionData[selectedRegion] && (
                <Card className="border-ocean-200 bg-gradient-to-br from-ocean-50 to-white dark:border-ocean-800 dark:from-ocean-900 dark:to-ocean-950">
                  <CardHeader>
                    <div className="mb-2 flex items-start justify-between">
                      <CardTitle className="text-ocean-900 dark:text-ocean-50">
                        {regionData[selectedRegion].name}
                      </CardTitle>
                      <Badge
                        className={
                          regionData[selectedRegion].level === 'high'
                            ? 'bg-red-500 hover:bg-red-600'
                            : regionData[selectedRegion].level === 'medium'
                              ? 'bg-amber-500 hover:bg-amber-600'
                              : 'bg-green-500 hover:bg-green-600'
                        }
                      >
                        {regionData[selectedRegion].level}
                      </Badge>
                    </div>
                    <CardDescription className="text-ocean-700 dark:text-ocean-300">
                      {regionData[selectedRegion].description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-ocean-900 dark:text-ocean-50">
                      <TrendingUp className="h-5 w-5 text-ocean-600 dark:text-ocean-400" />
                      <span className="font-semibold">
                        {regionData[selectedRegion].pollution}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="border-ocean-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-50">
                    <AlertCircle className="h-5 w-5" />
                    Did You Know?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    By 2050, there could be more plastic than fish in the ocean by weight if current
                    trends continue.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
