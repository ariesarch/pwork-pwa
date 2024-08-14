import { IContributor } from '@/types/contributors'
import React from 'react'
import Contributor from '../atoms/Contributor'


interface Props {
    contributors: IContributor[]
}

const ContributorLists = ({ contributors }: Props) => {
    return (
        <div>
            {contributors.map((contributor, index) => {
                return <Contributor key={index} contributor={contributor} />
            })}
        </div>
    )
}

export default ContributorLists
