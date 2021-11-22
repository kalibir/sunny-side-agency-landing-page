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
				<img src={bottle} alt='bottle' />
				<img src={orange} alt='orange' />
				<img src={cone} alt='cone' />
				<img src={cubes} alt='cubes' />
			</div>
			<div className='gallery-wrapper-desktop'>
				<img src={bottleDesktop} alt='bottle' />
				<img src={orangeDesktop} alt='orange' />
				<img src={coneDesktop} alt='cone' />
				<img src={cubesDesktop} alt='cubes' />
			</div>
		</>
	);
};

export default Gallery;
