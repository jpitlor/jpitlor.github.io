export default readme => ({
	name: /^# (.*)\n?/.exec(readme)[1],
});