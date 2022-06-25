/** @format */
import axios from "axios";

const baseUrl = "https://api.unsplash.com/photos";
const options = {
	headers: {
		Authorization: `"Client-ID ${process.env.REACT_APP_API_KEY}"`,
	},
};

const getDetail = async (id) => {
	return await axios.get(`${baseUrl}/${id}`, options);
};

const getPage = async (per_page = 5, page) => {
	return await axios.get(
		`${baseUrl}/?page=${page}&per_page=${per_page}&order_by=popular`,
		options
	);
};

export default { getDetail: getDetail, getPage: getPage };
