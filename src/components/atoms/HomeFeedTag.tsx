import { ChevronRightIcon, ListBulletIcon } from '@radix-ui/react-icons';
import React from 'react'

interface Props {
    tag: {
        name: string;
        id: number;
        isRedPointOn?: boolean;
    },
    icon?: true
}

const HomeFeedTag = ({ tag, icon }: Props) => {
    return (
        <div className='relative flex items-center justify-between gap-2 py-1 px-1 rounded-2xl border border-patchwork_black-50'>
            <div className="flex items-center ms-2 gap-1">
                {icon && <ListBulletIcon width={15} height={15} />}
                {tag.isRedPointOn && <div className="z-10 absolute right-0 top-[-6px] w-4 h-4 border-2 border-patchwork_black-500 rounded-full bg-patchwork_red-600" />}
                <p className='text-nowrap font-semibold text-md'>{tag.name}</p>
            </div>
            <ChevronRightIcon />
        </div>
    )
}

export default HomeFeedTag
