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

const getPage = async (page) => {
	return await axios.get(`${baseUrl}/?page=${page}&per_page=10`, options);
};

export default { getDetail: getDetail, getPage: getPage };
