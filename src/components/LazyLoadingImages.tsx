import { useState, useRef, useEffect } from "react"

/* Why Use a Separate Component for Lazy Loading? */

/* Code reuse: If you're lazy-loading many images, it keeps things DRY.

Encapsulation: Keeps logic (observer, visibility state, etc.) out of your main component.

Maintainability: Easier to add loading indicators, blur effects, fallback handling, etc.
*/

type lazyProps = {
    src: string,
    alt: string,
}

const LazyLoadingImages = ({src}:lazyProps) => {

    // handle the lazyload images loading 

    const [ isVisible, setIsVisible ] = useState(false)
    const imgRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        setIsVisible(true)
                        observer.disconnect()
                    }
                })
            },
            { threshold: 0.1}
        );

        if(imgRef.current) {
            observer.observe(imgRef.current)
        }

        return () => {
            if(imgRef.current) { observer.unobserve(imgRef.current)}
        }
     },[])

    return (
        <figure>
            <img
                ref={imgRef}
                src={isVisible ? src : undefined}
                />
        </figure>
    )
}

export default LazyLoadingImages