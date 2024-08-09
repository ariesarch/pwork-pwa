import { GearIcon, PersonIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import React from 'react'

const AccountMenu = () => {
    return (
        <div className=' border-b border-patchwork_black-400 flex items-center justify-between py-2  px-3 sm:px-6'>
            <div className="flex items-center gap-2 sm:gap-3">
                <div className='relative w-[40px] sm:w-[55px] h-[40px] sm:h-[55px]'>
                    <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s'}
                        alt='User Profile' fill className='object-cover rounded-full' />
                </div>
                <div>
                    <p className="font-semibold">Welcome Back</p>
                    <p className='text-md font-semibold text-patchwork_black-100'>Account Name</p>
                </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
                <div className="p-1 sm:p-2 rounde-full border rounded-full">
                    <PersonIcon width={20} height={20} />
                </div>
                <div className="p-2 rounde-full border rounded-full">
                    <GearIcon width={20} height={20} />
                </div>
            </div>
        </div>
    )
}

export default AccountMenu
