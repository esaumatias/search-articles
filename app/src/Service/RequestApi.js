const axios = require('axios');

const key = "CD9iRdW7ILmKeHwax4Tvbp032MGtnXNJ";

export const getByArticles = async(query, pageSelected) => {
  const response = await axios.get(`https://core.ac.uk:443/api-v2/search/${query}?page=${pageSelected}&pageSize=10&apiKey=${ key }`);
  return response.data;
}
