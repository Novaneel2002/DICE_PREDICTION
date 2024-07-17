import styled from 'styled-components'
// import {Button} from ".../styled/Button"
const Start = ({toggle}) => {
    return (
        <Container>
            <div>
                <img src="/Images/dices1.png" alt="" />
            </div>
            <div className='content'>
                <h1>DICE GAME</h1>
                <Button  onClick={toggle}>PLAY GAME</Button>
            </div>

        </Container>

    )
}

export default Start;


const Container = styled.div`
    max-width: 1500px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content{
        display: flex;
        flex-direction: column;
        align-items: end;
    }
    .content h1{
        font-size: 96px;
        font-weight: 700;
        white-space: nowrap;
    }
`;

const Button = styled.button`

color: white;
padding: 10px 18px;
min-width: 220px;
border: none;
background: #000000;
border-radius: 5px;
border: 1px solid transparent;
transition: 0.4s background ease-in;

&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background  ease-in;
    
}
`;