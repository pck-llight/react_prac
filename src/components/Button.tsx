import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button = ({text, onClick, disabled}: ButtonProps) => {
    return (
        <Wrapper>
            <Container>
                {text}
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding  : 0 24px;
`;

const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    border-radius: 10px;
    background-color: #2c2c2c;
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 17px;
    color: #fff;
    &:active{
        background-color: #1c1c1c;
    }
`




export default Button;