export const dateToNowDifference = sec => {
	let minutes = Math.floor((Date.now() / 1000 - sec) / 60);
	let days = Math.floor(minutes / (60 * 24));
	if (days > 31) {
		const now = new Date();
		const past = new Date(sec * 1000);
		let months = (now.getFullYear() - past.getFullYear()) * 12;
		months -= past.getMonth() + 1;
		months += now.getMonth();
		if (months >= 12) return Math.floor(months / 12) + ' years ago';
		if (months > 0) return months + ' months ago';
	}
	if (!minutes) return 'now';
	if (minutes < 60) return minutes + ' minutes ago';
	if (minutes / 60 < 24) return Math.ceil(minutes / 60) + ' hours ago';
	return days + ' days ago';
};

export const extractHostNameFromURL = url => {
	return url ? url.split('//')[1].split('/')[0] : '';
};
