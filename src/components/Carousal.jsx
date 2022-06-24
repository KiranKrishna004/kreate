/** @format */
import { Link } from "react-router-dom";

const Carousal = ({ img }) => {
	return (
		<div className='flex flex-row justify-center'>
			{img.map((item, index) => {
				return (
					<Link key={item.id} to={`/${item.id}`}>
						<img src={item.urls.thumb} alt='welp, that didnt work' />
					</Link>
				);
			})}
		</div>
	);
};
export default Carousal;
