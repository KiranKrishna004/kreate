/** @format */
import axios from "axios";
const baseUrl = "https://api.unsplash.com/photos/";
const options = {
	headers: {
		Authorization: `"Client-ID ${process.env.REACT_APP_API_KEY}"`,
	},
};
const getDetail = async (id) => {
	return await axios.get(`${baseUrl}/${id}`, options);
};

export default { getDetail: getDetail };
