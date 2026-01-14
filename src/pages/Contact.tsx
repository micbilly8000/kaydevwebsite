import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { PageHeader } from '@components/shared/PageHeader'
import { Container } from '@components/shared/Container'
import { AnimatedSection } from '@components/shared/AnimatedSection'
import { Button } from '@components/shared/Button'
import { Card } from '@components/shared/Card'
import { services } from '@data/services'
import { LuMail, LuPhone, LuMapPin, LuClock } from 'react-icons/lu'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company: string
  service: string
  message: string
}

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>()
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', data)
      setSubmitSuccess(true)
      reset()
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | KayDev Technology</title>
        <meta name="description" content="Get in touch with KayDev Technology for cybersecurity solutions and staffing services." />
      </Helmet>

      <PageHeader
        title="Contact Us"
        description="Get in touch with our security experts"
      />

      <section className="py-20 bg-dark-400">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <AnimatedSection>
              <h2 className="heading-3 mb-8">Get in Touch</h2>

              <div className="space-y-6">
                {[
                  {
                    icon: LuMail,
                    label: 'Email',
                    value: 'info@kaydev.com',
                  },
                  {
                    icon: LuPhone,
                    label: 'Phone',
                    value: '(682) 628-9545',
                  },
                  {
                    icon: LuMapPin,
                    label: 'Location',
                    value: 'Fort Worth, TX',
                  },
                  {
                    icon: LuClock,
                    label: 'Hours',
                    value: '24/7 Support',
                  },
                ].map((item, i) => (
                  <AnimatedSection key={i}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500">
                          <item.icon size={20} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{item.label}</h3>
                        <p className="text-neutral-400">{item.value}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Security Note */}
              <Card className="mt-8 bg-dark-300 border-l-4 border-l-cyber-500">
                <p className="text-neutral-400 text-sm">
                  <strong className="text-white">Secure & Confidential</strong>
                  <br />
                  Your information is encrypted and securely transmitted. We respond to all inquiries within 24 hours.
                </p>
              </Card>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="slide-right" className="lg:col-span-2">
              {submitSuccess && (
                <div className="mb-6 p-4 bg-success/20 border border-success rounded-lg">
                  <p className="text-success font-semibold">
                    Thank you for your message! We'll be in touch soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-dark-200 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-error text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-dark-200 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-error text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-dark-200 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    {...register('company', { required: 'Company name is required' })}
                    className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-dark-200 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                    placeholder="Your company"
                  />
                  {errors.company && (
                    <p className="text-error text-sm mt-1">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    {...register('service', { required: 'Please select a service' })}
                    className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-dark-200 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-error text-sm mt-1">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters',
                      },
                    })}
                    className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-dark-200 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                  {errors.message && (
                    <p className="text-error text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  )
}
