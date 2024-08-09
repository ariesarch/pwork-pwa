import { ChevronRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import React from 'react'

interface Props {
    channel: any
}
const ChannelCard = ({ channel }: Props) => {
    return (
        <div className='relative rounded-lg  w-[150px] h-[150px]'>
            {channel.isRedPointOn && <div className="z-10 absolute right-[-5px] top-[-5px] w-4 h-4 border-2 border-patchwork_black-500 rounded-full bg-patchwork_red-600" />}
            <Image fill className='object-cover rounded-lg  ' src={channel.img} alt='Channel Image' />
            <div className="flex items-center justify-between absolute bottom-1 left-2 right-2">
                <p className="text-md font-semibold">{channel.name}</p>
                <ChevronRightIcon width={18} height={18} />
            </div>
        </div>

    )
}

export default ChannelCard
