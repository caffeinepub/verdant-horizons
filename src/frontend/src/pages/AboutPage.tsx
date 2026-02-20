import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Target, Users, Lightbulb, Heart, Waves, Recycle, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-ocean-600 to-forest-600 py-12 text-white md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              About Verdant Horizons
            </h1>
            <p className="text-lg text-ocean-50">
              Empowering communities to take action against plastic pollution through education,
              awareness, and collective action.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-12 dark:bg-ocean-950 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-ocean-900 dark:text-ocean-50 md:text-4xl">
                Our Mission
              </h2>
              <p className="text-lg text-ocean-700 dark:text-ocean-300">
                Verdant Horizons is dedicated to raising awareness about the devastating impact of
                plastic pollution on our oceans and marine ecosystems. We believe that through
                education, community engagement, and actionable insights, we can inspire meaningful
                change and protect our planet for future generations.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-ocean-200 bg-gradient-to-br from-ocean-50 to-white dark:border-ocean-800 dark:from-ocean-900 dark:to-ocean-950">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-ocean-100 dark:bg-ocean-800">
                    <Target className="h-6 w-6 text-ocean-600 dark:text-ocean-400" />
                  </div>
                  <CardTitle className="text-ocean-900 dark:text-ocean-50">Educate</CardTitle>
                  <CardDescription className="text-ocean-700 dark:text-ocean-300">
                    Provide accessible information about plastic pollution and its environmental
                    impact.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-ocean-200 bg-gradient-to-br from-forest-50 to-white dark:border-ocean-800 dark:from-forest-900 dark:to-ocean-950">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-forest-100 dark:bg-forest-800">
                    <Users className="h-6 w-6 text-forest-600 dark:text-forest-400" />
                  </div>
                  <CardTitle className="text-ocean-900 dark:text-ocean-50">Engage</CardTitle>
                  <CardDescription className="text-ocean-700 dark:text-ocean-300">
                    Build a community of environmentally conscious individuals committed to change.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-ocean-200 bg-gradient-to-br from-ocean-50 to-white dark:border-ocean-800 dark:from-ocean-900 dark:to-ocean-950">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-ocean-100 dark:bg-ocean-800">
                    <Lightbulb className="h-6 w-6 text-ocean-600 dark:text-ocean-400" />
                  </div>
                  <CardTitle className="text-ocean-900 dark:text-ocean-50">Inspire</CardTitle>
                  <CardDescription className="text-ocean-700 dark:text-ocean-300">
                    Motivate individuals and organizations to take concrete action against
                    pollution.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gradient-to-br from-ocean-50 to-forest-50 py-12 dark:from-ocean-900 dark:to-forest-900 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-ocean-900 dark:text-ocean-50 md:text-4xl">
                  Understanding the Crisis
                </h2>
                <p className="mb-4 text-ocean-700 dark:text-ocean-300">
                  Every year, approximately 8 million tons of plastic waste enters our oceans. This
                  pollution doesn't just disappear—it breaks down into microplastics that
                  contaminate the entire marine food chain, from plankton to whales, and eventually
                  reaches our own dinner plates.
                </p>
                <p className="text-ocean-700 dark:text-ocean-300">
                  The impact extends far beyond marine life. Coastal communities face economic
                  losses, human health is threatened by microplastic consumption, and entire
                  ecosystems are disrupted. The time to act is now.
                </p>
              </div>
              <div>
                <img
                  src="/assets/generated/marine-life-impact.dim_1200x800.png"
                  alt="Marine life impact"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="mb-12">
              <img
                src="/assets/generated/plastic-stats-infographic.dim_800x600.png"
                alt="Plastic pollution statistics"
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 dark:bg-ocean-950 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-ocean-900 dark:text-ocean-50 md:text-4xl">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-ocean-200 dark:border-ocean-800">
                <AccordionTrigger className="text-ocean-900 hover:text-ocean-700 dark:text-ocean-50 dark:hover:text-ocean-300">
                  What is plastic pollution?
                </AccordionTrigger>
                <AccordionContent className="text-ocean-700 dark:text-ocean-300">
                  Plastic pollution refers to the accumulation of plastic products in the
                  environment that adversely affects wildlife, wildlife habitat, and humans. It
                  includes everything from large debris to microscopic particles that contaminate
                  our oceans, soil, and air.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-ocean-200 dark:border-ocean-800">
                <AccordionTrigger className="text-ocean-900 hover:text-ocean-700 dark:text-ocean-50 dark:hover:text-ocean-300">
                  How does plastic affect marine life?
                </AccordionTrigger>
                <AccordionContent className="text-ocean-700 dark:text-ocean-300">
                  Marine animals often mistake plastic for food, leading to ingestion that can cause
                  starvation, internal injuries, and death. Animals can also become entangled in
                  plastic debris. Microplastics enter the food chain at every level, affecting
                  ecosystem health and biodiversity.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-ocean-200 dark:border-ocean-800">
                <AccordionTrigger className="text-ocean-900 hover:text-ocean-700 dark:text-ocean-50 dark:hover:text-ocean-300">
                  What can I do to help?
                </AccordionTrigger>
                <AccordionContent className="text-ocean-700 dark:text-ocean-300">
                  You can make a difference by reducing single-use plastics, properly recycling,
                  participating in beach cleanups, supporting plastic-free alternatives, and
                  spreading awareness. Every small action contributes to a larger solution.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-ocean-200 dark:border-ocean-800">
                <AccordionTrigger className="text-ocean-900 hover:text-ocean-700 dark:text-ocean-50 dark:hover:text-ocean-300">
                  Where does ocean plastic come from?
                </AccordionTrigger>
                <AccordionContent className="text-ocean-700 dark:text-ocean-300">
                  Ocean plastic comes from various sources including improper waste disposal,
                  littering, industrial activities, and inadequate waste management systems. Rivers
                  carry plastic waste from inland areas to the ocean, and fishing gear also
                  contributes significantly to marine plastic pollution.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-ocean-200 dark:border-ocean-800">
                <AccordionTrigger className="text-ocean-900 hover:text-ocean-700 dark:text-ocean-50 dark:hover:text-ocean-300">
                  Is plastic pollution reversible?
                </AccordionTrigger>
                <AccordionContent className="text-ocean-700 dark:text-ocean-300">
                  While we cannot completely reverse existing pollution, we can prevent further
                  damage and work to clean up existing plastic. Through collective action, policy
                  changes, technological innovation, and individual responsibility, we can
                  significantly reduce plastic pollution and protect our oceans for future
                  generations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-br from-ocean-600 to-forest-600 py-12 text-white md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Our Core Values</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-ocean-400 bg-white/10 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-white">Compassion</CardTitle>
                  <CardDescription className="text-ocean-100">
                    We care deeply about our planet and all its inhabitants, from the smallest
                    plankton to the largest whales.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-ocean-400 bg-white/10 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <Waves className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-white">Action</CardTitle>
                  <CardDescription className="text-ocean-100">
                    We believe in turning awareness into action through practical solutions and
                    community engagement.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-ocean-400 bg-white/10 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-white">Sustainability</CardTitle>
                  <CardDescription className="text-ocean-100">
                    We promote long-term solutions that protect our environment for future
                    generations.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-ocean-400 bg-white/10 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <Recycle className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-white">Innovation</CardTitle>
                  <CardDescription className="text-ocean-100">
                    We embrace creative approaches and new technologies to tackle plastic pollution
                    effectively.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
