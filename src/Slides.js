import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import image1 from './images/andreas-rasmussen-oBmlsTW2pHY-unsplash.jpg'
import image2 from './images/febiyan--hwDGRQzAeM-unsplash.jpg'
import image3 from './images/sandro-kradolfer-imLsDPLnr7Y-unsplash.jpg'
import { FaArrowLeft } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa";
import image4 from './images/sandro-kradolfer-imLsDPLnr7Y-unsplash.jpg'
import image5 from './images/danishpastry.jfif'
import image6 from './images/julian-hochgesang-SDxDQXixgfU-unsplash.jpg'
import Map from './Map'

export const Slides = () => {
    const firstSlideRef = useRef(null)
    const secondSlideRef = useRef(null)
    const thirdSlideRef = useRef(null)
    const fourthSlideRef = useRef(null)
    const carouselRef = useRef(null)
    const [imageWidth, setImageWidth] = useState(0)
    const imgsRef = useRef(null)

    useEffect(() => {
        gsap.set(firstSlideRef.current, {y: 0})
        gsap.set(secondSlideRef.current, {y: 0})

        const first = firstSlideRef.current.querySelectorAll('.first-p, .btn-el-first')
        gsap.fromTo(first, {
            opacity: 0,
            y: 40
        }, {
            y: 0,
            duration: 2,
            ease: 'expo.out',
            opacity: 1,
            delay: 1.5,
            stagger: 0.7,
        });
        
        if(carouselRef.current) {
            const firstImage = carouselRef.current.querySelector('img')
            if (firstImage) {
                setImageWidth(firstImage.offsetWidth)
            }
        }
    }, [])
    const scrollFirst = () => {
        const firstSlide = firstSlideRef.current
        const first = firstSlideRef.current.querySelectorAll('.first-p, .btn-el-first')
        const secondSlide = secondSlideRef.current
        const second = secondSlideRef.current.querySelectorAll('.second-header, .carousel-container')
        const buttons = secondSlideRef.current.querySelectorAll('.btn-right, .btn-left')
        const secondButton = secondSlideRef.current.querySelectorAll('.btn-el-second')

        if (firstSlide && secondSlide) {
            gsap.to(first, {
                y: "-100vh",
                duration: 2,
                ease: "power2.inOut",
                stagger: 0.2,
            })
            gsap.to(firstSlide, {
                zIndex: -1,
            })
        }
        if (secondSlide) {
            gsap.fromTo(second, {
                visibility: 'hidden',
                y: '100vh',
                zIndex: -1,
            }, {
                y: 0,
                visibility: 'visible',
                zIndex: 2,
                duration: 2,
                stagger: 0.4,
                ease: 'power2.inOut',
            })
            gsap.fromTo(buttons, {
                y: '150vh',
                opacity: 0,
            }, {
                y: 0,
                opacity: 0.7,
                duration: 2,
                stagger: 0.4,
                delay: 1,
                ease: 'power2.out',
            })
        }
        if (secondSlide) {
            gsap.fromTo(secondButton, {
                x: '50vh',
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                delay: 4,
                duration: 2,
                ease: 'expo.inOut'
            })
        }
    }
    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy ({
                left: imageWidth,
                behavior: 'smooth'
            })
        }
    }
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy ({
                left: -imageWidth,
                behavior: 'smooth'
            })
        }
    }

    const scrollSecond = () => {
        const firstSlide = secondSlideRef.current
        const first = firstSlide.querySelectorAll('.btn-left, .btn-right, .second-header, .carousel-container, .btn-el-second')
        const secondSlide = thirdSlideRef.current
        const second = secondSlide.querySelectorAll('.third-header, .image-container, .btn-go-left, .btn-go-right')
        const secondButton = secondSlide.querySelectorAll('.btn-el-third')

        if (firstSlide && secondSlide) {
            gsap.to(first, {
                y: '-100vh',
                duration: 2,
                ease: 'power2.inOut',
                stagger: 0.2
            })
            gsap.to(firstSlideRef, {
                zIndex: -2
            })
        }
        if (secondSlide) {
            gsap.fromTo(second, {
                visibility: 'hidden',
                y: '100vh',
            }, {
                y: 0,
                visibility: 'visible',
                duration: 2,
                stagger: 0.4,
                ease: 'power2.inOut',
                delay: 2
            })
            gsap.to(secondSlide, {
                zIndex: 2,
            })
        }
        if (secondSlide) {
            gsap.fromTo(secondButton, {
                x: '50vh',
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                delay: 4,
                duration: 2,
                ease: 'expo.inOut'
            })
        }
    }
    const goLeft = () => {
        if(imgsRef.current) {
            imgsRef.current.scrollBy({
                left: -imageWidth,
                behavior: 'smooth'
            })
        }
    }
    const goRight = () => {
        if(imgsRef.current) {
            imgsRef.current.scrollBy({
                left: imageWidth,
                behavior: 'smooth'
            })
        }
    }

    const scrollThird = () => {
        const firstSlide = thirdSlideRef.current
        const first = firstSlide.querySelectorAll('.btn-go-left, .btn-go-right, .image-container, .third-header, .btn-el-third')
        const secondSlide = fourthSlideRef.current
        const second = secondSlide.querySelectorAll('.fourth-header, .map-container, .footer')

        if (firstSlide && secondSlide) {
            gsap.to(first, {
                y: '-100vh',
                duration: 2,
                ease: 'power2.inOut',
                stagger: 0.2
            })
            gsap.to(firstSlideRef, {
                zIndex: -6
            })
        }
        if (secondSlide) {
            gsap.fromTo(second, {
                visibility: 'hidden',
                y: '100vh',
            }, {
                y: 0,
                visibility: 'visible',
                duration: 2,
                stagger: 0.4,
                ease: 'power2.inOut',
                delay: 2
            })
            gsap.to(secondSlide, {
                zIndex: 2,
            })
        }
    }

  return (
    <div>
        <div className='first-slide' ref={firstSlideRef}>
            <p className='first-p' data-speed="1">DENMARK</p>
            <button className='btn-el-first' data-speed="0.7" onClick={scrollFirst}>Scroll</button>
        </div>

        <div className='second-slide' ref={secondSlideRef}>
            <p className='second-header'>Discovering Denmark</p>
            <div className='carousel-container'>
                <div className='carousel' ref={carouselRef}>
                    <div>
                        <img src={image1} alt='img1'></img>
                    </div>
                    <div>
                        <img src={image2} alt='img2'></img>
                    </div>
                    <div>
                        <img src={image3} alt='img3'></img>
                    </div>
                </div>
            </div>

            <button onClick={scrollLeft} className='btn-left'><i><FaArrowLeft /></i></button>
            <button onClick={scrollRight} className='btn-right'><i><FaArrowRight /></i></button>

            
            <button className='btn-el-second' onClick={scrollSecond}>Scroll</button>
        </div>

        <div className='third-slide' ref={thirdSlideRef}>
            <p className='third-header'>
                <span className='third-header-span1'>...and it's</span> <br></br>
                <span className='third-header-span2'>culture</span>
            </p>

            <div className='image-container' ref={imgsRef}>
                <img className='second-image-1' src={image5}></img>
                <img className='second-image-2' src={image6}></img>
                <img className='second-image-3' src={image4}></img>
            </div>
            <button onClick={goLeft} className='btn-go-left'><i><FaArrowLeft /></i></button>
            <button onClick={goRight} className='btn-go-right'><i><FaArrowRight /></i></button>

            <button className='btn-el-third' onClick={scrollThird}>Scroll</button>
        </div>

        <div className='fourth-slide' ref={fourthSlideRef}>
            <p className='fourth-header'>And here's a map of Denmark!</p>
            <div className='map-container'>
                <Map />
            </div>
            <h6 className='footer'>Chaleta</h6>
        </div>
    </div>
  )
}
