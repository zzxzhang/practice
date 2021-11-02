const getChapters = async (url: any) => {
  const res = await fetch(url);
  return res.json();
};

export { getChapters };
