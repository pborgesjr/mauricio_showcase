export const fetchImages = async (folder: string) => {
  //TODO: criar env variable for API_URL
  //TODO: also create API_KEY for node api
  const response = await fetch(`http://localhost:3333/images?folder=${folder}`);

  const resJSON = await response.json();

  return resJSON;
};
