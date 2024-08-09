import { myChannels } from '@/constants/home'
import React from 'react'
import ChannelCard from '../atoms/ChannelCard'
import { Carousel, CarouselContent, CarouselItem } from '../atoms/Carousel'

const MyChannels = () => {
    return (
        <div className='px-4 sm:px-6'>
            <div className="mt-5  flex items-center justify-between">
                <h3 className="font-semibold text-lg">My Channels</h3>
                <p className="font-semibold text-md text-patchwork_black-50">
                    View All
                </p>
            </div>
            <Carousel >
                <CarouselContent className='mt-4'>
                    {myChannels.map((item) => {
                        return <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/3" key={item.id} >
                            <ChannelCard channel={item} />
                        </CarouselItem>
                    })}
                </CarouselContent>

            </Carousel>
        </div>
    )
}

export default MyChannels
