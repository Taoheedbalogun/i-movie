import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import data from "../../data.json";

export const MovieDetails = () => {
  const { id } = useParams();

  const [myData, setMyData] = useState([]);

  useEffect(() => {
    setMyData(data[id - 1]);
  }, [id]);

  return (
    <Container>
      <Background src={myData.backgroundImg} />
      <Shadow />
      <Wrapper>
        <Title>{myData?.title}</Title>
        <Image src={myData.titleImg} />
        <Sub>{myData.subTitle}</Sub>
        <Desc>{myData.description}</Desc>
      </Wrapper>
    </Container>
  );
};
const Image = styled.img`
  width: 550px;
  height: 350px;
  object-fit: contain;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 32px;
`;

const Sub = styled.div`
  font-size: 20px;
  margin: 20px 0;
`;

const Desc = styled.div`
  font-size: 23px;
  font-family: lato sans serif;
`;

const Shadow = styled.img`
  width: 100%;
  // height: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  transition: all 400ms;

  :hover {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 50px;
  padding-top: 50px;
  color: white;
  display: flex;
  flex-direction: column;
`;
const Background = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`;
