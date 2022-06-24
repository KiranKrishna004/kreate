/** @format */
import { useEffect, useState, useRef, useCallback } from "react";
import detailService from "../services/detailService";
import { useSelector, useDispatch } from "react-redux";
const Products = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [page, setPage] = useState(1);
	// const page = useSelector(({ page }) => page.page);
	const products = useSelector(({ products }) => products.products);
	const [hasMore, setHasMore] = useState(false);
	const dispatch = useDispatch();
	const observer = useRef();

	const lastProduct = useCallback(
		(node) => {
			if (observer.current) {
				observer.current.disconnect();
			}
			observer.current = new IntersectionObserver((entries) => {
				console.log("entries[0]: ", entries[0]);
				if (entries[0].isIntersecting && hasMore) {
					// dispatch({ type: "NEXT_PAGE" });
					console.log("increasing page to :", page + 1);
					setPage(page + 1);
					console.log("visible");
				}
			});
			if (node) observer.current.observe(node);
		},
		[hasMore, loading]
	);

	useEffect(() => {
		setLoading(true);
		setError(false);
		console.log("page in useEffect", page);
		detailService
			.getPage(page)
			.then((response) => {
				dispatch({ type: "GET_PRODUCT", payload: response.data });
				setHasMore(response.data.length > 0);
				console.log("response: ", response.data);
				setLoading(false);
			})
			.catch((e) => {
				setError(true);
			});
	}, [page]);
	// console.log("products: ", products);

	if (products.length === 0) {
		return <></>;
	}
	return (
		<>
			<div>
				{products.map((item, index) => {
					if (products.length === index + 1) {
						return (
							<div className='m-3' key={index.id} ref={lastProduct}>
								{item.id} {index}
							</div>
						);
					} else {
						return <div key={item.id}>{item.id}</div>;
					}
				})}
			</div>
			<div>{loading && "Loading....."}</div>
			<div>{error && "Error......"}</div>
		</>
	);
};
export default Products;
