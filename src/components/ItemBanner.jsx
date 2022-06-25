/** @format */
import { Link } from "react-router-dom";

const ItemBanner = ({ img, size = "small" }) => {
	return (
		<div className='py-12 flex flex-row '>
			{img.map((item, index) => {
				return (
					<div key={index}>
						<Link to={`/${item.id}`}>
							<div className='shadow-lg'>
								<div className='flex flex-column'>
									<img
										className='w-full h-96 object-cover'
										src={item.urls.small}
										loading='lazy'
										alt={""}
									/>
								</div>
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
};
export default ItemBanner;
