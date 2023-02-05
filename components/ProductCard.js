import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Card } from 'react-bootstrap'

import shoes from './../public/images/products/shoes-item.png'

export default function ProductCard(props) {
    const router = useRouter()
    const product_url = '/product/'
    const [products, setProducts] = useState(props.products || [])
    const { searchQuery } = props
    
    useEffect(() => {
        setProducts(props.products)
    }, [searchQuery])

    function goTo(slug) {
        router.push(`${product_url}${slug}`)
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                {
                    products.map((product) => {

                        return <>
                        <Card className='product-card col-lg-sm-6 cold-md-4 col-lg-3 col' onClick={() => goTo(product.url)}>
                            <Card.Img variant="top" alt={shoes.src} src={shoes.src} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Footer className='product-card__footer'>
                                    <div className='product-card__price'>P{product.price}</div>
                                    <div className='product-card__sold'>1k sold</div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                        </>
                    })
                }
                
                <button className='shop-button' type='button'>See more</button>
            </div>

        </div>
    )
}