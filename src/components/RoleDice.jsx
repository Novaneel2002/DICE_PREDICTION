// import { useState } from 'react';
import styled from 'styled-components'
import {Button} from "../styled/Button"

const RoleDice = ({
    diceValue, randomgen, rolling, setRolling
}) => {
    

    // const randomgen = () => {
    //     setRolling(true);
    //     setTimeout(() => {
    //         const newValue = Math.floor(Math.random() * 6) + 1;
    //         setDiceValue(newValue);
    //         setRolling(false);
    //         console.log(newValue);
    //     }, 500); 
        
        
        
        
    //     // Match this timeout with the duration of the CSS animation
    // };

    return (
        <Dicecontainer>
            <div className={`dice ${rolling ? 'rolling' : ''}`} onClick={randomgen}>
                <img src={`/Images/dice_${diceValue}.png`} alt={`Dice showing ${diceValue}`} />
            </div>
            <p>Click on the Dice to Roll</p>
        </Dicecontainer>
    );
};

export default RoleDice;


const Dicecontainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 48px;
align-items: center;

p{
    font-size: 24px;
}

.dice{
    cursor: pointer;
    transition: transform 1s ease-in-out;
}
.dice.rolling {
    transform: rotate(720deg);
}
`;