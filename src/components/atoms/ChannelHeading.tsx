import Image from "next/image";
import React from "react";
import { Button } from "./Button";
import { Avatar, AvatarImage } from "./Avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { PlayIcon } from "@radix-ui/react-icons";

const ChannelHeading = () => {
	return (
		<div className='h-[350px] w-full  relative border-b border-patchwork_black-300'>
			<Image
				className='object-cover'
				fill
				alt='Channel Cover Image'
				src={
					"https://images.unsplash.com/photo-1722648404131-a69c35a706fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				}
			/>
			<div className='absolute bottom-0  left-0 right-0 px-4 bg-patchwork_black-500 h-[220px] w-full'>
				<div className='flex items-center justify-between'>
					<div className='relative w-[100px] h-[90px] mt-[-30px] '>
						<Image
							alt='Channel Profile Image'
							fill
							className='object-cover rounded-lg border-4 border-patchwork_black-300'
							src={
								"https://images.unsplash.com/photo-1707953907896-6424ed45e6b2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							}
						/>
					</div>
					<Button
						className='mt-5 px-10 w-max
                    bg-patchwork_white-900 hover:bg-patchwork_white-900   rounded-full text-patchwork_black-500 font-semibold'>
						Follow
					</Button>
				</div>
				<h3 className='font-semibold text-lg text-patchwork_white-900'>
					Channel Name
				</h3>
				<div className='font-semibold text-patchwork_black-50 flex items-center gap-3'>
					<small>@username</small>
					<PlayIcon />
					<small>Created on Dec 2022</small>
				</div>
				<div className='flex mt-2 mb-4 items-center gap-4'>
					<div className='flex items-center'>
						{[1, 2, 3, 4, 5].map((_, index) => {
							return (
								<Avatar key={index} className='mr-[-10px]'>
									<AvatarImage
										className='object-cover'
										src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
							);
						})}
					</div>
					<p className='text-md font-semibold '>
						<span className='text-patchwork_white-900'>6.8K</span>
						<span className='text-patchwork_black-50 ms-2'>Followers</span>
					</p>
				</div>
				<p className='text-md line-clamp-2'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
					reprehenderit iusto officiis amet eveniet repellendus non vitae!
				</p>
			</div>
		</div>
	);
};

export default ChannelHeading;
