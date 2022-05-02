import React from 'react'
import pic1 from '../assets/gallery/gallery (1).jpeg'
import pic2 from '../assets/gallery/gallery (2).jpeg'
import pic3 from '../assets/gallery/gallery (3).jpeg'
import pic4 from '../assets/gallery/gallery (4).jpeg'
import pic5 from '../assets/gallery/gallery (5).jpeg'
import pic6 from '../assets/gallery/gallery (6).jpeg'
import pic7 from '../assets/gallery/gallery (7).jpeg'
import pic8 from '../assets/gallery/gallery (8).jpeg'
import pic9 from '../assets/gallery/gallery (9).jpeg'
import pic10 from '../assets/gallery/gallery (10).jpeg'
import pic11 from '../assets/gallery/gallery (11).jpeg'
import pic12 from '../assets/gallery/gallery (12).jpeg'

import rbrush from './photos/brush.png'
import photobg from './photos/bg.png'

import './Photogallerylf.css'

export default function Photogallerylf() {
  return (
    <div className='gallery2'>
		<div className='title'>
			<div className='bg'>
			<img src={photobg} alt=""/>
			</div>
		<div className='pg-heading'> Photo Gallery</div>
		
		<div className='brush'><img src={rbrush} alt=""/>
  </div>
		</div>
		
  
<div id="slider-container" class="slider">
	<div class="slide1">
			<img src={pic1} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic2} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic3} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic4} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic5} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic6} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic7} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic8} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic9} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic10} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic11} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic12} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic8} alt=""/>
	</div>
	
</div>


<div class="overlay"></div>
    </div>    
  )
}