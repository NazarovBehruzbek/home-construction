import React, {useEffect} from "react";
import MenuPage from "./Components/menuPage";
import "./Components/construction.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Component3 from "./Components/Component3";
import Component4 from "./Components/Component4";
import News from "./Components/News";
import Capabilities from "./Components/Capabilities";
import Foter from "./Components/Foter";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease-in-out',
        });
        AOS.refresh();

    }, [])
    return (
        <React.Fragment>
            <MenuPage />
            <Component1 />
            <Component2/>
            <Component3/>
            <News/>
            <Component4/>
            <Capabilities/>
            <Foter/>
        </React.Fragment>
    );
}

export default App;
