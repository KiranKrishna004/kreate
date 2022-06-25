/** @format */
import CartButton from "./CartButton";
const MediumDetails = ({ details, id }) => {
	return (
		<div className='hidden bg-gray-100 md:border-2 md:rounded-lg md:py-12 md:px-8 md:mt-5 md:grid md:grid-cols-2 md:h-5/6 '>
			<div>
				<div className='flex justify-center items-center'>
					<img src={details.urls.small} />
				</div>
			</div>
			<div className='border-l pl-5 relative'>
				<p className='whitespace-nowrap text-2xl font-medium'>
					<a href={details.user.portfolio_url} target='_blank'>
						{details.user.first_name} {details.user.last_name}
					</a>
				</p>
				<p className='text-sm font-light'>Downloads: {details.downloads}</p>
				<p className='mt-14'>{details.description}</p>
				<p className='mt-3'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
					interdum mi justo.
				</p>
				<div className=' whitespace-nowrap absolute bottom-20 right-10'>
					<CartButton details={details} id={id} />
				</div>
			</div>
		</div>
	);
};
export default MediumDetails;
