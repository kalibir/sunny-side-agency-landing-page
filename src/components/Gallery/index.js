import React from "react";
import "./styles.scss";
import bottle from "../../assets/images/mobile/image-gallery-milkbottles.jpg";
import orange from "../../assets/images/mobile/image-gallery-orange.jpg";
import cone from "../../assets/images/mobile/image-gallery-cone.jpg";
import cubes from "../../assets/images/mobile/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
	return (
		<div className='gallery-wrapper'>
			<img src={bottle} />
			<img src={orange} />
			<img src={cone} />
			<img src={cubes} />
		</div>
	);
};

export default Gallery;
