/** @format */
import ProductBanner from "./ProductBanner";
import ItemBanner from "./ItemBanner";

const Banner = ({ img, bannerProducts, name }) => {
	return (
		<>
			<ProductBanner bannerProducts={bannerProducts} />
			<div className='relative'>
				<div className='font-light whitespace-nowrap absolute flex justify-center text-white top-1/2 left-1/2 bottom-1/2 right-1/2'>
					{name}
				</div>
				<ItemBanner img={img} />
			</div>
		</>
	);
};
export default Banner;
