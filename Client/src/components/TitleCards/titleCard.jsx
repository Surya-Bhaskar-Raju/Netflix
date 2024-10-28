    import React, { useEffect, useRef } from 'react'
    import './titleCard.css';
    import cards_data from '../../assets/cards/Cards_data';
    import { useState } from 'react'; 

    const TitleCard = ({Title}) => {
        const CardsRef = useRef();
        const [shuffledCards,setShuffledCards] = useState([]);

        const handleWheel = (e) => {
            e.preventDefault();
            CardsRef.current.scrollLeft += e.deltaY;
        }

        useEffect(() => {
            CardsRef.current.addEventListener('wheel', handleWheel)
            return ()=>CardsRef.current.removeEventListener('wheel',handleWheel)
        }, []);

        useEffect(()=>{
            setShuffledCards(shuffledArray(cards_data))
        },[])
        
        const shuffledArray=(Arr)=>{
            let newArr = [...Arr];
            for (let i=newArr.length-1;i>0;i--){
                const j = Math.floor(Math.random()*(i+1));
                [newArr[i],newArr[j]]=[newArr[j], newArr[i]];
            }
            return newArr
        }
        return (
            <div className='TitleCards'>
                <h2>{Title ? Title : "Popular On Netflix"}</h2>
                <div className='card-list' ref={CardsRef}>
                    {shuffledCards.map((card, index) => {
                        return (
                            <div className='card' key={index}>
                                <img src={card.image} />
                                <p>{card.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
    )
    }

    export default TitleCard