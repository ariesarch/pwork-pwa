"use client";
import { CheckIcon } from "@radix-ui/react-icons";
import React from "react";

interface Props {
	selectedTags: string[];
	tag: string;
	setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const InterestTag = ({ selectedTags, tag, setSelectedTags }: Props) => {
	return (
		<div
			onClick={() => {
				if (selectedTags.includes(tag)) {
					setSelectedTags(selectedTags.filter((item) => item !== tag));
				} else {
					setSelectedTags([...selectedTags, tag]);
				}
			}}
			className={`
    ${
			selectedTags.includes(tag)
				? "bg-patchwork_red-500"
				: "bg-patchwork_black-400"
		}
    py-1 px-4 rounded-2xl`}>
			<div className='flex items-center gap-1'>
				<p className='font-semibold text-md text-nowrap'>{tag}</p>
				{selectedTags.includes(tag) && <CheckIcon width={20} height={20} />}
			</div>
		</div>
	);
};

export default InterestTag;
