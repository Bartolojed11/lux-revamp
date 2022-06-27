import { useRouter } from 'next/router'

import { Card } from 'react-bootstrap'

import shoes from './../public/images/products/shoes-item.png'

export default function ProductCard(props) {
    const router = useRouter()
    const product_url = '/product/'

    function goTo(slug) {
        router.push(`${product_url}${slug}`)
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <Card className='product-card col-lg-sm-6 cold-md-4 col-lg-3 col' onClick={() => goTo('slug')}>
                    <Card.Img variant="top" alt={shoes.src} src={shoes.src} />
                    <Card.Body>
                        <Card.Title>Snicker I</Card.Title>
                        <Card.Footer className='product-card__footer'>
                            <div className='product-card__price'>P100</div>
                            <div className='product-card__sold'>1k sold</div>
                        </Card.Footer>
                    </Card.Body>
                </Card>
                <Card className='product-card col-lg-sm-6 cold-md-4 col-lg-3 col' onClick={() => goTo('slug')}>
                    <Card.Img variant="top" alt={shoes.src} src={shoes.src} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Footer className='product-card__footer'>
                            <div className='product-card__price'>P100</div>
                            <div className='product-card__sold'>1k sold</div>
                        </Card.Footer>
                    </Card.Body>
                </Card>
                <Card className='product-card col-lg-sm-6 cold-md-4 col-lg-3 col' onClick={() => goTo('slug')}>
                    <Card.Img variant="top" alt={shoes.src} src={shoes.src} />
                    <Card.Body>
                        <Card.Title>Snicker I</Card.Title>
                        <Card.Footer className='product-card__footer'>
                            <div className='product-card__price'>P100</div>
                            <div className='product-card__sold'>1k sold</div>
                        </Card.Footer>
                    </Card.Body>
                </Card>
                <Card className='product-card col-lg-sm-6 cold-md-4 col-lg-3 col' onClick={() => goTo('slug')}>
                    <Card.Img variant="top" alt={shoes.src} src={shoes.src} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Footer className='product-card__footer'>
                            <div className='product-card__price'>P100</div>
                            <div className='product-card__sold'>1k sold</div>
                        </Card.Footer>
                    </Card.Body>
                </Card>
                <button className='shop-button' type='button'>See more</button>
            </div>

        </div>
    )
}