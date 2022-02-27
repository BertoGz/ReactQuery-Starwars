import { useQuery } from "react-query";
import { GET_PEOPLE_ENDPOINT } from "./Constants";
import Person  from "./Planet";
const fetchPeople = async () => {
  const res = await fetch(GET_PEOPLE_ENDPOINT); // fetch data from server
  return res.json(); // return the json data
};
const People = () => {
  const { data, status } = useQuery("people", fetchPeople);
  return (
    <>
      <div>
        <h2>People</h2>
        {status === "loading" && <div>Loading...</div>}
        {status === "error" && <div>Error</div>}
        {status === "success"  && <div>{data?.results?.map((p)=>{
            return <Person {...{key:p?.name,person:p}}/>
        })}</div>} 
      </div>
    </>
  );
};
export default People;
