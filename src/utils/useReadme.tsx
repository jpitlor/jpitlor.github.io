export default readme => {
	const [,title, longDescription] = /^# (.*)\n([^#]+)/.exec(readme);
	return {
		title,
		longDescription,
	};
};
