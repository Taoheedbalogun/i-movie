import React from "react";
import styled from "styled-components";
import data from "../../data.json";
import { Link } from "react-router-dom";

export const MovieFile = () => {
  return (
    <Container>
      <Desc>Click card to go to a detailed page.</Desc>

      <Wrapper>
        {data?.map((props, i) => (
          <Card key={i} to={`/details/${props.myId}`}>
            <Image src={props.cardImg} />
            <Shadow />
            <Name>{props.title}</Name>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

const Desc = styled.div`
  padding-top: 30px;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;
`;
const Name = styled.div`
  position: absolute;
  top: 0px;
  color: white;
  font-size: 20px;
  padding-bottom: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  justify-content: flex-end;
  align-items: center;
  transition: all 400ms;
  border-radius: 10px;

  opacity: 0.5;

  :hover {
    opacity: 1;
  }
`;
const Shadow = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0;
  transition: all 400ms;

  :hover {
    background-color: rgba(0, 0, 0, 0);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
const Card = styled(Link)`
  width: 350px;
  height: 400px;
  background-color: grey;
  border-radius: 10px;
  transition: all 400ms;
  transform: scale(1);
  position: relative;
  margin: 10px;

  :hover {
    transform: scale(1.01);
    cursor: pointer;
    box-shadow: 1px 1px 10px 6px rgba(0, 0, 0, 0.2);
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 80px;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;
