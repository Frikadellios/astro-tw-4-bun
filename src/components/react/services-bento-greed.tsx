'use client'
import { cn } from '@/lib/utils'
import {
  motion,
  useTransform,
  useSpring,
  useInView,
  useAnimate,
  useMotionValue
} from 'framer-motion'
import { useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { Badge } from '@/components/ui/badge'


const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl font-bold text-foreground">{children}</h2>
)

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xl text-mute-foreground">{children}</p>
)

export const BentoGrid = () => (
  <article
    className={twMerge(
      'flex h-full w-full items-start justify-center bg-trancperent px-5 py-20'
    )}>
    <div className="flex h-full w-full max-w-[1200px] flex-col items-start justify-start gap-10">
      <span>
        <div className="mb-2 flex items-center justify-start gap-2">
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="var(--cyan-500)"
            className="mb-[3px] h-5 w-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
            <Badge variant='secondary'><span className="font-bold text-neon-cyan">Our Services</span></Badge>
        </div>

        <h1 className="max-w-lg bg-gradient-to-br from-primary via-neon-cyan to-primary bg-clip-text text-7xl font-bold text-transparent">
          We Build Websites With
        </h1>
      </span>
      <div className="grid w-full grid-cols-3 place-items-center gap-5">
        <SeoSection />
        <CmsIntegration />
        <UniqueDesign />
      </div>
    </div>
  </article>
)

const SeoSection = () => (
  <section
    className={twMerge(
      'col-span-3 w-full overflow-hidden rounded-xl border border-neutral-900 p-10 shadow-sm sm:h-[320px] lg:col-span-2',
      'flex flex-col-reverse items-start justify-start gap-10 sm:flex-row '
    )}>
    <div className="flex w-full items-center justify-center sm:w-fit lg:block">
      <Seo />
    </div>
    <div>
      <Heading>Incredible SEO & Performance</Heading>
      <Paragraph>
        Spend less money on marketing by getting free traffic from Google Search
      </Paragraph>
    </div>
  </section>
)

const CmsIntegration = () => (
  <section className="relative flex h-[320px] w-full flex-col items-start justify-end overflow-hidden rounded-xl  border border-neutral-900 bg-gradient-to-br from-[#0099ff] to-sky-900/[0.8] text-white shadow-sm max-lg:col-span-3">
    <div className="px-8 pt-10">
      <Heading>CMS Integration</Heading>
      <p className="text-xl text-white">Cerate and update pages yourself</p>
    </div>
    <div className="h-full w-full">
      <CMS />
    </div>
  </section>
)

const UniqueDesign = () => (
  <section className=" relative col-span-3 flex h-[600px] w-full items-start justify-end gap-5 overflow-hidden rounded-xl border border-neutral-900 bg-gradient-to-br from-black to-[#0099ff20] max-lg:flex-col lg:h-[400px]">
    <div className="max-w-lg my-auto p-10 text-2xl">
      <Heading>Unique Design</Heading>
      <Paragraph>
        Design that is tailored specifically to your needs and perfectly represents the soul of your
        project
      </Paragraph>
    </div>
    <div className="relative flex h-full w-full items-end px-3 pt-10 sm:px-10 lg:px-0">
      <div className="absolute right-0 top-0 z-10 h-full w-[120px] bg-gradient-to-l from-black/[0.6] to-transparent max-lg:hidden" />
      <div className="absolute bottom-0 left-0 z-10 h-[120px] w-full bg-gradient-to-t  from-black/[0.4] to-transparent " />
      <div className="h-[300px] w-full overflow-hidden rounded-tl-xl max-lg:rounded-t-xl sm:h-full">
        <div className="flex h-8 w-full items-center justify-start bg-background px-3">
          <div className="flex gap-1">
            <div className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
            <div className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
            <div className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
          </div>
        </div>
        <div className="relative h-full w-full bg-background px-2 text-foreground sm:px-4">
          <div className="relative z-[2] flex w-full items-center justify-between py-1">
            <span className="text-lg font-bold">NextGen.</span>
            <span className="flex items-center justify-start gap-3 bg-background px-0.5 text-xs font-light text-foreground sm:gap-10 sm:text-sm">
              <div>pricing</div>
              <div>work</div>
              <div>about</div>
            </span>
          </div>
          <div
            className={twMerge('relative z-[2] my-5 max-w-xs text-5xl font-bold')}>
            Next Generation Agency.
          </div>
          <div className="absolute left-0 top-0 h-full w-1/3 border-r " />
          <div className="absolute right-0 top-0 h-full w-1/3 overflow-hidden border-l">
            <Waves />
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Seo = () => {
  const x = useMotionValue(0)

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, {})

  const number = useTransform(x, (v) => Number(v.toFixed(0)))
  const springX = useSpring(x, { damping: 40 })
  const dx = useTransform(springX, (v) => `${v / 100}px 1px`)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (isInView) {
      animate(x, 100, { duration: 0.9 })
    } else {
      animate(x, 0, { duration: 0 })
    }
  }, [isInView])

  const boxShadow =
    '0 2.0155254638171756px 1.6124203710537404px -.34375px #0099ff24,0 4.777151241141837px 3.8217209929134697px -.6875px #0099ff23,0 8.714017655176574px 6.971214124141261px -1.03125px #0099ff23,0 14.487036858627107px 11.589629486901686px -1.375px #09f2,0 23.395383266347928px 18.71630661307834px -1.71875px #09f2,0 38.29592112890677px 30.636736903125417px -2.0625px #0099ff21,0 65.94299011604161px 52.7543920928333px -2.40625px #0099ff20,0 120px 96px -2.75px #0099ff1d'

  return (
    <motion.div
      ref={scope}
      viewport={{ once: false }}
      whileInView={{
        boxShadow
      }}
      initial={{
        boxShadow: 'none'
      }}
      animate={{
        boxShadow
      }}
      transition={{ delay: 2.3, duration: 0.6 }}
      className="relative flex h-fit w-fit items-center  justify-center rounded-full bg-background p-2">
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <circle
          cx="100"
          cy="100"
          r="95"
          className="stroke-neon-cyan/[0.4]"
          strokeWidth={'0.5rem'}
          pathLength={1}
        />
      </svg>
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg width="200" height="200" viewBox="0 0 200 200" className="-rotate-90" fill="none">
        <motion.circle
          cx="100"
          cy="100"
          r="95"
          strokeWidth={'0.5rem'}
          pathLength="0.99"
          strokeDashoffset={'0px'}
          className="stroke-white"
          strokeDasharray={dx}
        />
      </svg>
      <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-foreground">
        {number}
      </motion.div>
    </motion.div>
  )
}

const CMS = () => (
  <div className={'relative h-full w-full overflow-hidden'}>
    <div className="relative flex h-full w-full justify-end pt-4">
      <AnimatedCursor text="Niko" />
      <div className="h-full w-5/6 rounded-tl-xl bg-background px-4 pt-4">
        <div className="flex w-full items-center justify-start gap-4 ">
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={'#000000'}
            fill={'none'}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 6C5 4.58579 5 3.87868 5.43934 3.43934C5.87868 3 6.58579 3 8 3H12.5789C15.0206 3 17 5.01472 17 7.5C17 9.98528 15.0206 12 12.5789 12H5V6Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.4286 12H13.6667C16.0599 12 18 14.0147 18 16.5C18 18.9853 16.0599 21 13.6667 21H8C6.58579 21 5.87868 21 5.43934 20.5607C5 20.1213 5 19.4142 5 18V12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={'#000000'}
            fill={'none'}>
            <path d="M12 4H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8 20L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M5 20H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={'#000000'}
            fill={'none'}>
            <path
              d="M5.5 3V11.5C5.5 15.0899 8.41015 18 12 18C15.5899 18 18.5 15.0899 18.5 11.5V3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M3 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="mt-3 text-4xl font-light text-foreground">
          <div className="relative border-[1.5px] border-neon-cyan px-0.5">
            Hi, it&apos;s my first page.
            <div className="absolute bottom-0 right-0 h-1 w-1 translate-x-1/2 translate-y-1/2 rounded-full bg-neon-cyan" />
            <div className="absolute bottom-0 left-0 h-1 w-1 -translate-x-1/2 translate-y-1/2 rounded-full bg-neon-cyan" />
            <div className="absolute right-0 top-0 h-1 w-1 -translate-y-1/2 translate-x-1/2 rounded-full bg-neon-cyan" />
            <div className="absolute left-0 top-0 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const AnimatedCursor: React.FC<{ className?: string; text: string }> = ({ className, text }) => (
  <motion.div
    initial={{ translateX: '0', translateY: '0' }}
    animate={{ translateX: ['0', '20px', '0'], translateY: ['0', '40px', '0'] }}
    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, bounce: true }}
    className={'relative z-[2] flex items-center gap-4'}>
    <div
      className={cn(
        'w-fit rounded-full border border-red-500 bg-red-500 px-2 py-1 text-white',
        className
      )}>
      {text}
    </div>
    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
    <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
      <path
        d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z"
        fill="var(--red-500)"
        stroke="var(--red-400)"
        strokeWidth="1.5"
      />
    </svg>
  </motion.div>
)

const Waves = () => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" className="h-full">
    <g strokeWidth="5" stroke="black" fill="none" transform="translate(-10 -37.959)">
      <path d="M10 10c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46C361.111 28.5 372.223-8.625 400-8s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70C761.111 58.917 786.111 11.667 800 0M10 850c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 815c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 780c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 745c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 710c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 675c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 640c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 605c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 570c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 535c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 500c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 465c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 430c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 395c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 360c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 325c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 290c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 255c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 220c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 185c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 150c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 115c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 80c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
      <path d="M10 45c11.806 4.792 30.972 27.167 56.667 23 25.694-4.167 38.889-45.292 66.666-43 27.778 2.292 38.89 56.083 66.667 54s38.889-60.25 66.667-64 38.889 43.5 66.666 46c27.778 2.5 38.89-34.625 66.667-34s38.889 39.292 66.667 37 38.889-49.875 66.666-48c27.778 1.875 38.89 55.958 66.667 57s38.889-55.75 66.667-52 38.889 67.083 66.666 70c27.778 2.917 52.778-44.333 66.667-56" />
    </g>
  </svg>
)
