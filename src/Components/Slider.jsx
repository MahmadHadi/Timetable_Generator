import React, { useRef } from "react";

const Slider = ({ days }) => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -sliderRef.current.offsetWidth,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: sliderRef.current.offsetWidth,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative w-full">
            <button
                onClick={scrollLeft}
                className="absolute left-0 bg-gray-200 p-2"
            >
                ◀
            </button>
            <div
                ref={sliderRef}
                className="flex overflow-x-auto scroll-smooth w-full"
            >
                {days.map((day, index) => (
                    <div key={index} className="min-w-[33.33%] p-4">
                        {/* Map over the day's timetable here */}
                        <h2>{day.name}</h2>
                        {day.schedule.map((item, idx) => (
                            <Card key={idx} {...item} />
                        ))}
                    </div>
                ))}
            </div>
            <button
                onClick={scrollRight}
                className="absolute right-0 bg-gray-200 p-2"
            >
                ▶
            </button>
        </div>
    );
};

export default Slider;
