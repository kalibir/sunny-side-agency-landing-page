import React from "react";
import "./styles.scss";
import emily from "../../assets/images/image-emily.jpg";
import thomas from "../../assets/images/image-thomas.jpg";
import jennie from "../../assets/images/image-jennie.jpg";

const Testimonials = () => {
	return (
		<>
			<h3 className='testimonials-name'>Client testimonials</h3>
			<div className='testimonials-wrapper'>
				<div className='client-feedback'>
					<img src={emily} />
					<p>
						We put our trust in Sunnyside and they delivered, making sure our
						needs were met and deadlines were always hit.
					</p>
					<h3>Emily R.</h3>
					<span>Marketing Director</span>
				</div>

				<div className='client-feedback'>
					<img src={thomas} />
					<p>
						Sunnyside’s enthusiasm coupled with their keen interest in our
						brand’s success made it a satisfying and enjoyable experience.
					</p>
					<h3>Thomas S.</h3>
					<span>Chief Operating Officer</span>
				</div>

				<div className='client-feedback'>
					<img src={jennie} />
					<p>
						Incredible end result! Our sales increased over 400% when we worked
						with Sunnyside. Highly recommended!
					</p>
					<h3>Jennie F.</h3>
					<span>Business Owner</span>
				</div>
			</div>
		</>
	);
};

export default Testimonials;
