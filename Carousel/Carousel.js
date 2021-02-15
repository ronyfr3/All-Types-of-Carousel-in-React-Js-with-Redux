import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux';
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'
import './Carousel.css'

const Carousel = ({products}) => {
    const [currentImage,setCurrentImage] =useState(0)
    let length = products.length
    const leftbtn=()=>{
        setCurrentImage(
            currentImage === 0 ? length-1 : currentImage-1
        )
    }
    console.log('left',currentImage)
    const rightbtn=()=>{
        setCurrentImage(
            currentImage === length-1 ? 0 : currentImage+1
        )
    }
    console.log('right',currentImage)
    useEffect(()=>{
        const timer= setInterval(()=>{
           rightbtn()
         },2000)
         return ()=>clearInterval(timer)
     })
    return (
        <div className='carousel-wrapper'>
            <span className='left' onClick={leftbtn}><AiOutlineArrowLeft/></span>
        <div className='carousel'>
            {
                products.map((item,i)=>{
                    const {image,id}=item
                    return(
                        <div>
                            {
                                i===currentImage && (
                                     <div key={id} className='main-wrapper'>
                                        <img src={image} alt={image}/>
                                      </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
        <span className='right' onClick={rightbtn}><AiOutlineArrowRight/></span>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
         products:state.shop.products
   }
}
export default connect(mapStateToProps)(Carousel)

