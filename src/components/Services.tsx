const Services = ({
	image,
	list,
	title,
}: {
	image: string;
	list: string[];
	title: string;
}) => {
	return (
		<div className=' flex flex-col items-start gap-2 min-h-[494px]'>
			<div className='shadow-[-5px_8px_39.1px_14px_rgba(10,9,9,0.25)] bg-[#d9d9d9]'>
				<div>
					<img
						src={image}
						alt=''
					/>
				</div>
				<ul className='text-left list-disc font-[Lexend] font-light text-[15px] leading-[40px] flex items-start text-black flex-col px-[32px] pt-[22px] pb-[47px]'>
					{list.map((x) => (
						<li>{x}</li>
					))}
				</ul>
			</div>
			<div className='font-[Lexend] font-light text-[24px] leading-[30px] text-black'>
				{title}
			</div>
		</div>
	);
};

export default Services;
