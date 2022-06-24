/** @format */
import { useEffect, useState } from "react";
import imgService from "../services/imgService";
import Carousal from "../components/Carousal";

const Home = () => {
	const [img, setImg] = useState([]);

	useEffect(() => {
		imgService
			.getAll()
			.then((response) => {
				setImg(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<div className='sm:max-w-xl xs:max-w-md md:max-w-3xl lg:max-w-7xl max-w-2xl mx-auto'>
			<Carousal img={img.slice(0, 5)} />
			<Carousal img={img.slice(5, 10)} />
			<Carousal img={img.slice(10, 15)} />
		</div>
	);
};
export default Home;
