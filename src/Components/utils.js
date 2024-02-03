const headers = {
  "X-RapidAPI-Key": "07a53eafedmsh3a73a35d496f8d6p12f62fjsn176506fcc3c4",
  "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
};

export const exerciseOptions = {
  method: "GET",
  params: { limit: "20" },
  headers: headers,
};

export const bodyPartsOptions = {
  method: "GET",
  params: { limit: "20" },
  headers: {
    "X-RapidAPI-Key": "07a53eafedmsh3a73a35d496f8d6p12f62fjsn176506fcc3c4",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
