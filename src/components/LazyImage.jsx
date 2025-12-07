import { useState, useEffect, useRef } from 'react';

const LazyImage = ({
    src,
    alt,
    className = '',
    loaderClassName = '',
    fallbackSrc = '',
    ...props
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isInView, setIsInView] = useState(false);
    const [error, setError] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '50px', // Start loading slightly before image enters viewport
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);

    const handleLoad = () => {
        setIsLoading(false);
        setError(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setError(true);
    };

    return (
        <div ref={imgRef} className={`relative ${loaderClassName}`}>
            {/* Loading Spinner */}
            {isLoading && isInView && (
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 rounded-xl backdrop-blur-sm z-10">
                    <div className="makeup-loader">
                        <div className="lipstick-spinner"></div>
                    </div>
                </div>
            )}

            {/* Image */}
            {isInView && (
                <img
                    src={error && fallbackSrc ? fallbackSrc : src}
                    alt={alt}
                    className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
                    onLoad={handleLoad}
                    onError={handleError}
                    {...props}
                />
            )}

            {/* Placeholder before in view */}
            {!isInView && (
                <div className={`${className} bg-secondary/30`} />
            )}
        </div>
    );
};

export default LazyImage;
