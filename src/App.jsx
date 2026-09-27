import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import Home from './pages/Home'
import Location from './pages/Location'
import Itinerary from './pages/Itinerary'
import Gallery from './pages/Gallery'
import Upload from './pages/Upload'
import NavBar from './components/NavBar'

import { useState } from 'react'

const pages = [
  { id: 'home', label: 'Home' },
  { id: 'location', label: 'Location' },
  { id: 'itinerary', label: 'Itinerary' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'upload', label: 'Upload' },
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiperRef, setSwiperRef] = useState(null)

  const handleNavClick = (index) => {
    if (swiperRef) {
      swiperRef.slideTo(index)
    }
  }

  return (
    <div className="app">
      <NavBar
        pages={pages}
        activeIndex={activeIndex}
        onNavClick={handleNavClick}
      />
      <Swiper
        modules={[Pagination, Mousewheel]}
        onSwiper={setSwiperRef}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        mousewheel={{ forceToAxis: true }}
        pagination={{ clickable: true }}
        className="main-swiper"
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide><Home /></SwiperSlide>
        <SwiperSlide><Location /></SwiperSlide>
        <SwiperSlide><Itinerary /></SwiperSlide>
        <SwiperSlide><Gallery /></SwiperSlide>
        <SwiperSlide><Upload /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default App
