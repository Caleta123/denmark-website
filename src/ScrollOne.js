import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'


export const ScrollOne = ({ elementsRef }) => {
        gsap.set(elementsRef.current, {y: 0} )
        const buttonRef = useRef(null)
        useEffect(() => {
            if (buttonRef.current) {
                gsap.set(buttonRef.current, { y: 0 })
            }
         }, [])
         
        const scrollFirst = () => {
            if (elementsRef.current) {
                gsap.set(elementsRef.current, { y: 0 })

                gsap.fromTo(elementsRef.current, {
                    y: 0,
                }, {
                    y: "-100vh",
                    duration: 2,
                    ease: 'power2.inOut',
                })
                gsap.to(elementsRef.current.querySelectorAll('.first-p, .btn-el-first'), {
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.3
                })
            }
        
        }
    return (
        <button className='btn-el-first' data-speed="0.7" ref={buttonRef} onClick={scrollFirst}>Scroll</button>
    )
}


export default ScrollOne

