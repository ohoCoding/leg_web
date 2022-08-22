import styled from "styled-components";
import Header from "./common/Header";
import banner1 from "assets/images/banner1.png";
import banner2 from "assets/images/banner2.png";
import banner3 from "assets/images/banner3.png";
import banner4 from "assets/images/banner4.png";

const { ScrollTopButton } = require("components/ScrollToTop")

const Home = () => {
  return (
    <Body>
      <ScrollTopButton />
      <Header />
      <MainWrapper>
        <img src={banner1} alt="banner1" />
      </MainWrapper>
      <MainWrapper>
        <img src={banner2} alt="banner2" />
      </MainWrapper>
      <MainWrapper>
        <img src={banner3} alt="banner3" />
      </MainWrapper>
      <MainWrapper>
        <img src={banner4} alt="banner4" />
      </MainWrapper>
    </Body>
  )
}
const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  margin: 0px;
`
const MainWrapper = styled.div`
{
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc( 4000 / 7500 * 100%);
  img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
  }
}
`
export default Home;