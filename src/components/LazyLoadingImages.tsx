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

const LazyLoadingImages = ({src, alt}:lazyProps) => {

    // handle the lazyload images loading 

    const [ isVisible, setIsVisible ] = useState(false)
    const [ isLoaded, setIsLoaded ] = useState(false)
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
        <>
        {!isLoaded && (
        <div className="min-h-[40vh] flex items-center justify-center bg-gray-100">
          <div className="w-6 h-6 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        )}
            <figure>
                <img
                    ref={imgRef}
                    src={isVisible ? src : 'noImage'}
                    alt={alt}
                    onLoad={() => setIsLoaded(true)} />
            </figure>
        </>
    )
}

export default LazyLoadingImages