import React from "react";
import HeroText from "./HeroText";

class Home  extends React.Component{
render() {
    return(
        <div>
            <h1>This is home component </h1>
            <HeroText/>
        </div>
    );
}
}
export default Home;