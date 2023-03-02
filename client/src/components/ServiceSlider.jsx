import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeader from './SectionHeader';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper';
import { useEffect, useState } from 'react';
import SingleService from './SingleService';

const ServiceSlider = (props) => {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        axios.get(props.api).then((res) => setMyData(res.data.products));
    }, []);

    return (
        <div className={`service-slider py-5 ${props.color}`}>
            <div className='container'>
                <SectionHeader title={props.name} subtitle={props.subname} />
                {/* Swiper Js */}
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}
                    loop={true}
                    pagination={false}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className='mySwiper'
                >
                    {myData
                        .filter((data) => data.rating > props.rating)
                        .map((service) => {
                            return (
                                <SwiperSlide key={service.id}>
                                    <SingleService
                                        title={service.title.slice(0, 10)}
                                        img={service.thumbnail}
                                        category={service.category}
                                        rating={service.rating}
                                        price={service.price}
                                    />
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </div>
        </div>
    );
};

export default ServiceSlider;
