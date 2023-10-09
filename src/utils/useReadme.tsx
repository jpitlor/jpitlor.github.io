export default (readme: string) => {
  const [, title, longDescription] = /^# (.*)\n([^#]+)/.exec(readme) || [];
  return {
    title,
    longDescription,
  };
};
