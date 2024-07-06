import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <div className="relative isolate overflow-hidden bg-trancperent py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-neon-cyan sm:text-4xl">Subscribe to our newsletter.</h2>
            <p className="mt-4 text-lg leading-8 text-foreground">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <Input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
              />
              <Button
                variant='default'
                type="submit"
                className="flex-none rounded-md  px-3.5 py-2.5 text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Subscribe
              </Button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-primary/75 p-2 ring-1 ring-neon-cyan">
                <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-neon-cyan" />
              </div>
              <dt className="mt-4 font-semibold text-foreground">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-muted-foreground">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-destructive/75 p-2 ring-1 ring-neon-cyan">
                <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-neon-cyan" />
              </div>
              <dt className="mt-4 font-semibold text-foreground">No spam</dt>
              <dd className="mt-2 leading-7 text-muted-foreground">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
