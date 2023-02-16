import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export const sliderProperties = {
    prevArrow: (
        <button datatype="prev" className="slider-button">
            <GrFormPrevious size={30} />
        </button>
    ),
    nextArrow: (
        <button datatype="next" className="slider-button">
            <GrFormNext size={30} />
        </button>
    ),
    indicators: false,
    slidesToScroll: 1,
    slidesToShow: 2,
    infinite: true,
    duration:1000
};