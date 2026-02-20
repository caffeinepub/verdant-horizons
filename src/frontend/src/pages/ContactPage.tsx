import ContactForm from '../components/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, HelpCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-ocean-600 to-forest-600 py-12 text-white md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Get in Touch</h1>
            <p className="text-lg text-ocean-50">
              Have questions about plastic pollution or want to get involved? We'd love to hear from
              you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-12 dark:bg-ocean-950 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
            {/* Info Cards */}
            <div className="space-y-6">
              <Card className="border-ocean-200 bg-gradient-to-br from-ocean-50 to-white dark:border-ocean-800 dark:from-ocean-900 dark:to-ocean-950">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-ocean-100 dark:bg-ocean-800">
                    <Mail className="h-5 w-5 text-ocean-600 dark:text-ocean-400" />
                  </div>
                  <CardTitle className="text-ocean-900 dark:text-ocean-50">
                    General Inquiries
                  </CardTitle>
                  <CardDescription className="text-ocean-700 dark:text-ocean-300">
                    Questions about our mission, programs, or how to get involved with Verdant
                    Horizons.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-ocean-200 bg-gradient-to-br from-forest-50 to-white dark:border-ocean-800 dark:from-forest-900 dark:to-ocean-950">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-forest-100 dark:bg-forest-800">
                    <MessageSquare className="h-5 w-5 text-forest-600 dark:text-forest-400" />
                  </div>
                  <CardTitle className="text-ocean-900 dark:text-ocean-50">Feedback</CardTitle>
                  <CardDescription className="text-ocean-700 dark:text-ocean-300">
                    Share your thoughts on our website, content, or suggestions for improvement.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-ocean-200 bg-gradient-to-br from-ocean-50 to-white dark:border-ocean-800 dark:from-ocean-900 dark:to-ocean-950">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-ocean-100 dark:bg-ocean-800">
                    <HelpCircle className="h-5 w-5 text-ocean-600 dark:text-ocean-400" />
                  </div>
                  <CardTitle className="text-ocean-900 dark:text-ocean-50">
                    Information Requests
                  </CardTitle>
                  <CardDescription className="text-ocean-700 dark:text-ocean-300">
                    Request specific information about plastic pollution data or educational
                    resources.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-ocean-200 dark:border-ocean-800">
                <CardHeader>
                  <CardTitle className="text-ocean-900 dark:text-ocean-50">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-ocean-700 dark:text-ocean-300">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
