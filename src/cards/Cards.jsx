import React from "react";
import Card from "react-credit-cards";
import { Link } from "react-router-dom";

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { cardActions } from '_store';

import './styles.css';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper";

export {Cards};

function  Cards() {
    const dispatch = useDispatch();
    
    const { cards } = useSelector(x => x.cards);
    useEffect(() => {
        dispatch(cardActions.getAll());
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  
    return (
      <div className="App-cards">
        <h3>All Cards</h3>
        <Link to='/cards/new'>
            <button className="btn btn-primary float-right">
      Add Card
    </button>
  
        </Link>


        {Object.keys(cards).length != 0 &&
                <div className="App-cards-list">
                    <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
                    {cards.results?.map(card =>

                         <SwiperSlide>
                             <Card
                           name={card.cardHolder}
                           number={card.cardNumber}
                           expiry={card.cardExpiration}
                           
                         />
                         </SwiperSlide>
                        
                       
                         
                    )}
       </Swiper>
               </div>
            }
            {cards.loading && <div className="spinner-border spinner-border-sm"></div>}
            {cards.error && <div className="text-danger">Error loading users: {cards.error.message}</div>}

       

         
      </div>
    );
  }

