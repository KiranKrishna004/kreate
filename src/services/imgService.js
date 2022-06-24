/** @format */

import axios from "axios";
const baseUrl = `https://api.unsplash.com/photos/?per_page=15`;

const getAll = () => {
	return axios.get(baseUrl, {
		headers: {
			Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
		},
	});
};

export default { getAll: getAll };
