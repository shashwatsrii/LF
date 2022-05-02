import React from 'react'
import pic from './photos/image.jpg'
import rbrush from './photos/brush.png'
import photobg from './photos/bg.png'
import image1 from './photos/pic1.JPG'
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
			<img src={pic} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic} alt=""/>
	</div>
	<div class="slide1">
			<img src={pic} alt=""/>
	</div>
	
</div>


<div class="overlay"></div>
    </div>    
  )
}