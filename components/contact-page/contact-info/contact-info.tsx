import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';
import { IoMdPhonePortrait } from 'react-icons/io';
import { RiHomeOfficeFill } from 'react-icons/ri';

const neocarData = [
	{
		icon: MdAlternateEmail,
		title: 'Adres Email',
		value: ['oskneocar@gmail.com'],
	},
	{
		icon: IoMdPhonePortrait,
		title: 'Numer telefonu',
		value: ['+48 788 875 615'],
	},
	{
		icon: FaLocationDot,
		title: 'Lokalizacja',
		value: ['ul. Jałowego 20', '35-010  Rzeszów'],
	},
	{
		icon: RiHomeOfficeFill,
		title: 'Biuro czynne',
		value: ['Godziny otwarcia:', 'Poniedziałek, Środa, Piątek 10:30-14:30', 'Wtorek, Czwartek 13:00-17:00'],
	},
];

const ContactInfo = () => {
	return (
		<div className='bg-[var(--background-white-2)] px-4 xl:px-10 py-5 xl:rounded-r-lg shadow-2xl w-full lg:w-auto'>
			<h2 className=' text-xl xl:text-2xl mb-2 text-[var(--main-page-color)] font-semibold'>
				Informacje kontaktowe
			</h2>
			<ul className='flex flex-col gap-2'>
				{neocarData.map((item, index) => (
					<li key={index}>
						<div className='flex items-center mb-1 text-base lg:text-lg '>
							{
								<item.icon className='text-[var(--main-page-color)] mr-1' />
							}
							<p className='font-semibold'>{item.title}:</p>
						</div>
						<ul>
							{item.value.map((val, idx) => (
								<li key={idx} className='text-sm'>
									{val}
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ContactInfo;
