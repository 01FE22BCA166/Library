import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'
import img from "./bvbb.jpg";

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>BVB Entrance</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://wallpaperaccess.com/full/5487979.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Put your Heart ❤️ into Books, Books Never Leave your Heart ❤️</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://lh3.googleusercontent.com/-P9ZKWa9oQ6A/YDKZaeKM-9I/AAAAAAAAIl0/zOh-LfO54x89uiGjqvUm2DP4dex4NHUmwCLcBGAsYHQ/w1200-h630-p-k-no-nu/magdalene_college_library.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Library Infrastructure.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
