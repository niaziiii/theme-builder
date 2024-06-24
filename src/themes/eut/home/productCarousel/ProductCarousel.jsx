'use client'
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRating from "./ratingComponent/RatingComponent";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
    
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
        // Handle the error, e.g., set an error state or show an error message to the user
      }
    };
    fetchProducts()
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1, 
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
  };

  return (
    <>
      <div className="container mx-auto">
      <div className="flex items-center justify-between my-5">
        <div className=" flex items-center justify-start gap-3">
          <h3 className="md:text-[25px] text-[#242124] text-lg font-[500]">
            Buy It Again
          </h3>
          <span className="text-[12px] text-[#A6CE39]">
           View All & Manage
          </span>
        </div>
        <span className="paragraf">1 of 6 pages</span>
      </div>
      <div className="m-auto slider-container">
        <Carousel
          responsive={responsive}
          infinite
          draggable={false}
          arrows
          swipeable 
          autoPlay={true}
          autoPlaySpeed={2000}
          pauseOnHover
          renderArrowsWhenCenter={true} 
          removeArrowOnEnd 
        >
          {products.map((item) => (
            <div key={item.id} className="bg-white h-auto text-black">
              <div className="flex justify-center items-center py-2">
                <img src={item.image} alt={item.title} className="h-44 w-44" />
              </div>
              <div className="flex flex-col gap-2 py-2 px-4">
                <p className="font-medium text-[15px] text-[#242124] m-0">{item.title}</p>
                <StarRating />
                <p className="font-bold text-[14px] m-0">Price: ${item.price}</p>
                <p className="m-0 paragraf">
                  Get it by <b>Wednesday, Nov 8</b>
                  <br />
                  Free Shipping on orders over $25 by <bold>Amazon</bold>
                </p>
                <div className="flex ">
                  <p className="bg-[#0477BE] text-[14px] m-0 text-white px-2 py-1 rounded-md font-medium w-fit">
                    27% off
                  </p>
                  <p className="text-[#A6CE39] text-[14px] m-0 px-2 pb-1 rounded-md font-medium w-fit">
                    Deal
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      </div>

      <div className="container mx-auto py-7 mt-7 border-t">
      <div className="flex items-center justify-between">
        <div className=" flex items-center justify-start gap-3">
          <h3 className="md:text-[25px] text-[#242124] text-lg font-[500]">
            Our browsing history
          </h3>
          <span className="text-[12px] text-[#A6CE39]">
            View or edit your browsing history
          </span>
        </div>
        <span className="paragraf">1 of 6 pages</span>
      </div>
      <div className="m-auto slider-container mt-10">
        <Carousel
          responsive={responsive}
          infinite
          draggable={false} 
          arrows
          swipeable 
          autoPlay={true}
          autoPlaySpeed={2000}
          pauseOnHover
          renderArrowsWhenCenter={true} 
          removeArrowOnEnd
        >
          {products.map((item) => (
            <div key={item.id} className="bg-white text-black">
              <div className="flex justify-center items-center py-4">
                <img src={item.image} alt={item.title} className="h-44 w-44" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      </div>
    </>
  );
};

export default ProductCarousel;
