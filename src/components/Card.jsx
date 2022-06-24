/** @format */

const Card = ({ product, index }) => {
	return (
		<div
			key={index}
			className=' relative max-w-sm rounded-lg shadow-md bg-gray-800 hover:shadow-2xl'>
			<div className='rounded overflow-hidden shadow-lg'>
				<div className='flex flex-column'>
					<img
						className='w-full h-48 object-cover'
						src={product.urls.small}
						loading='lazy'
						alt={""}
					/>
				</div>
			</div>
			<div className='p-5 pb-7'>
				<h5 className='mb-2 text-xl font-bold tracking-tight text-white'>
					{product.id}
				</h5>
				<p className='text-gray-400 text-xs whitespace-nowrap'>
					{product.user.name}
				</p>
				<p className='mb-3 mt-5 text-sm text-gray-200'>
					{product.description === null ? (
						<>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
							interdum mi justo.
						</>
					) : (
						<>{product.description}</>
					)}
				</p>
			</div>
			<a
				href={`${product.id}`}
				className='inline-flex right-2 xs:bottom-1 md:bottom-1 items-center absolute py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
				Buy
				<svg
					className='ml-2 -mr-1 w-4 h-4'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
						clipRule='evenodd'></path>
				</svg>
			</a>
		</div>
	);
};
export default Card;
