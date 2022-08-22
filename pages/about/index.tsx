import { Wrapper, ComponentWrapper } from '../../styles/containers'
import HeaderNav from '../../components/headerNav'
import About from "../../components/articles/about";
import Jumbotron from "../../components/jumbotron";
import React from 'react';
import Footer from "../../components/footer";

const AboutPage = () => {
  return (
        <Wrapper>
          <HeaderNav />
          <Jumbotron
              titleOne="CIMUN"
              titleTwo="XIX"
              subTitle="THE 19TH ANNUAL CHICAGO INTERNATIONAL MODEL UNITED NATIONS CONFERENCE"
              height={85}
          />
          <ComponentWrapper margins={"0 3.9375vw 0 3.9375vw"}>
            <About/>
          </ComponentWrapper>
          <Footer />
        </Wrapper>
)
}

export default AboutPage;
