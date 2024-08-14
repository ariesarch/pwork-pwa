"use client";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import BackArrow from "@/components/icons/back-arrow";
import MainLayout from "@/components/molecules/main-layout";
import { contributors, interests } from "@/constants/interests";
import React, { useState } from "react";
import ContributorLists from "@/components/molecules/contributor-lists";
import InterestTag from "@/components/atoms/InterestTag";
const AboutYou = () => {
	return (
		<>
			<p className='my-6 text-patchwork_black-300'>
				Tell us about yourself to start building your home feed.
			</p>
			<div className='mb-3'>
				<h3 className='font-semibold mb-1'>Whats your date of birth?</h3>
				<Input type='date' placeholder='Date of birth' />
			</div>
			<div className='mb-3'>
				<h3 className='font-semibold  mb-1'>Select your country</h3>
				<Input placeholder='Select your country' />
			</div>
		</>
	);
};

const Interests = () => {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	return (
		<>
			<p className='my-6 text-patchwork_black-300'>
				Pick things you like to see in your home feed.
			</p>
			<div>
				{interests.map((interest, index) => {
					return (
						<div key={index} className='mb-5'>
							<h3 className='text-lg font-semibold mb-3'>{interest.name}</h3>
							<div className='flex flex-wrap items-center gap-2 gap-sm-4'>
								{interest.tags.map((tag, tagIndex) => {
									return (
										<InterestTag
											tag={tag}
											selectedTags={selectedTags}
											setSelectedTags={setSelectedTags}
											key={tagIndex}
										/>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
const ContributorsToFollow = () => {
	return (
		<>
			<p className='my-6 text-patchwork_black-300'>
				We have pre-selected the best contributors to follow based on your
				chosen interests.
			</p>
			<ContributorLists contributors={contributors} />
		</>
	);
};
const SelectCommunitiesPage = () => {
	const [currentTab, setCurrentTab] = useState(0);
	return (
		<MainLayout className='px-3 sm:px-6 bg-patchwork_black-500 text-patchwork_white-900 min-h-screen'>
			<div className='flex justify-between items-center py-6'>
				<BackArrow />
				<h3 className='font-semibold'>
					{currentTab === 0 && "About You"}
					{currentTab === 1 && "Interests"}
					{currentTab === 2 && "Contributors to Follow"}
				</h3>
				<div></div>
			</div>
			<div className='grid grid-cols-3 gap-2 gap-sm-5'>
				{[1, 2, 3].map((_, index) => {
					return (
						<div
							key={index}
							className={`h-1 rounded-2xl w-full ${
								currentTab === index
									? "bg-patchwork_red-500"
									: "bg-patchwork_black-400"
							}`}
						/>
					);
				})}
			</div>
			{currentTab === 0 && <AboutYou />}
			{currentTab === 1 && <Interests />}
			{currentTab === 2 && <ContributorsToFollow />}
			<Button
				onClick={() => {
					if (currentTab < 2) setCurrentTab(currentTab + 1);
				}}
				className='my-8 w-full'
				type='submit'>
				Next
			</Button>
		</MainLayout>
	);
};

export default SelectCommunitiesPage;
