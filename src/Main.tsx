import React, { Fragment, useState } from "react";
import Header from "./Header";
import BodyComponent from "./Body";
import Footer from "./Footer";
import Splash from './Home';

const Main = () => {
	const [splash, setSplash] = useState(true);
	if(splash){
		return(
			<Splash onForward={() => setSplash(false)} />
		)
	}
	return (
		<Fragment>
			<Header />
			<BodyComponent />
			<Footer />
		</Fragment>
	);
};

export default Main;
