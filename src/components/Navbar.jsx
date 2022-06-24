/** @format */
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div className='bg-gray-800 mb-7 text-white	'>
			<div className='flex justify-between sm:max-w-xl xs:max-w-md md:max-w-3xl lg:max-w-7xl max-w-2xl mx-auto py-5'>
				<Link to='/' className='text-lg'>
					Kreate
				</Link>
				<div className='space-x-7'>
					<Link to='/products'>Products</Link>
					<Link to='/cart'>Cart</Link>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
