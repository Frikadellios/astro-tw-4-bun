import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useState } from 'react'

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Start with essential tools to boost your online presence.',
    monthlyPrice: 69,
    annualPrice: 49,
    link: 'https://github.com/ansub/syntaxUI',
    features: [
      'SEO Strategy & Topic Recommendations',
      'Competitor Analysis to stand out',
      'Built-in Keyword Research',
      'Target latest Google trends',
      'SEO optimized blogs and socials',
      'Technical SEO analysis and Reports',
      'Target 100+ regions and languages',
    ],
  },
  {
    name: 'Professional',
    description:
      'Unlock enhanced features and premium content to supercharge your business.',
    monthlyPrice: 299,
    annualPrice: 199,
    link: 'https://github.com/ansub/syntaxUI',
    features: [
      'Everything in Basic plan',
      'Get 25 premium blogs',
      'Index upto 1000 pages',
      'Premium support',
      'Local SEO',
      'SEO Agent',
    ],
  },
  {
    name: 'Premium',
    description:
      'Ultimate customization and dedicated support for enterprises.',
    monthlyPrice: 2499,
    annualPrice: 1666,
    link: 'https://github.com/ansub/syntaxUI',
    features: [
      'Everything in Professional plan',
      'Get Unlimited premium blogs',
      'Add your own AI Model key',
      'Premium support & training sessions',
    ],
  },
]

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'M' | 'A'>('M')

  const Heading = () => (
    <div className="relative z-10 my-12 flex flex-col items-center justify-center gap-4">
      <div className="flex w-full flex-col items-start justify-center space-y-4 md:items-center">
        <div className="mb-2 inline-block rounded-full bg-primary px-2 py-[0.20rem] text-xs font-medium uppercase text-neon-cyan">
          {' '}
          Pricing
        </div>
        <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Fair pricing, unfair advantage.
        </p>
        <p className="text-md max-w-xl text-foreground md:text-center">
          Get started with Acme today and take your business to the next level.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => setBillingCycle('M')}
          className={cn(
            'rounded-lg px-4 py-2 text-sm font-medium ',
            billingCycle === 'M'
              ? 'relative bg-primary text-foreground hover:text-neon-cyan '
              : 'text-foreground hover:text-neon-cyan',
          )}
        >
          Monthly
          {billingCycle === 'M' && <BackgroundShift shiftKey="monthly" />}
        </button>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => setBillingCycle('A')}
          className={cn(
            'rounded-lg px-4 py-2 text-sm font-medium ',
            billingCycle === 'A'
              ? 'relative bg-primary text-foreground '
              : 'text-foreground  hover:text-mute-foreground',
          )}
        >
          Annual
          {billingCycle === 'A' && <BackgroundShift shiftKey="annual" />}
        </button>
      </div>
    </div>
  )

  const PricingCards = () => (
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:gap-4">
      {pricingPlans.map((plan, index) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          className="w-full rounded-xl border-[1px] border-primary/55 p-6 drop-shadow-xl text-left "
        >
          <h1 className="mb-1 mt-0 text-sm scroll-m-20 font-extrabold tracking-tight lg:text-5xl hover:text-neon-cyan">
            {plan.name}
          </h1>
          <p className=" mb-6 text-md leading-6 text-foreground my-3">{plan.description}</p>
          <div className="mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={billingCycle === 'M' ? 'monthly' : 'annual'}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="my-0 text-3xl font-semibold text-foreground"
              >
                <span>
                  ${billingCycle === 'M' ? plan.monthlyPrice : plan.annualPrice}
                </span>
                <span className="text-sm font-medium">
                  /{billingCycle === 'M' ? 'month' : 'year'}
                </span>
              </motion.p>
            </AnimatePresence>
            <motion.button
              whileTap={{ scale: 0.985 }}
              onClick={() => {
                window.open(plan.link)
              }}
              className="mt-8 w-full rounded-lg bg-primary py-2 text-sm font-medium text-foreground hover:bg-primary hover:text-neon-cyan"
            >
              Get Started
            </motion.button>
          </div>
          {plan.features.map((feature, idx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={idx} className="mb-3 flex items-center gap-2">
              <Check className="text-neon-cyan" size={18} />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )

  return (
    <section className="relative w-full overflow-hidden  py-12 text-foreground lg:px-2 lg:py-12">
      <Heading />
      <PricingCards />
    </section>
  )
}

const BackgroundShift = ({ shiftKey }: { shiftKey: string }) => (
  <motion.span
    key={shiftKey}
    layoutId="bg-shift"
    className="absolute inset-0 -z-10 rounded-lg bg-primary"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
  />
)

export default function PricingPage() {
  return <Pricing />
}
