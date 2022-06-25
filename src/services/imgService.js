/** @format */

import axios from "axios";
const baseUrl = `https://api.unsplash.com/collections/`;

const getAll = (id, orientation = "portrait") => {
	return axios.get(
		`${baseUrl}/${id}/photos/?orientation=${orientation}&per_page=5`,
		{
			headers: {
				Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
			},
		}
	);
};

export default { getAll: getAll };
