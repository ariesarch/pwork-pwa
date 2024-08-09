import AccountMenu from '@/components/modules/AccountMenu'
import HashtagsFollowing from '@/components/molecules/hashtags-following'
import LocalChannels from '@/components/molecules/local-channels'
import MainLayout from '@/components/molecules/main-layout'
import MyChannels from '@/components/molecules/my-channels'
import MyLists from '@/components/molecules/my-lists'
import PeopleFollowing from '@/components/molecules/people-following'
import ServerChannels from '@/components/molecules/server-channel'
import React from 'react'

const HomePage = () => {
    return (
        <main className='pb-40 '>
            <AccountMenu />
            <MyChannels />
            <ServerChannels />
            <PeopleFollowing />
            <LocalChannels />
            <HashtagsFollowing />
            <MyLists />
        </main>
    )
}

export default HomePage
