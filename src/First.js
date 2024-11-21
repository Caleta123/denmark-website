import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollOne from './ScrollOne'

export const First = () => {

    const elementsRef = useRef(null)

    useEffect(() => {
        if (!elementsRef.current) return;

        gsap.set(elementsRef.current, { y: 0 })

        const elements = elementsRef.current.querySelectorAll('.first-p, .btn-el-first')

        gsap.set(elements, {y: 0})

        gsap.fromTo(elements, {
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

  return (
  )
}


export default First
