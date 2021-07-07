import { useEffect, useState } from "react";
import SideMenu from "./SideMenu";

import MobileButton from "./MobileButton";
export default function SideMenuResponsive() {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResizeWindow);
		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);

	const [isClosed, setIsClosed] = useState(true);
	if (width <= 580) return <MobileButton isClosed={isClosed} setIsClosed={setIsClosed} />;

	return <SideMenu />;
}
