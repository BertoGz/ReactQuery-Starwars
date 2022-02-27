import { useQuery } from "react-query";
import { GET_PLANETS_ENDPOINT } from "./Constants";
import Planet from "./Planet";
const fetchPlanets = async () => {
  const res = await fetch(GET_PLANETS_ENDPOINT); // fetch data from server

  return res.json(); // return the json data
};
const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);
  return (
    <>
      <div>
        <h2>Planets</h2>
        {status === "loading" && <div>Loading...</div>}
        {status === "error" && <div>Error</div>}
        {status === "success" && (
          <div>
            {data?.results?.map((planet) => {
              return <Planet {...{ planet }} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default Planets;
