import { FaDotCircle } from 'react-icons/fa';
import { FaCogs, FaChartLine, FaRobot, FaDatabase, FaBrain, FaCloud } from 'react-icons/fa';
import background from '../assets/BGHERO3.svg';

const services = [
	{
		icon: <FaChartLine className="text-4xl text-[#053C7F]" />,
		title: 'Data Strategy Consulting',
		description: 'We help businesses unlock growth with data-driven decision-making frameworks tailored to your market.'
	},
	{
		icon: <FaDatabase className="text-4xl text-[#053C7F]" />,
		title: 'Data Engineering & Pipelines',
		description: 'Robust data pipelines for structured, semi-structured, and unstructured data using modern stacks.'
	},
	{
		icon: <FaBrain className="text-4xl text-[#053C7F]" />,
		title: 'AI & ML Solutions',
		description: 'Custom machine learning models to optimize processes, reduce churn, and drive intelligent automation.'
	},
	{
		icon: <FaRobot className="text-4xl text-[#053C7F]" />,
		title: 'RAG Applications',
		description: 'We build Retrieval-Augmented Generation (RAG) apps to turn your documents into intelligent assistants.'
	},
	{
		icon: <FaCloud className="text-4xl text-[#053C7F]" />,
		title: 'Cloud & Data Infrastructure',
		description: 'Scalable cloud-native architectures for secure, efficient data storage and processing.'
	},
	{
		icon: <FaCogs className="text-4xl text-[#053C7F]" />,
		title: 'Business Process Automation',
		description: 'Streamline your operations through intelligent workflow automation solutions.'
	}
];

const Fourth = () => {
	return (
		<section className='relative w-screen min-h-screen py-5 px-5 lg:p-20 flex flex-col gap-20 bg-[#f7f9fc]' id='services'>
			<div className='absolute left-0 top-0 w-screen h-screen -z-10 opacity-10'>
				<img
					src={background}
					alt='background'
					className='h-full object-cover w-full'
				/>
			</div>
			<div className='flex items-center gap-5 text-[20px] md:text-[32px]'>
				<div className='text-[32px] text-[#053C7F]'>
					<FaDotCircle />
				</div>
				<div className='font-[Lexend] font-bold leading-[40px] text-[#384e72]'>
					Services
				</div>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
				{services.map((service, index) => (
					<div
						key={index}
						className='bg-white rounded-2xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col gap-4'
					>
						<div>{service.icon}</div>
						<h3 className='font-bold text-[#053C7F] text-xl'>{service.title}</h3>
						<p className='text-[#384e72] text-sm'>{service.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Fourth;
