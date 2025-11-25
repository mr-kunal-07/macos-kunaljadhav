import useWindowStore from '#store/Window'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import React, { useLayoutEffect, useRef, useState } from 'react'

const windowWrapper = (Component, WindowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore()
        const { isOpen, zIndex } = windows[WindowKey]
        const ref = useRef(null)
        const [shouldRender, setShouldRender] = useState(isOpen)
        const prevIsOpen = useRef(isOpen)

        useGSAP(() => {
            const el = ref.current
            if (!el) return

            // Opening animation
            if (isOpen && !prevIsOpen.current) {
                setShouldRender(true)
                el.style.display = 'block'

                gsap.fromTo(
                    el,
                    {
                        scale: 0.8,
                        opacity: 0,
                        y: 40,
                        filter: 'blur(8px)'
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        duration: 0.35,
                        ease: 'power2.out'
                    }
                )
            }

            // Closing animation
            if (!isOpen && prevIsOpen.current) {
                gsap.to(el, {
                    scale: 0.8,
                    opacity: 0,
                    y: 40,
                    filter: 'blur(8px)',
                    duration: 0.3,
                    ease: 'power2.in',
                    onComplete: () => {
                        el.style.display = 'none'
                        setShouldRender(false)
                    }
                })
            }

            prevIsOpen.current = isOpen
        }, [isOpen])

        useGSAP(() => {
            const el = ref.current
            if (!el) return

            const [instance] = Draggable.create(el, { onPress: () => focusWindow(WindowKey) })

            return () => instance.kill()
        }, [])

        useLayoutEffect(() => {
            const el = ref.current
            if (!el) return

            // Initial state without animation
            if (!prevIsOpen.current && !isOpen) {
                el.style.display = 'none'
                setShouldRender(false)
            }
        }, [])

        return (
            <section
                id={WindowKey}
                ref={ref}
                style={{ zIndex }}
                className='absolute'
                onClick={() => focusWindow(WindowKey)}
            >
                {shouldRender && <Component {...props} />}
            </section>
        )
    }

    Wrapped.displayName = `windowWrapper(${Component.displayName || Component.name || 'Component'})`

    return Wrapped
}

export default windowWrapper