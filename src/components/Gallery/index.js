import React from "react";
import "./styles.scss";
import bottle from "../../assets/images/mobile/image-gallery-milkbottles.jpg";
import orange from "../../assets/images/mobile/image-gallery-orange.jpg";
import cone from "../../assets/images/mobile/image-gallery-cone.jpg";
import cubes from "../../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import bottleDesktop from "../../assets/images/desktop/image-gallery-milkbottles.jpg";
import orangeDesktop from "../../assets/images/desktop/image-gallery-orange.jpg";
import coneDesktop from "../../assets/images/desktop/image-gallery-cone.jpg";
import cubesDesktop from "../../assets/images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
	return (
		<>
			<div className='gallery-wrapper-mobile'>
				<img src={bottle} />
				<img src={orange} />
				<img src={cone} />
				<img src={cubes} />
			</div>
			<div className='gallery-wrapper-desktop'>
				<img src={bottleDesktop} />
				<img src={orangeDesktop} />
				<img src={coneDesktop} />
				<img src={cubesDesktop} />
			</div>
		</>
	);
};

export default Gallery;
