import React from 'react'
import Image from 'next/image'
import { sponsorData } from '../Data/SponsorData'
function Sponsors() {
  return (
    <div className='pb-[4rem] bg-black' id='Sponsors'>


  <div className="relative font-inter antialiased">
      <div className="text-center text-5xl font-bold text-[#0064E0] font-poppins">
       SPONSORS
      </div>

<main className="relative h-full flex flex-col justify-center overflow-hidden">
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
        <div className="text-center">
            
            <div
                x-data="{}"
                x-init="$nextTick(() => {
                    let ul = $refs.logos;
                    ul.insertAdjacentHTML('afterend', ul.outerHTML);
                    ul.nextSibling.setAttribute('aria-hidden', 'true');
                })"
                className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                  { sponsorData.map((item: any) => (
                    <li key={item.id}>
                        <Image src={item.imageUrl} alt="Facebook" width={187} height={67}/>
                    </li>
                    ))}
                </ul>                
            </div>

            <div
                x-data="{}"
                x-init="$nextTick(() => {
                    let ul = $refs.logos;
                    ul.insertAdjacentHTML('afterend', ul.outerHTML);
                    ul.nextSibling.setAttribute('aria-hidden', 'true');
                })"
                className="w-full mt-[3rem] inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-rtl ">
                  { sponsorData.map((item: any) => (
                    <li key={item.id}>
                        <Image src={item.imageUrl} alt="Facebook" width={187} height={67}/>
                    </li>
                    ))}
                </ul>                
            </div>
            
            
            
        </div>

    </div>
</main>

</div>
    </div>
  )
}

export default Sponsors
