import axios from 'axios';

const instance = axios.create({
	baseURL: "https://hacker-news.firebaseio.com/v0/",
});

export const contentAPI = {
	getStoriesIds: async storiesType => {
		const response = await instance.get(`${storiesType}.json`);
		return response.data;
	},
	getStories: async id => {
		const response = await instance.get(`item/${id}.json`);
		return response.data;
	}
};