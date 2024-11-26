import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Map from './Map.js'
const CarouselOne = React.lazy(() => import('./CarouselOne.js')) 
const CarouselTwo = React.lazy(() => import('./CarouselTwo.js'))

export const Slides = () => {
    const firstSlideRef = useRef(null)
    const secondSlideRef = useRef(null)
    const thirdSlideRef = useRef(null)
    const fourthSlideRef = useRef(null)
    const carouselOneRef = useRef(null)
    const carouselTwoRef = useRef(null)

    useEffect(() => {
        const first = firstSlideRef.current?.querySelectorAll('.first-p, .btn-el-first')
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
    }, [])
    const handleScroll = (currentSlideRef, nextSlideRef, currentElements, nextElements, currentCarouselRef, nextCarouselRef, delay = 0) => {
        if (currentElements?.length > 0) {  
            gsap.to(currentElements, {
                y: '-100vh',
                duration: 2,
                ease: 'power2.inOut',
                stagger: 0.2,
            })
        }
        if (currentCarouselRef?.current) {
            gsap.to(currentCarouselRef.current, {
                y: '-100vh',
                duration: 2,
                ease: 'power2.inOut',
            });
        }
        if (nextSlideRef.current) {
            gsap.fromTo(nextSlideRef.current, {
                y: 0,
            }, {
                y: '-100vh',
                duration: 2,
                delay: delay,
            })

            if (nextElements?.length > 0 || nextCarouselRef?.current) {
               gsap.fromTo([...(nextElements || []), nextCarouselRef?.current], {
                y: 100,
                zIndex: -1
            }, {
                y: 0,
                zIndex: 2,
                duration: 2,
                stagger: 0.4,
                ease: 'power2.inOut',
                delay: delay
            }) 
            }

            
        }
    }

    const scrollFirst = () => {
        const first = firstSlideRef.current.querySelectorAll('.first-p, .btn-el-first')
        const second = secondSlideRef.current.querySelectorAll('.second-header')
        const secondButton = secondSlideRef.current.querySelectorAll('.btn-el-second')

        handleScroll(firstSlideRef, secondSlideRef, first, second, null, carouselOneRef, 1)

        if (secondButton?.length > 0) {
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
    const scrollSecond = () => {
        const secondSlide = secondSlideRef.current
        const second = secondSlide.querySelectorAll('.second-header, .btn-el-second')
        const thirdSlide = thirdSlideRef.current
        const third = thirdSlide.querySelectorAll('.third-header')
        const thirdButton = secondSlide.querySelectorAll('.btn-el-third')

        handleScroll(secondSlideRef, thirdSlideRef, second, third, carouselOneRef, carouselTwoRef, 2)

        if (thirdButton?.length > 0) {
            gsap.fromTo(thirdButton, {
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
    const scrollThird = () => {
        const thirdSlide = thirdSlideRef.current
        const third = thirdSlide.querySelectorAll('.third-header, .btn-el-third')
        const fourthSlide = fourthSlideRef.current
        const fourth = fourthSlide.querySelectorAll('.fourth-header, .map-container, .footer')

        handleScroll(thirdSlideRef, fourthSlideRef, third, fourth, carouselTwoRef, null, 2)
    }

  return (
    <div>
        <div className='first-slide' ref={firstSlideRef}>
            <h1 className='first-p'>DENMARK</h1>
            <button className='btn-el-first' onClick={scrollFirst}>Scroll</button>
        </div>

        <div className='second-slide' ref={secondSlideRef}>
            <h1 className='second-header'>Discovering Denmark</h1>
            <CarouselOne ref={carouselOneRef} />
            <button className='btn-el-second' onClick={scrollSecond}>Scroll</button>
        </div>

        <div className='third-slide' ref={thirdSlideRef}>
            <h1 className='third-header'>...and it's culture</h1>
            <CarouselTwo  ref={carouselTwoRef} />
            <button className='btn-el-third' onClick={scrollThird}>Scroll</button>
        </div>

        <div className='fourth-slide' ref={fourthSlideRef}>
            <h1 className='fourth-header'>And here's a map of Denmark!</h1>
            <div className='map-container'>
                <Map />
            </div>
            <h6 className='footer'>Chaleta</h6>
        </div>
    </div>
  )
}