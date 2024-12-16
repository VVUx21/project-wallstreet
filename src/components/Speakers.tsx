'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface Speaker {
  name: string
  title: string
  image: string
  image2:string
}

const speakers: Speaker[] = [
  {
    name: "Speaker",
    title: "V. Krishnan",
    image: "/Speaker_Assets/Card vk.png",
    image2: "/Speaker_Assets/v krishnan.png"
  },
  {
    name: "Speaker",
    title: "Ravi Ranjan",
    image: "/Speaker_Assets/Card ravi.png",
    image2: "/Speaker_Assets/ravi.png"
  },
  {
    name: "Speaker",
    title: "Mukesh Malik",
    image: "/Speaker_Assets/Card mukesh.png",
    image2: "/Speaker_Assets/mukesh.png" 
  },
  {
    name: "Speaker",
    title: "Rishi Singh",
    image: "/Speaker_Assets/Card rishi.png",
    image2: "/Speaker_Assets/rishi.png"  
  },
  {
    name: "Speaker",
    title: "Ishaan Sharma",
    image: "/Speaker_Assets/Card ishaan.png",
    image2: "/Speaker_Assets/ishaan.png" 
  },
  {
    name: "Speaker",
    title: "Bibin Babu",
    image: "/Speaker_Assets/Card bibin.png",
    image2: "/Speaker_Assets/bibin.png"
  },
  {
    name: "Speaker",
    title: "Arjun Malhotra",
    image: "/Speaker_Assets/Card malhotra.png",
    image2: "/Speaker_Assets/malhotra.png"
  },
  {
    name: "Speaker",
    title: "AK Mohanty",
    image: "/Speaker_Assets/Card ak.png",
    image2: "/Speaker_Assets/ak.png"
  },
  {
    name: "Investor",
    title: "Puru Modani",
    image: "https://res.cloudinary.com/dgtdkqfsx/image/upload/v1733295844/Card_opzljj.svg",
    image2: "https://res.cloudinary.com/dgtdkqfsx/image/upload/v1733294808/bibin_babu-removebg-preview_enhanced_kfbb6q.png"
  },
  {
    name: "Investor",
    title: "Pranav Shandilya",
    image: "https://res.cloudinary.com/dgtdkqfsx/image/upload/v1733295844/Card_1_wi2ahf.svg",
    image2: "https://res.cloudinary.com/dgtdkqfsx/image/upload/v1733294809/bibin_babu-removebg-preview_enhanced_1_mpme6b.png"
  },
  {
    name: "Investor",
    title: "Chiranjibi Samal",
    image: "https://res.cloudinary.com/dgtdkqfsx/image/upload/v1733295843/Card_5_keago5.svg",
    image2: "https://res.cloudinary.com/dgtdkqfsx/image/upload/v1733294808/bibin_babu-removebg-preview_enhanced_2_bsrkbk.png" 
  },
  {
    name: "Investor",
    title: "Avelo Roy",
    image: "https://res.cloudinary.com/dgtdkqfsx/image/upload/v1733295843/Card_3_hsgxkv.svg",
    image2: "https://res.cloudinary.com/dgtdkqfsx/image/upload/v1733294808/bibin_babu-removebg-preview_enhanced_3_cw9xmi.png"  
  },
  {
    name: "Investor",
    title: "Arijit Bhattacharya",
    image: "https://res.cloudinary.com/dgtdkqfsx/image/upload/v1733295843/Card_4_lhuaro.svg",
    image2: "https://res.cloudinary.com/dgtdkqfsx/image/upload/v1733294809/bibin_babu-removebg-preview_enhanced_4_v3hpz4.png" 
  },
  {
    name: "Investor",
    title: "Amit Singhal",
    image: "https://res.cloudinary.com/dgtdkqfsx/image/upload/v1733295844/Card_2_je0ncu.svg",
    image2: "https://res.cloudinary.com/dgtdkqfsx/image/upload/v1733294808/bibin_babu-removebg-preview_enhanced_5_wuzmxh.png"
  },
]

export default function SpeakerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 3000 })])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
  <div id='Speakers' className='px-5 pt-10 bg-black'>
  <div className=" w-full min-h-screen bg-black relative">
    <h1 className='flex justify-center items-center'>
      <span className="text-[#0064E0] text-5xl font-bold text-center ">SPEAKERS &amp; INVESTORS</span>
    </h1>
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] lg:max-w-6xl max-w-4xl w-full p-4">
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {speakers.map((speaker, index) => (
          <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative aspect-[3.5/4] overflow-hidden">
                <div>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="absolute w-full h-full object-fill"
                />
                {
                  speaker.name === "Speaker"? (
                    <Image
                      src={speaker.image2}
                      alt={speaker.name}
                      layout="responsive"
                      width={100}
                      height={100}
                      quality={90}
                      className='absolute w-full h-full object-cover grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-300'
                    />
                  ):(
                    <Image
                      src={speaker.image2}
                      alt={speaker.name}
                      width={200}
                      height={200}
                      className='absolute bottom-0 right-0 sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px] grayscale hover:grayscale-0 hover:cursor-pointer transition-all duration-300'
                    />
                  )
                }
                </div>
                <div className="absolute z-10 p-6 flex flex-col">
                  <span className="text-blue-600 text-[17px] font-medium">
                    {speaker.name}
                  </span>
                  <h3 className="text-white text-3xl font-bold mt-2">
                    {speaker.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <button
      className="absolute top-[50%] left-[16px] -translate-y-[50%] bg-white/10 hover:bg-white/20 text-white p-2 rounded-full border-2 border-white-500"
      onClick={scrollPrev}
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
    <button
      className="absolute top-[50%] right-[16px] -translate-y-[50%] bg-white/10 hover:bg-white/20 text-white p-2 rounded-full border-2 border-white-500"
      onClick={scrollNext}
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  </div>
</div>
</div>
  )
}
