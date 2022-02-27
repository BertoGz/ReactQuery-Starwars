import { useQuery } from "react-query";
import { GET_PLANETS_ENDPOINT } from "./Constants";
const fetchPlanets = async()=>{
    const res = await fetch(GET_PLANETS_ENDPOINT)  // fetch data from server
    return res.json() // return the json data
}
const Planets = () => {
    const {} = useQuery('planets',fetchPlanets)
  return (
    <>
      <div>
        <h2>Planets</h2>
      </div>
    </>
  );
};
export default Planets;
