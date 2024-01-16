import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";
import Test from "./Test";

const Home = () => {
    const navigate = useNavigate()
    return (
        <Screen>
            <Spacer $flex={1}/>
            <Column>
                <ImageContainer src={"https://i1.ruliweb.net/ori/23/02/03/18616d0e972568365.gif"}/>
                <p style={{
                    textAlign: 'center',
                    width: '100',
                    fontSize: 30,
                    fontWeight:700
                }}>씹덕 테스트</p>
            </Column>
            <Spacer $flex={1}/>
            <Button text={'시작하기!'} onClick={() => {
                navigate("/test");
            }}/>
            <Spacer $height={20}/>
        </Screen>
    );
};

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  //background-color: #fff;
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`

const ImageContainer = styled.img`
  width: 234px;
  height: 234px;
  background-position: center;
  background-size: cover;
  object-fit: cover;
`;

const Spacer = styled.div<{ $height?: number; $flex?: number }>`
  height: ${props => props.$height || 0}px;
  flex: ${props => props.$flex || 'none'};
`;

export default Home;