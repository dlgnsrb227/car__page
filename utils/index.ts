export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "eab59a98c3msh342e88649efb002p1ec447jsn30d508b9124f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
