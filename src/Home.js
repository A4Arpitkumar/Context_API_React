import { useContext } from "react";
import { UserContext } from "./App";


function Home()
{
    const demo = useContext(UserContext);
    return(
        <div>
            <h1>Hello - {demo.name}</h1>
            <h2>Roll no - {demo.rno}</h2>
        </div>
    )
}
export default Home;