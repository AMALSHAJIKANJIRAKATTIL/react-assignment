import React from "react";
import Card from "react-credit-cards";
import { Link } from "react-router-dom";

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { cardActions } from '_store';

import './style.css'
export {Cards};

function  Cards() {
    const dispatch = useDispatch();
    
    const { cards } = useSelector(x => x.cards);
    console.log(cards);
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
                    {cards.results?.map(card =>

                         <div style={{marginTop:'10px'}} className='cards'>
                         <Card
                           name={card.cardHolder}
                           number={card.cardNumber}
                           expiry={card.cardExpiration}
                           
                         />
                         </div>
                         
                    )}
               </div>
            }
            {cards.loading && <div className="spinner-border spinner-border-sm"></div>}
            {cards.error && <div className="text-danger">Error loading users: {cards.error.message}</div>}

       

         
      </div>
    );
  }

