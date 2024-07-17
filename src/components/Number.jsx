import { useState } from "react";
import styled from "styled-components";

const Number = ({
    seterror, error,
    selected, setselected 
}) => {
    const array = [1, 2, 3, 4, 5, 6]
    const selectnumber =(value)=>{
        setselected(value);
        seterror("");
    }

    console.log(selected);
    return (
        <Numbercontainer>
            <p className="error">{error}</p>
            <div className="flex">
                {array.map((value, i) => (<Box isSelected={value === selected} onClick={() => selectnumber(value)} key={i}>{value}</Box>))}
            </div>
            <p>Select Number</p>
        </Numbercontainer>
    )
}

export default Number;

const Numbercontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    .error{
        color: red;
    }
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size:24px;
        font-weight: 700px;
    }
`

const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props) => (props.isSelected ? "black" : "white")};
color: ${(props) => (props.isSelected ? "white" : "black")};
/* border : 1px solid ${(props) => (props.isSelected ? "white" : "black")}; */
`;
