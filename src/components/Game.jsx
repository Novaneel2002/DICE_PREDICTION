import styled from 'styled-components'
import TotalScore from './TotalScore';
import Number from './Number';
import RoleDice from './RoleDice';
import { useState } from 'react';
import {Button , OutlineButton} from "../styled/Button.js"
import Rules from './Rules.jsx';

const Game = ({ toggle }) => {


    const [score, setscore] = useState(0);
    const [selected, setselected] = useState();
    const [diceValue, setDiceValue] = useState(1);
    const [rolling, setRolling] = useState(false);
    const [error, seterror] = useState("");
    const [showR, setshowR] = useState(false);


    const togglerule = () => {

    }

    const generaterandom = () => {
        return Math.floor(Math.random() * 6) + 1;
    }


    const resetscore = () => {
        setscore(0);
    }
    const randomgen = () => {
        setRolling(true);
        // let newValue;
        if (!selected) {
            seterror("Select a Number first!!!");
            return;
        }
        setTimeout(() => {
            // const randomNumber = generaterandom;
            // setDiceValue((prev) => randomNumber);
            // setRolling(false);
            

            const randomNumber = generaterandom(); // Call generaterandom to get a random number
            // console.log(generaterandom);
            setDiceValue(randomNumber);
            setRolling(false);

            // Score calculation based on selected number
            if (selected === randomNumber) {
                setscore((prev) => prev + randomNumber);
            } else {
                setscore((prev) => prev - 2);
            }

            setselected(undefined);
        }, 500);




        // Match this timeout with the duration of the CSS animation
    };

    return (
        <Maincontainer>
            <div className="top">
                <TotalScore score={score} />
                <Number seterror={seterror} error={error} selected={selected} setselected={setselected} />
            </div>
            <RoleDice diceValue={diceValue} randomgen={randomgen} rolling={rolling} setRolling={setRolling} />
            <div className="btn">
                <OutlineButton onClick={resetscore}>Reset</OutlineButton>
                <Button
                onClick={() => setshowR((prev) => !prev)}
                >{showR ? "Hide" : "Show"} Rules</Button>
            </div>
            {showR && <Rules/>}
        </Maincontainer>
    )
}

export default Game;

const Maincontainer = styled.div`
    margin: 0px 20px;
    .top{
        display: flex;
        justify-content:space-between;
        align-items: center;
    }


    .btn{
        margin-top:40px;
        display: flex;
        flex-direction:column;
        justify-content: center;
        /* max-width: 220px; */
        align-items: center;
        gap: 10px;
    }
`


