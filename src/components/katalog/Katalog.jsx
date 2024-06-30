import React from 'react'
import './Katalog.scss'
import { FaArrowRight } from "react-icons/fa6";
import Products from '../products/Products';


const Katalog = () => {
  return (
    <>
      <div className="katalog">
          <div className="container">
             <div className="katalog__title">
                 <h2>Каталог</h2>
                 <button>Весь каталог <FaArrowRight />
                 </button>
             </div>
               <Products/>
               <div className="katalog__title__bottom">
                    <button>Весь каталог <FaArrowRight />
                    </button>
               </div>
          </div>
      </div>
    </>
  )
}

export default Katalog