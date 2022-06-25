/** @format */
import Card from "./Card";
const ProductBanner = ({ bannerProducts }) => {
	console.log("Banner: ", bannerProducts);
	return (
		<>
			<div className='hidden lg:flex'>
				<div className=' grid grid-cols-4 gap-3 my-12'>
					{bannerProducts.slice(0, 4).map((item, index) => (
						<Card product={item} index={index} key={index} />
					))}
				</div>
			</div>
			<div className='hidden md:flex lg:hidden'>
				<div className=' grid grid-cols-3 gap-3 my-12'>
					{bannerProducts.slice(0, 3).map((item, index) => (
						<Card product={item} index={index} key={index} />
					))}
				</div>
			</div>
			<div className='hidden xs:flex md:hidden'>
				<div className=' grid grid-cols-2 gap-3 my-12'>
					{bannerProducts.slice(0, 2).map((item, index) => (
						<Card product={item} index={index} key={index} />
					))}
				</div>
			</div>
		</>
	);
};
export default ProductBanner;
