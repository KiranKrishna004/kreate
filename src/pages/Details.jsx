/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import detailService from "../services/detailService";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import MediumDetails from "../components/MediumDetails";
import SmallDetails from "../components/SmallDetails";

const Details = () => {
	const cart = useSelector(({ cart }) => cart.cart);
	const { id } = useParams();
	const [details, setDetails] = useState();

	useEffect(() => {
		detailService
			.getDetail(id)
			.then((response) => {
				setDetails(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	if (details === undefined) {
		return <Loading />;
	}

	return (
		<div className='h-screen '>
			<div className='sm:max-w-xl flex items-center justify-center h-5/6 xs:max-w-md md:max-w-3xl lg:max-w-5xl max-w-2xl mx-auto'>
				<MediumDetails details={details} id={id} />
				<SmallDetails details={details} id={id} />
			</div>
		</div>
	);
};
export default Details;
