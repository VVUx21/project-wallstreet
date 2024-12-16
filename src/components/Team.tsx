import React from 'react'
import Image from 'next/image'
import { OurTeam } from '../Data/teamData'

function Team() {
  return (
    <div id='Team' className='bg-black'>
        <div className="flex flex-col justify-center items-center mt-8 font-poppins">
            <div className="container max-w-7xl justify-center items-center px-4">

            <div className="flex flex-wrap justify-center items-center text-center mb-16">
                    <div className="w-full lg:w-6/12 px-4">
                        
                        <h1 className="text-[#0064E0] text-5xl font-bold mb-[2px]">
                            OUR TEAM
                        </h1>

                        <p className="text-white text-lg font-normal">
                        Explore Our Success Stories and Innovative Projects
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center">
                { OurTeam.map((item: any) => (
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4" key={item.id}>
                        <div className="flex flex-col justify-center items-center bg-white">
                            
                            <div className="transition-all duration-200 delay-100 px-4 pt-4 bg-white">
                                <Image
                                    src={item.imageUrl}
                                    alt="image"
                                    width={500}
                                    height={500} 
                                    className="object-cover" 
                                    layout='fixed'
                                />
                                </div>
                            <div className="text-center mt-4">
                                <h1 className="text-gray-900 text-xl font-extrabold mb-1">
                                    {item.name}
                                </h1>

                                
                                <div className="text-gray-700 font-medium mb-2 ">
                                    {item.title}
                                </div>
                                <div className="flex items-center mx-auto w-80 justify-center opacity-100 hover:opacity-100
                                transition-opacity duration-300 text-[1.5rem] mb-2">
                                    <a href={item.linkedin} className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-500 mx-auto "></i>
                                    </a>

                                    <a href={`mailto:${item.gmail}`} className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-gmail text-blue-300 mx-auto "></i>
                                    </a>
                                    <a href={item.instagram} className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team
