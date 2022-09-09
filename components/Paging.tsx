import React from 'react';
import styled from "styled-components";
import next_page_icon from "../public/next_page_icon.png"
import previous_page_icon from "../public/previous_page_icon.png"
import Image from "next/image";
import {useRouter} from "next/router";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const PageText = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-left: 12px;
  margin-right: 12px;
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 5px;
  background-color: #EBEBEB;
  border-width: 0px;
`

const Paging: React.FC = () => {
    const router = useRouter();
    const currentPage = Number(router.query.page) || 1;
    return (
        <Container>
            <Button onClick={() => {
                currentPage > 1 && router.push(`/?page=${currentPage - 1}`)
            }}>
                <Image src={previous_page_icon} width={12} height={14} />
            </Button>
            <PageText>{currentPage}</PageText>
            <Button onClick={() => router.push(`/?page=${currentPage + 1}`)}>
                <Image src={next_page_icon} width={12} height={14} />
            </Button>
        </Container>
  );
};

export default Paging;
