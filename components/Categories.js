import { useState, useEffect } from 'react'
import Link from "next/link"

// third parties
import { Splide, SplideSlide } from '@splidejs/react-splide'

import shoes from './../public/images/categories/Sneakers.png'
import furniture from './../public/images/categories/Furniture.png'
import kitchen from './../public/images/categories/Kitchen.png'

// utils
import { requestOptions } from "../utils/requestOptions"


export default function Categories() {

    let splideSettings = '{"type": "loop","perPage": 4,"arrows": false, "pagination":false}'

    let [categories, setCategories] = useState([])

    useEffect(() => {
        const url = process.env.apiExternalRoute + 'categories'

        fetch(url, requestOptions('GET'))
            .then(response => response.json())
            .then((response) => {

                if (response.status === 'success') {
                    setCategories(response.data.categories)
                }
            })
    }, [])

    return (
        <div className='categories-wrapper container-fluid'>
            <Splide aria-label="My Favorite Images" data-splide={splideSettings}>
                {
                    categories.length > 0 && categories.map((category) => {
                        return <SplideSlide className='catgories-item' key={category.name}>
                            <Link href={category.url}><a><img src={shoes.src} alt="Image 1" /></a></Link>
                            <span>{category.name}</span>
                        </SplideSlide>;
                    })
                }
            </Splide>
        </div>
    )
}