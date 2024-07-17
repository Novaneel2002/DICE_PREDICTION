import styled from "styled-components";

const Rules = () => {
    return (

        <Rulescontainer>
            <h2>How to play Dice Game</h2>
            <hr />
            <div className="text">
                <ul>
                    <li>Select a Number on the top corner of the screen to make a prediction.</li>
                    <li>Click the Dice to Roll it.</li>
                    <li>If the predicted value and the Dice value are same then the score will be incremented with the predicted value.</li>
                    <li>2 points will be deducted for every wrong prediction.</li>
                </ul>
            </div>
        </Rulescontainer>
    )
}

export default Rules;


const Rulescontainer = styled.div`
background-color: #fbf1f1;
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
padding: 20px;
border-radius:10px ;
h2{
    font-size: 24px;
    /* font-weight: bold; */

}

.text{
    margin-top: 24px;
}



`;