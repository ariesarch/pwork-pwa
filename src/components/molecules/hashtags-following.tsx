import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../atoms/Carousel'
import HomeFeedTag from '../atoms/HomeFeedTag'
import { hashtags } from '@/constants/home'

const HashtagsFollowing = () => {
    return (
        <div className='border-b pb-4 border-patchwork_black-50 px-4 sm:px-6'>
            <div className="mt-5  flex items-center justify-between">
                <h3 className="font-semibold text-lg">Hashtags Following</h3>
                <p className="font-semibold text-md text-patchwork_black-50">
                    View All
                </p>
            </div>
            <Carousel >
                <CarouselContent className='mt-4'>
                    {hashtags.map((item) => {
                        return <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/4" key={item.id} >
                            <HomeFeedTag tag={item} />
                        </CarouselItem>
                    })}
                </CarouselContent>

            </Carousel>
        </div>
    )
}

export default HashtagsFollowing
