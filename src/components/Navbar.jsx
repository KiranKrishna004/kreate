/** @format */
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div className='z-40 sticky top-0 bg-gray-800 text-white	'>
			<div className='flex justify-between sm:max-w-xl xs:max-w-md md:max-w-3xl lg:max-w-7xl max-w-2xl mx-auto py-5'>
				<Link to='/' className='text-lg'>
					Kreate
				</Link>
				<div className='inline-flex space-x-7'>
					<Link to='/products'>Products</Link>
					<Link to='/cart'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth='2'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
