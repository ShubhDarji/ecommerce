import { Button } from '../ui/Button';

import React from 'react'




export function SlideCard() {
  return (
    <section className="relative">
      <div className="container flex flex-col items-center justify-center space-y-4 py-32 text-center md:py-36 lg:py-40">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Smart Laundry Solutions
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Simplify your life with our innovative home appliances. Experience the future of laundry today.
        </p>
        <Button className="mt-6" size="lg">
          Shop Now
        </Button>
      </div>
    </section>
  )
}


export default SlideCard;
