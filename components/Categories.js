import { Splide, SplideSlide } from '@splidejs/react-splide'

import shoes from './../public/images/categories/Sneakers.png'
import furniture from './../public/images/categories/Furniture.png'
import kitchen from './../public/images/categories/Kitchen.png'


export default function Categories() {
    
    let splideSettings = '{"type": "loop","perPage": 4,"arrows": false, "pagination":false}'


    return (
        <div className='categories-wrapper container-fluid'>
            <Splide aria-label="My Favorite Images"  data-splide={splideSettings}>
                <SplideSlide className='catgories-item'>
                    <a href="/test"><img src={shoes.src} alt="Image 1" /></a> 
                    <label>Shoes</label>
                </SplideSlide>
                <SplideSlide  className='catgories-item'>
                    <a href="/test"><img src={furniture.src} alt="Image 2"/></a>
                    <label>Furniture</label>
                </SplideSlide>
                <SplideSlide  className='catgories-item'>
                <a href="/test"><img src={kitchen.src} alt="Image 3"/></a>
                    <label>Kitchen</label>
                </SplideSlide>
            </Splide>
        </div>
    )
}