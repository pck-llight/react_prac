import React from 'react';
import {useLocation} from "react-router-dom";
import styled from "styled-components";

const Result = () => {
    const location = useLocation()
    // const score: number = 50;
    let score_check;
    const score = location.state.score;
    const rst_img_list = [
        "https://scontent-lax3-1.cdninstagram.com/v/t51.2885-19/412056711_1123076915395215_5600843426910152731_n.jpg?stp=dst-jpg_s120x120&_nc_cat=105&ccb=1-7&_nc_sid=294b3b&_nc_ohc=r5X5UiUS6ioAX9_FDdW&_nc_ht=scontent-lax3-1.cdninstagram.com&oh=00_AfBhXaXUNxv1MUF-hH9h-hJx9660r-Q_BmjOor-Zyo14LQ&oe=65B2F5E6", // 50점 => 채호짱
        "https://img.onnada.com/2022/1218/662034559_14ec8950_911181.gif", //40점 이상
        "https://media.bunjang.co.kr/product/219391393_1_1683589087_w360.jpg", //30점 이상
        "https://qi-o.qoo10cdn.com/goods_image_big/1/4/0/5/11377231405c_l.jpg", //20점 이상
        "https://mblogthumb-phinf.pstatic.net/MjAyMzA0MjVfMzMg/MDAxNjgyNDE2ODQ3MDMx.GvYSuCqSdAfqfBCYqcKL8ANm9AMZtAnZ8VaMzW_KO40g.j2vkY2WsCOIfnZZRT1g4qJEAF_lXFxLxDL1kEfiNGmQg.PNG.dbdnrl7/%EB%B4%87%EC%B9%98%EB%8D%94%EB%9D%BD_5.png?type=w800", //10점 이상
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-m1PV32KIGplD01glx5lzkvPcVGDVq4btQ&usqp=CAU" //10점 미만
    ];
    const rst_text_list = [
        "당신은 유채호~♥", // 50점!!
        "당신은 킹갓제너럴엠페러마제스티골져스프레셔스뷰리풀하이클래스엘레강스럭셔리클래식지니어스원더풀러블리월드탑클래스\"씹덕\"", //40점 이상
        "당신은 엄청난 씹덕!!", //30점 이상
        "평범한씹덕.", //20점 이상
        "음 애니에 관심이 없군요", //10점 이상
        "당신은 인싸입니까?" //10점 미만
    ]

    if(score == 50) score_check = 0;
    else if (score >= 40) score_check = 1;
    else if (score >= 30) score_check = 2;
    else if (score >= 20) score_check = 3;
    else if (score >= 10) score_check = 4;
    else score_check = 5;

    return (
        <Screen>
            <Spacer $height={64}/>
            <ImageContainer src={rst_img_list[score_check]}/>
            <Spacer $height={48}/>
            <Score>★{score}점★</Score>
            <Spacer $height={24}/>
            <Text>{rst_text_list[score_check]}</Text>
            <Spacer $flex={1}/>
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

const Score = styled.div`
  width: 100%;
  //height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 64px;
  font-weight: 700;
  
`;

const Text= styled.div`
  width: 100%;
  //height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 500;
  padding: 0 24px;
`;
const ImageContainer = styled.img`
  width: 70dvw;
  height: auto;
  display: flex;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  margin: 0 auto;
`;

const Spacer = styled.div<{ $height?: number; $flex?: number }>`
  height: ${props => props.$height || 0}px;
  flex: ${props => props.$flex || 'none'};
`;


export default Result;