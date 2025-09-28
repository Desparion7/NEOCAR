import NavigateBtn from '@/components/ui/navigate-btn';
import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

type PricePlanCardype = {
	id: string;
	title: string;
	planTitle: string;
	price: string;
	characteristic: string[];
};

const PricePlanCard = ({
	id,
	title,
	planTitle,
	price,
	characteristic,
}: PricePlanCardype) => {
	const priceColorClass = ['EKSTERNISTYCZNY', 'STANDARDOWY', 'fast'].includes(
		id
	)
		? 'text-[var(--main-page-second-color)]'
		: ['A1', 'A2', 'A'].includes(id)
		? 'text-[var(--main-page-third-color)]'
		: 'text-[var(--main-page-color)]';

	const borderColorClass = [
		'EKSTERNISTYCZNY',
		'STANDARDOWY',
		'fast',
	].includes(id)
		? 'bg-[var(--main-page-second-color)]'
		: ['A1', 'A2', 'A'].includes(id)
		? 'bg-[var(--main-page-third-color)]'
		: 'bg-[var(--main-page-color)]';
	return (
		<div
			key={id}
			className='bg-[var(--background-white-2)] rounded-md flex flex-col items-center gap-2 py-10 max-w-[450px] w-full lg:min-h-[650px] shadow-xl'
		>
			<div className=' flexCenter flex-col w-full gap-1'>
				<h1 className='font-bold text-base lg:text-xl xl:text-2xl'>
					{title}
				</h1>
				<h2 className='font-light text-sm lg:text-base xl:text-lg'>
					{planTitle}
				</h2>
				<p className=''>
					<span className='text-sm'>PLN </span>
					<span
						className={`font-bold text-lg xl:text-2xl ${priceColorClass}`}
					>
						{price}
					</span>
				</p>
				<div
					className={`h-[1px] lg:h-[2px] w-[90%] ${borderColorClass}`}
				/>
				<div className='w-[90%] py-1 lg:py-2 '>
					<NavigateBtn
						text='Zapisz się'
						link='/#signup'
						style={`py-2 ${borderColorClass}`}
					/>
				</div>
			</div>
			<div className='xl:w-3/4 w-[90%] '>
				<ul className='flex flex-col gap-1 xl:gap-2  '>
					{characteristic.map((c, index) => (
						<li
							key={index}
							className='flex text-sm gap-1 xl:gap-2  '
						>
							<IoMdCheckmark
								className={`min-w-[15px] min-h-[15px] mt-1 ${priceColorClass}`}
							/>
							<p className=''>{c}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PricePlanCard;
