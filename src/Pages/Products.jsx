/** @format */
import { useEffect, useState, useRef, useCallback } from "react";
import detailService from "../services/detailService";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
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

	if (products.length === 0) {
		return <></>;
	}
	return (
		<>
			<div className='grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:max-w-xl xs:max-w-md md:max-w-3xl lg:max-w-7xl max-w-2xl mx-auto'>
				{products.map((item, index) => {
					if (products.length === index + 1) {
						return (
							<div ref={lastProduct}>
								<Card product={item} index={index} />
							</div>
						);
					} else {
						return <Card product={item} index={index} />;
					}
				})}
			</div>
			<div className='flex absolute overflow-none w-full items-center justify-center'>
				<div className='w-20 h-20 border-t-4 border-b-4 border-green-900 rounded-full animate-spin'></div>
			</div>
			<div>{error && "Error......"}</div>
		</>
	);
};
export default Products;
