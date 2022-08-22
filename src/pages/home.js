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
                <img src={banner2} alt="banner2" />
                <img src={banner3} alt="banner3" />
                <img src={banner4} alt="banner4" />
            </MainWrapper>
        </Body>
    )
}
const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  max-width: 1800px;
  margin: 0px;
`
const MainWrapper = styled.div`
  @media screen and (min-width: 200px) and (max-width: 1800px) {
    height:604px;
    margin-bottom: 64px;
  
  img {
    width:100%;
    height:604px;
    object-fit: fill;
  }
  }
  
`
export default Home;