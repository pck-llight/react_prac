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
        "https://cdn.discordapp.com/attachments/1092812264484122656/1196480856395632740/image.png?ex=65b7c8a1&is=65a553a1&hm=b836259db092eed24571feb936e1da6fe85bcf6b79028700a87c0ba31ce57b16&",
        "https://i.ytimg.com/vi/jD3cixcHCZs/maxresdefault.jpg",
        "https://m.comics-art.co.kr/web/product/big/202207/7abc1b159d66806e6274cd7e453031b3.jpg",
        "https://cdn.manzlab.com/news/photo/202312/30415_71141_3537.jpg",
        "https://dszw1qtcnsa5e.cloudfront.net/community/20231110/49fc06cf-fd5d-4b8c-9318-420d0fbdf121/image105.png",
        "https://opgg-com-image.akamaized.net/attach/images/20200807071814.1345471.jpg",
        "https://cdn.discordapp.com/attachments/1082175400626630697/1196465424569749544/20190512030351.png?ex=65b7ba42&is=65a54542&hm=560a25f249646f3492f58e8e48675705e352abf1bcafd7588e897a2f05e00b49&",
        "https://pbs.twimg.com/media/FSiy-29aAAAzW6g.jpg"
    ];
    const qes = [
        "최근 1주일 내에 애니를 ?편이상 시청했다.",
        "15초 안에 애니 캐릭터 이름 10개 이상 말할 수 있다.",
        "게임이나 애니메이션 캐릭터를 프로필 사진으로 설정한 적이있다.",
        "노래방에서 애니 노래를 5곡이상 부를 수 있다.",
        "캐릭터 피규어를 구매해본적이있다.",
        "코믹월드 / 페스티벌에 가본적이있다.",
        "가게 또는 음식점에서 콜라보 제품을 구매하거나 찾아 본 적이 있다.",
        "캐릭터에 과몰입해서 감정을 표현한 적이 있다.(과몰입한 정도)",
        "오픈채팅, 갤러리등 관련 커뮤니티를 이용한다.(자주 이용하는 정도)",
        "일본어를 읽을 순 없지만 알아 듣는 말이 많다."
    ];
    const navigate = useNavigate()
    useEffect(() => {
        // setScore(0);
        return ()=>console.log(score);
    }, [score]);

    return (
        <Screen>
            <Spacer $height={20}/>
            <Column>
                <ImageContainer src={imgUrl[step]}/>
                <Quiz>{qes[step]}</Quiz>
                <Spacer $flex={1}/>
            </Column>
            <Button text={"매우 그렇다"} onClick={() => {
                console.log('fuck');
                setScore(100);
                console.log('score: ', score)
                // setScore(score + 5);
                if (step == 9) {
                    navigate("/result", {
                        state: {score: score,}
                    });
                }
                setStep(step + 1);
            }}/>
            <Button text={"그렇다"} onClick={() => {
                setStep(step + 1);
                setScore(score + 4);
            }}/>
            <Button text={"조금그렇다"} onClick={() => {
                setStep(step + 1);
                setScore(score + 3);
            }}/>
            <Button text={"그렇지 않다"} onClick={() => {
                setStep(step + 1);
                setScore(score + 2);
            }}/>
        </Screen>
    );
};

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`

const ImageContainer = styled.img`
  display: flex;
  width: 70dvw;
  //height: 40dvh;
  background-position: center;
  background-size: cover;
  object-fit: cover;
`;

const Quiz = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  //background-color: #fff;
`;

const Spacer = styled.div<{ $height?: number; $flex?: number }>`
  height: ${props => props.$height || 0}px;
  flex: ${props => props.$flex || 'none'};
`;

export default Test;