import React, { useState, useEffect, useRef } from 'react';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';

const HeroSection = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % 3); // Adjust 3 to the total number of images
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        setSlideIndex(index);
    };
    const containerRef = useRef(null);

        useEffect(() => {
            const resizeHandler = () => {
                if (containerRef.current) {
                    const containerWidth = containerRef.current.offsetWidth;
                    const containerHeight = containerWidth * 0.3; // Adjust 0.3 to the desired height ratio
                    containerRef.current.style.height = `${containerHeight}px`;
                }
            };

            resizeHandler(); // Initial call to set the height
            window.addEventListener('resize', resizeHandler);

            return () => window.removeEventListener('resize', resizeHandler);
        }, []);
    return (
        <div ref={containerRef} style={{ width: '80vw', height: '40vh', margin: '0 auto', border: '2px solid black', borderRadius: '10px', position: 'relative', overflow: 'hidden' }}>
            <div className="slideshow-container">
                <div className="mySlides fade" style={{ display: slideIndex === 0 ? 'block' : 'none' }}>   
                    <img src={img1} style={{ width: '100%', height: '240px', objectFit: 'fill', objectPosition: 'center' }} alt="Nature" />
                    <div className="numbertext"style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10%' }}>1 / 3</div>
                    <div className="text" style={{ height: '10%'}}>Caption Text 1</div>
                </div>

                <div className="mySlides fade" style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
                    <img src={img2} style={{ width: '100%', height: '240px', objectFit: 'fill', objectPosition: 'center' }} alt="Snow" />
                    <div className="numbertext" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>2 / 3</div>
                    <div className="text">Caption Text 2</div>
                </div>

                <div className="mySlides fade" style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
                    <img src={img3} style={{ width: '100%', height: '240px', objectFit: 'fill', objectPosition: 'center'  }} alt="Mountains" />
                    <div className="numbertext" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>3 / 3</div>
                    <div className="text">Caption Text 3</div>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
                <span className={`dot ${slideIndex === 0 ? "active" : ""}`} onClick={() => handleDotClick(0)}></span>
                <span className={`dot ${slideIndex === 1 ? "active" : ""}`} onClick={() => handleDotClick(1)}></span>
                <span className={`dot ${slideIndex === 2 ? "active" : ""}`} onClick={() => handleDotClick(2)}></span>
            </div>
            <style>
                {`
                    .dot {
                        height: 15px;
                        width: 15px;
                        margin: 0 5px;
                        background-color: black;
                        border-radius: 50%;
                        display: inline-block;
                        cursor: pointer;
                    }

                    .active {
                        background-color: white;
                        border: 2px solid black;
                    }
                `}
            </style>
        </div>
    );
};

export default HeroSection;
