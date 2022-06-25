/** @format */
import { useEffect, useState } from "react";
import imgService from "../services/imgService";
import { Link } from "react-router-dom";
import detailService from "../services/detailService";
import Banner from "../components/Banner";

const Home = () => {
	const [flat, setFlat] = useState([]);
	const [lightTones, setLightTones] = useState([]);
	const [health, setHealth] = useState([]);
	const [bannerProducts, setBannerProducts] = useState([]);
	//8788025 8240068 1dTgp8ML_DY 4315264
	useEffect(() => {
		detailService.getPage(15, 10).then((response) => {
			setBannerProducts(response.data);
		});
		imgService
			.getAll(`8788025`)
			.then((response) => {
				console.log(response.data);
				setFlat(response.data);
			})
			.catch((e) => {
				console.log(e);
			});

		imgService
			.getAll(`1dTgp8ML_DY`)
			.then((response) => {
				console.log(response.data);
				setLightTones(response.data);
			})
			.catch((e) => {
				console.log(e);
			});

		imgService
			.getAll(`4315264`)
			.then((response) => {
				console.log(response.data);
				setHealth(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	const bannerList = [
		{
			img: flat,
			bannerProducts: bannerProducts.slice(0, 5),
			name: "FLAT LAY LIFESTYLE",
		},
		{
			img: lightTones,
			bannerProducts: bannerProducts.slice(5, 9),
			name: "LIGHT TONES",
		},
		{
			img: health,
			bannerProducts: bannerProducts.slice(10, 15),
			name: "HEALTH",
		},
	];

	const bannerDisplay = bannerList.map((item, index) => (
		<Banner
			key={index}
			img={item.img}
			bannerProducts={item.bannerProducts}
			name={item.name}
		/>
	));
	return (
		<div>
			<div className='relative flex mx-auto w-full justify-center'>
				<img
					className='w-full '
					src='https://cdn13.afydecor.com/Decor-banner.jpg'
				/>
				<button className='absolute bottom-12 left-2/3 bg-white hover:bg-gray-600 hover:text-white text-black font-light py-2 px-5 rounded'>
					<Link to='/products'>Shop Now</Link>
				</button>
			</div>
			<div className='sm:max-w-xl xs:max-w-md md:max-w-3xl lg:max-w-7xl max-w-2xl mx-auto'>
				{bannerDisplay}
			</div>
		</div>
	);
};
export default Home;
