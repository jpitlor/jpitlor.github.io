export default (readme: string) => {
  const [, title, longDescription] = /^# (.*)\r?\n([^#]+)/.exec(readme) || [];
  return {
    title,
    longDescription,
  };
};
