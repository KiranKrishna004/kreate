/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import detailService from "../services/detailService";
import { useSelector } from "react-redux";
import CartButton from "../components/CartButton";
import Loading from "../components/Loading";

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
		<div className='flex flex-col justify-center items-center sm:max-w-xl xs:max-w-md md:max-w-3xl lg:max-w-7xl max-w-2xl mx-auto'>
			<img src={details.urls.small} />
			<p className='whitespace-nowrap text-xl font-medium'>
				<a href={details.user.portfolio_url} target='_blank'>
					{details.user.first_name} {details.user.last_name}
				</a>
			</p>
			<p>Downloads: {details.downloads}</p>
			<p>{details.description}</p>
			<CartButton details={details} id={id} />
		</div>
	);
};
export default Details;
