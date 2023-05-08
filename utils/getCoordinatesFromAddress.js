//Getting coordinates from an address
export default async function getCoordinatesFromAddress(address, city) {
  const encodedAdress = address.split(' ').join('%20');
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}%20${city}&key=AIzaSyBh3UbCLRYP9wGO_aBTix6UCS8_jBDaobc`;
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    const data = jsonData.results[0].geometry.location;
  } catch (error) {
    console.error(error);
  }
}
