import React from "react";
import WorkHistory from "./WorkHistory";
import Projects from "./Projects";
import Skills from "./Skills";
import Services from "./Services";
import "./detail.scss";

const Detail = () => {
    return (
        <div className="mt-2 w-full h-[calc(100vh-184px)] rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            <WorkHistory />
            <Skills />
            <Projects />
            <Services />
        </div>
    )
}

export default Detail