import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";

const Test = () => {
    const [score, setScore] = useState<number>(0);
    const [step, setStep] = useState<number>(0);
    const imgUrl = [
        "https://image.fmkorea.com/files/attach/new/20200725/486616/239936424/3004712650/b4ffc5a1148b00d9cd00e79a05635748.jpg",
        "https://www.public25.com/news/photo/201907/144_151_2026.jpg",
        "https://i.namu.wiki/i/_zRpJit2Z5RzMDonmLavxyH_E3QIEPDks48joI_g2iaQ3iAmKhpnWj2N0mHkNeBU_2AouOiiFxZRM4-Pig10vw.webp",
        "https://i.ytimg.com/vi/jD3cixcHCZs/maxresdefault.jpg",
        "https://m.comics-art.co.kr/web/product/big/202207/7abc1b159d66806e6274cd7e453031b3.jpg",
        "https://cdn.imweb.me/upload/S2023021593b269b4a4add/e0ed1a2d0b3e7.jpg",
        "https://dszw1qtcnsa5e.cloudfront.net/community/20231110/49fc06cf-fd5d-4b8c-9318-420d0fbdf121/image105.png",
        "https://opgg-com-image.akamaized.net/attach/images/20200807071814.1345471.jpg",
        "https://img2.sbs.co.kr/img/sbs_cms/WE/2018/03/19/WE58016857_ori.jpg",
        "https://pbs.twimg.com/media/FSiy-29aAAAzW6g.jpg"
    ];
    const qes = [
        "최근 1주일 내에 애니를 10편이상 시청했다.",
        "15초 안에 애니 캐릭터 이름 10개 이상 말할 수 있다.",
        "게임(원신, 블루아카이브등)이나 애니메이션 캐릭터를 프로필 사진으로 설정한 적이있다.",
        "노래방에서 애니 노래를 5곡이상 부를 수 있다.",
        "캐릭터 피규어를 구매해본적이있다.",
        "코믹월드 / 페스티벌에 가본적이있다.",
        "가게 또는 음식점에서 콜라보 제품을 구매하거나 찾아 본 적이 있다.",
        "캐릭터에 과몰입해서 감정을 표현한 적이 있다.(과몰입한 정도)",
        "오픈채팅, 갤러리등 관련 커뮤니티를 이용한다.(자주 이용하는 정도)",
        "일본어를 읽을 순 없지만 알아 듣는 말이 많다."
    ];
    const navigate = useNavigate()
    const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (step === 10) {
            navigate("/result", {
                state: {score: score,}
            });
        }
    }, [step, navigate, score])


    return (
        <Screen>
            <Spacer $height={20}/>
            <Column>
                <ImageContainer src={imgUrl[step]} onLoad={() => setIsImgLoaded(true)}/>
            </Column>
            {isImgLoaded && <>
              <Spacer $height={20}/>
              <Quiz>{qes[step]}</Quiz>
              <Spacer $height={20}/>
              <Button text={"매우 그렇다"} onClick={() => {
                  setScore(score + 5);
                  setStep(step + 1);
                  setIsImgLoaded(false);
              }}/>
              <Button text={"그렇다"} onClick={() => {
                  setScore(score + 4);
                  setStep(step + 1);
                  setIsImgLoaded(false);

              }}/>
              <Button text={"조금그렇다"} onClick={() => {
                  setScore(score + 3);
                  setStep(step + 1);
                  setIsImgLoaded(false);

              }}/>
              <Button text={"그렇지 않다"} onClick={() => {
                  setScore(score + 2);
                  setStep(step + 1);
                  setIsImgLoaded(false);

              }}/>
              <Button text={"매우 그렇지 않다"} onClick={() => {
                  setScore(score + 1);
                  setStep(step + 1);
                  setIsImgLoaded(false);

              }}/>
            </>}
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

export const ImageContainer = styled.img`
  display: flex;
  width: 30dvw;
//   height: auto;
  aspect-ratio: 3/2;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 90dvw;
  }
`;

const Quiz = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  //background-color: #fff;
`;

const Spacer = styled.div<{ $height?: number; $flex?: number }>`
  height: ${props => props.$height || 0}px;
  flex: ${props => props.$flex || 'none'};
`;

export default Test;