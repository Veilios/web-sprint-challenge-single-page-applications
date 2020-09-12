import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {

    console.log("Home props: ", props);

    return (
        <div>
            <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" alt="Pizza"/>
            <Link>Pizza?</Link>
        </div>
    )

}

export default Home;