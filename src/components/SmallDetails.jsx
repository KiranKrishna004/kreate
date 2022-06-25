/** @format */

import CartButton from "./CartButton";

const SmallDetails = ({ details, id }) => {
	return (
		<div className='flex md:hidden justify-center items-center flex-col max-w-md'>
			<div>
				<img src={details.urls.small_s3} className='xs:h-60 sm:h-80  w-auto' />
			</div>
			<div className='flex flex-col justify-center items-center w-full'>
				<p className='whitespace-nowrap text-2xl font-medium'>
					<a href={details.user.portfolio_url} target='_blank'>
						{details.user.first_name} {details.user.last_name}
					</a>
				</p>
				<p className='text-sm font-light'>Downloads: {details.downloads}</p>
				<p className='mt-2'>{details.description}</p>
				<p className='mt-3  flex items-center justify-center w-full'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
					interdum mi justo.
				</p>
				<div className='pt-14'>
					<CartButton details={details} id={id} />
				</div>
			</div>
		</div>
	);
};
export default SmallDetails;
