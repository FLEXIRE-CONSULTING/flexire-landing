import { FaRightLong } from 'react-icons/fa6';
import background from '../assets/BGHERO2.svg';
import { FaDotCircle } from 'react-icons/fa';

const Second = () => {
	return (
		<section className='relative grid items-center h-[80vh] sm:h-screen w-screen' id='about'>
			{/* Background Image */}
			<div className='absolute top-0 left-0 w-full h-full z-[-1] max-lg:opacity-[0.2] opacity-[0.7]'>
				<img
					src={background}
					alt='background'
					className='w-full h-full object-cover'
				/>
			</div>

			{/* Content */}
			<div className='w-[90%] sm:w-[80%] md:w-[75%] lg:w-[66.7%] pl-6 md:pl-12 lg:pl-20 text-left flex flex-col gap-8 md:gap-16'>
				{/* Heading */}
				<div className='font-[Lexend] font-bold text-[18px] sm:text-[24px] md:text-[32px] leading-[40px] text-[#384e72] flex items-center gap-3'>
					<FaDotCircle />
					About Flexire Consulting
				</div>

				{/* Text Block */}
				<div className='font-[Inter] pl-6 md:pl-12 lg:pl-24 grid gap-6 max-sm:gap-8'>
					<h2 className='font-extrabold text-[22px] md:text-[32px] leading-snug text-[#c46e65]'>
						We are a team of experts dedicated to helping you achieve your business goals.
					</h2>

					<p className='text-[14px] md:text-[20px] leading-relaxed text-[#1e1e1e]'>
						At Flexire Consulting, we empower businesses to grow through data. From analyzing complex datasets
						to delivering actionable insights, we help you make informed decisions that maximize impact and
						profitability.
					</p>

					{/* CTA Button */}
					<div>
						<button className='inline-flex font-[Inria_Sans] items-center gap-3 px-4 md:px-6 py-3 md:py-4 font-bold text-[16px] md:text-[20px] leading-[29px] text-white bg-[#053C7F] rounded-lg shadow hover:bg-[#072c5a] transition duration-300'>
							Read More <FaRightLong />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Second;
