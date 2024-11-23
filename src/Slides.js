import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import image1 from './images/andreas-rasmussen-oBmlsTW2pHY-unsplash.avif'
import image2 from './images/febiyan--hwDGRQzAeM-unsplash.avif'
import image3 from './images/serge-taeymans-FEpZRUSqTTk-unsplash.avif'
import { FaArrowLeft } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa";
import image4 from './images/sandro-kradolfer-imLsDPLnr7Y-unsplash.avif'
import image5 from './images/danishpastry.avif'
import image6 from './images/julian-hochgesang-SDxDQXixgfU-unsplash.avif'
import Map from './Map.js'

export const Slides = () => {
    const firstSlideRef = useRef(null)
    const secondSlideRef = useRef(null)
    const thirdSlideRef = useRef(null)
    const fourthSlideRef = useRef(null)
    const carouselRef = useRef(null)
    const [imageWidth, setImageWidth] = useState(0)
    const [imageWidth2, setImageWidthTwo] = useState(0)
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
        if(imgsRef.current) {
            const firstImage = imgsRef.current.querySelector('img')
            if (firstImage) {
                setImageWidthTwo(firstImage.offsetWidth)
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
        }
        if (secondSlide) {
            gsap.fromTo(secondSlide, {
                y: 0,
            }, {
                y: '-100vh',
                duration: 2,
                delay: 1
            })
            gsap.fromTo(second, {
                y: 100,
                zIndex: -1
            }, {
                y: 0,
                zIndex: 2,
                duration: 2,
                stagger: 0.4,
                ease: 'power2.inOut',
                delay: 1
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
        const first = firstSlide.querySelectorAll('.btn-left, .btn-right, .second-header, .carousel-1, .btn-el-second')
        const secondSlide = thirdSlideRef.current
        const second = secondSlide.querySelectorAll('.third-header, .btn-go-left, .btn-go-right, .carousel-2')
        const secondButton = secondSlide.querySelectorAll('.btn-el-third')

        if (firstSlide && secondSlide) {
            gsap.to(first, {
                y: '-100vh',
                duration: 2,
                ease: 'power2.inOut',
                stagger: 0.2
            })
        }
        if (secondSlide) {
            gsap.fromTo(secondSlide, {
                y: 0,
            }, {
                y: '-100vh',
                duration: 2,
                delay: 2
            })
            gsap.fromTo(second, {
                y: 100,
                zIndex: -1,
            }, {
                y: 0,
                duration: 2,
                delay: 2,
                zIndex: 2,
                stagger: 0.4,
                ease: 'power2.inOut'
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
    const goRight = () => {
        if (imgsRef.current) {
            imgsRef.current.scrollBy ({
                left: imageWidth2,
                behavior: 'smooth'
            })
        }
    }
    const goLeft = () => {
        if (imgsRef.current) {
            imgsRef.current.scrollBy ({
                left: -imageWidth2,
                behavior: 'smooth'
            })
        }
    }

    const scrollThird = () => {
        const firstSlide = thirdSlideRef.current
        const first = firstSlide.querySelectorAll('.btn-go-left, .btn-go-right, .third-header, .btn-el-third, .carousel-2')
        const secondSlide = fourthSlideRef.current
        const second = secondSlide.querySelectorAll('.fourth-header, .map-container, .footer')

        if (firstSlide && secondSlide) {
            gsap.to(first, {
                y: '-100vh',
                duration: 2,
                ease: 'power2.inOut',
                stagger: 0.2
            })
        }
        if (secondSlide) {
            gsap.fromTo(secondSlide, {
                y: 0,
            }, {
                y: '-100vh',
                duration: 2,
                delay: 2
            })
            gsap.fromTo(second, {
                y: 40,
            }, {
                y: 0,
                duration: 2,
                stagger: 0.7,
                zIndex: 2,
                ease: 'power2.inOut',
                delay: 2
            })
        }
    }

  return (
    <div>
        <div className='first-slide' ref={firstSlideRef}>
            <p className='first-p'>DENMARK</p>
            <button className='btn-el-first' onClick={scrollFirst}>Scroll</button>
        </div>

        <div className='second-slide' ref={secondSlideRef}>
            <p className='second-header'>Discovering Denmark</p>
            <div className='carousel-container carousel-1'>
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
            <p className='third-header'>...and it's culture</p>

            <div className='carousel-container carousel-2'>
                <div className='carousel' ref={imgsRef}>
                    <div>
                        <img src={image5} alt='danishfood'></img>
                    </div>
                    <div>
                        <img src={image6} alt='hygge'></img>
                    </div>
                    <div>
                        <img src={image4} alt='beach'></img>
                    </div>
                </div>
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
