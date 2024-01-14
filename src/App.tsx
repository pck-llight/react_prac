import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';

const App = () => {
  return (
    <Screen>
      <Spacer $flex={1}/>
      <Column>
      <ImageContainer/>
      <p style={{
        fontSize: 24,
        fontWeight: 700,
        color: '#000'
      }}>아아아ㅏ아아아ㅏ앙오ㅑㅐ 안돼</p>
      </Column>
      <Spacer $flex={1}/>
      <Button text={'버튼'} onClick={()=>{
        console.log('버튼 클릭');
      }}/>
      <Spacer $height={20}/>
    </Screen>
  );
};

const Screen = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  background-color: #fff;
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`

const ImageContainer =styled.div`
width: 234px;
height: 234px;
background-color: #d9d9d9;
`;

const Spacer = styled.div<{$height?: number; $flex?: number}>`
  height: ${props => props.$height || 0}px;
  flex: ${props => props.$flex || 'none'};
`;

export default App;