import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/atoms/InputOtp";
import BackArrow from "@/components/icons/back-arrow";
import MainLayout from "@/components/molecules/main-layout";
import React from "react";

const EmailVerificationPage = () => {
	return (
		<MainLayout className='px-3 sm:px-6 bg-patchwork_black-500 text-patchwork_white-900 min-h-screen'>
			<div className='flex justify-between items-center py-6'>
				<BackArrow />
				<h3 className='font-semibold'>Email Verification</h3>
				<div></div>
			</div>
			<div>
				<div className='mt-10 font-semibold ms-3 flex flex-col items-center text-patchwork_white-900 text-center '>
					<span className=' text-patchwork_black-300'>
						We sent a code to your email
					</span>
					<span>email@email.com</span>
				</div>
				<InputOTP maxLength={4}>
					<InputOTPGroup className='gap-3 my-10 w-screen justify-center'>
						{[0, 1, 2, 3].map((_, index) => {
							return (
								<InputOTPSlot
									className='rounded-lg bg-patchwork_black-300   border-none  font-bold text-xl h-[60px] w-[60px]'
									key={index}
									index={index}
								/>
							);
						})}
					</InputOTPGroup>
				</InputOTP>
				<div className='font-semibold ms-3 text-patchwork_white-900 text-center'>
					<span className='text-patchwork_black-300'>Dont recieve a code?</span>
					<span className='ms-2'>Resend in 19sec...</span>
				</div>
			</div>
		</MainLayout>
	);
};

export default EmailVerificationPage;
