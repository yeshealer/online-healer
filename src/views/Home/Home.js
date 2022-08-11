import React from "react";
import Overview from '../components/Overview/Overview'
import Detail from "../components/Detail/Detail";

const Home = () => {
    return (
        <div className="w-screen h-auto">
            <div className="m-2">
                <Overview />
                <Detail />
            </div>
        </div>
    )
}

export default Home