import React from 'react'
import Carousel from 'react-multi-carousel';
import {connect} from 'react-redux'
import 'react-multi-carousel/lib/styles.css';

const carousel2 = ({products}) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      }
    return (
        <div>
             <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
           <div className='carousel'>
                    {
                        products.map((item,i)=>{
                            const {image,id}=item
                            return(
                                <div key={id} className='main-wrapper'>
                                   <img src={image} alt={image}/>
                                </div>
                            )
                        })
                    }
           </div>
            </Carousel>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
         products:state.shop.products
   }
}
export default connect(mapStateToProps)(carousel2)
