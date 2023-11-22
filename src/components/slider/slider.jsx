import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

const Slider = ({ settings, children }) => {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
};

export default Slider;
