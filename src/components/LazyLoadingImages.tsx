import { useState, useRef, useEffect } from "react"

type lazyProps = {
    src: string,
    alt: string,
}

// this is a component that i can use to make lazy laoding requests but i need to use props for that {src, alt, className}
const LazyLoadingImages = ({src, alt}:lazyProps) => {

    const [isVisible, setIsVisible] = useState(false)
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
                src={isVisible ? src : 'noImage'}
                alt={alt} />
        </figure>
    )
}

export default LazyLoadingImages