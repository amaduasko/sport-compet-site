import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import { trophiesInfo } from '../../constants/constants';
import './head.style.scss';

const Title = styled.h1`
    font-family: "Bebas Neue", cursive;
    font-size: 90px;
    line-height: 90px
    text-transform: uppercase;
    color: #fff;
`;

const SubTitle = styled.h2`
  font-size: 50px;
  line-height: 60px;
  font-family: 'MuseoSansCyrl';
  color: #fff;
`;

const ListItem = styled.li``;
const Button = styled.button`
  background-color: #ff3754;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-family: 'MuseoSansCyrl';
  font-size: 19px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.155em;
  padding: 3% 10%;
  text-transform: uppercase;
`;

export const Head = () => (
  <Container className='pb-5'>
    <Title>lorem ipsum dolor sit amet</Title>
    <SubTitle>
      <span style={{ color: '#FF3754' }}>lorem</span> ipsum dolor sit amet
    </SubTitle>
    <ul className='list-unstyled mb-5'>
      {trophiesInfo.map((item, index) => (
        <ListItem key={index} className={index === 2 ? 'mt-3 mb-3' : null}>
          <img
            className={index === 2 ? 'mr-5 col-2 pr-0' : 'mr-5 col-2'}
            src={item.icon}
            alt='award'
          />
          <span
            className={index === 0 ? 'list-item-important p-2' : 'link-text'}
          >
            {item.text}
          </span>
        </ListItem>
      ))}
    </ul>
    <Button className=' mt-5 mb-4'>lorem ipsum dolor</Button>
  </Container>
);
