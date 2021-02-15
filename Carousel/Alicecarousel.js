import React from 'react';
import {connect} from 'react-redux'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css'
// custom css
// https://www.npmjs.com/package/react-alice-carousel

const Alicecarousel = ({products}) => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    }
    return (
        <div>
             <AliceCarousel
                mouseTracking
                items={
                    products.map((item)=>{
                        const {image,id}=item
                        return(
                            <div key={id} className='main-wrapper'>
                               <img src={image} alt={image}/>
                            </div>
                        )
                    })
                }
                responsive={responsive}
            />
                    
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
         products:state.shop.products
   }
}
export default connect(mapStateToProps)(Alicecarousel)
