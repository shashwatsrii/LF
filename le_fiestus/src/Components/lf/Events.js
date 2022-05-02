import React from 'react'
import rbrush from './photos/brush.png'
import './Events.css'

export default function Events() {
  return (
    <div className='gallery'>
    <div class="wrapper">
	<div className='brush'><img src={rbrush} alt=""/>
  </div>
  <h1>Upcoming Events</h1>
  
  
  <div class="cols">
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front"  >
						<div class="inner">
							<p>Diligord</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front"  >
						<div class="inner">
							<p>Diligord</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front"  >
						<div class="inner">
							<p>Diligord</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front"  >
						<div class="inner">
							<p>Diligord</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front">
						<div class="inner">
							<p>Rocogged</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
							<p>Strizzes</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
							<p>Clossyo</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			
		</div>
 </div>
    </div>    
  )
}