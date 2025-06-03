import { motion } from 'framer-motion';
import logoImage from '../assets/FLEXIRE-FOOTER.svg';
import { FaPhone, FaClock, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	};

	const contactItems = [
		{ icon: <FaPhone className='text-[#135A84]' />, text: '+234-703-4753-631' },
		{
			icon: <FaClock className='text-[#135A84]' />,
			text: 'Monday-Saturday 8am-5pm',
		},
		{
			icon: <FaEnvelope className='text-[#135A84]' />,
			text: 'info@flexireconsulting.biz',
		},
		{
			icon: <FaMapMarkerAlt className='text-[#135A84]' />,
			text: '16 royal palace estate, Igbojia. Lagos',
		},
	];

	return (
		<motion.footer
			className='w-full bg-white py-8 px-4 md:py-12 md:px-8 border-t border-gray-200'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, margin: '-50px' }}
			variants={containerVariants}
		>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
				{/* Logo Section */}
				<motion.div
					className='flex justify-start'
					variants={itemVariants}
				>
					<motion.div
						className='w-full max-w-xs'
						whileHover={{ scale: 1.03 }}
						transition={{ duration: 0.3 }}
					>
						<img
							src={logoImage}
							alt='Flexire Logo'
							className='w-full h-auto'
						/>
					</motion.div>
				</motion.div>

				{/* Contact InFo*/}
				<motion.div
					className='flex flex-col gap-4 md:gap-6 items-start md:items-end'
					variants={containerVariants}
				>
					{contactItems.map((item, index) => (
						<motion.div
							key={index}
							className='flex items-center gap-4 group'
							variants={itemVariants}
							whileHover={{ x: 5 }}
						>
							<div className='text-xl'>{item.icon}</div>
							<span className='font-lexend font-light text-sm md:text-base lg:text-lg text-gray-700 group-hover:text-[#135A84] transition-colors duration-300'>
								{item.text}
							</span>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Copyright b*/}
			<motion.div
				className='container mx-auto mt-8 pt-6 border-t border-gray-200 text-center'
				variants={itemVariants}
			>
				<p className='font-lexend text-xs md:text-sm text-gray-500'>
					© {new Date().getFullYear()} Flexire. All rights reserved.
				</p>
			</motion.div>
		</motion.footer>
	);
};

export default Footer;
