import React from "react";
import "./styles.scss";

const ImageCards = () => {
	return (
		<div className='graphic-photo-holder'>
			<div className='graphic'>
				<h3>Graphic Design</h3>
				<p>
					Great design makes you memorable. We deliver artwork that underscores
					your brand message and captures potential clients’ attention.
				</p>
			</div>
			<div className='photo'>
				<h3>Photography</h3>
				<p>
					Increase your credibility by getting the most stunning, high-quality
					photos that improve your business image.
				</p>
			</div>
		</div>
	);
};

export default ImageCards;
