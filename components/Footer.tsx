import React from 'react';
import {useRouter} from "next/router";
import Image from "next/image";
import styled from "styled-components";
import {Button} from "./Paging";
import up_icon from "../public/up_icon.png";

const Container = styled.div`
  border-top: 1px solid #DDDDDD;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const LeftLayout = styled.div`
  width: 50%;
`

const YourNameText = styled.p`
  font-size: 16px;
  font-weight: 600;
`

const YourNoteText = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #929292;
`


const Footer: React.FC = () => {
    const router = useRouter();
    return (
      <Container>
          <LeftLayout>
              <YourNameText>Your name</YourNameText>
              <YourNoteText>A few words about how you found Coinable and how did you feel about this task :)</YourNoteText>
          </LeftLayout>
          <Button onClick={() => router.push(router.pathname+"#top")}>
              <Image src={up_icon} width={24} height={24} />
          </Button>
      </Container>
    );
};

export default Footer;
