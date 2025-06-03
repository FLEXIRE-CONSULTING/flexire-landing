import image from '../assets/missionImg.svg';

const Third = () => {
	return (
		<section className='relative w-screen md:h-screen bg-[#38607D] grid md:grid-cols-2 items-center text-left px-[24px] md:px-[100px] text-white max-md:py-[32px]'>
			<div className='flex flex-col gap-[64px] items-start'>
				{/* Mission Section */}
				<div className='flex flex-col gap-[24px]'>
					<h2 className='font-[Lexend] font-bold text-[20px] md:text-[32px] leading-[40px]'>
						Our Mission
					</h2>
					<p className='font-[Lexend] font-light text-[16px] md:text-[24px] leading-[40px]'>
						“Our mission is to empower businesses to thrive and succeed by
						providing data-driven insights and customized solutions that drive
						growth, optimize operations, and enhance profitability.”
					</p>
				</div>

				{/* Vision Section */}
				<div className='flex flex-col gap-[24px]'>
					<h2 className='font-[Lexend] font-bold text-[20px] md:text-[32px] leading-[40px]'>
						Our Vision
					</h2>
					<p className='font-[Lexend] font-light text-[16px] md:text-[24px] leading-[40px]'>
						“To become a leading global consulting firm recognized for excellence
						in transforming data into strategic value, fostering innovation,
						and building sustainable growth for our clients.”
					</p>
				</div>
			</div>

			{/* Image Section */}
			<div className='flex items-center justify-center max-md:hidden'>
				<img src={image} alt='Mission illustration' className='h-[80%] object-contain' />
			</div>
		</section>
	);
};

export default Third;
