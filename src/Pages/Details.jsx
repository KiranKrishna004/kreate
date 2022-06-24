/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import detailService from "../services/detailService";
import { useSelector } from "react-redux";
import CartButton from "../components/CartButton";

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
		return <>Loading......</>;
	}

	return (
		<div className='max-w-5xl flex flex-col justify-center items-center mx-auto'>
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
