import styled from "styled-components";
import Header from "./common/Header";
import Modal from "components/Modal";

import mobilebanner1 from "assets/images/mobile/banner1.png";
import mobilebanner2 from "assets/images/mobile/banner2.png";
import mobilebanner3 from "assets/images/mobile/banner3.png";
import mobilebanner4 from "assets/images/mobile/banner4.png";


import banner1 from "assets/images/banner1.png";
import banner2 from "assets/images/banner2.png";
import banner3 from "assets/images/banner3.png";
import banner4 from "assets/images/banner4.png";
import banner5 from "assets/images/banner5.png";
import ceo from "assets/images/ceo.png";
import user from "assets/images/user.png";
import banner4_title from "assets/images/banner4_title.png";
import banner4_main from "assets/images/banner4_main.png";

import logo from "assets/images/logo.png";
import instagram from "assets/images/instagram.png";

import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import "css/header.css";

const { ScrollTopButton } = require("components/ScrollToTop")

const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1279px)' });

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  useEffect(() => {
    const animatedTags = document.querySelectorAll("  h2, h3, p, section img, a.button")

    animatedTags.forEach(tag => {
      tag.style.opacity = 0
    })

    const fadeIn = function () {
      let delay = 0.2
      animatedTags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top;
        const tagBottom = tag.getBoundingClientRect().bottom;

        if (tagTop < window.innerHeight && tagBottom > 0) {

          tag.style.animation = `fadein 2s ${delay}s both`
          delay = delay + 0.3
        } else {
          tag.style.opacity = 0
          tag.style.animation = ""
        }

      })

    }

    fadeIn()
    document.addEventListener("scroll", function () {
      fadeIn()
    })
    window.addEventListener("resize", function () {
      fadeIn()
    })

  })
  return (
    <>
      <Header />
      <Body isMobile={isMobile} isTablet={isTablet}>
        <ScrollTopButton />
        <MainWrapper isMobile={isMobile} isTablet={isTablet}>
          {isMobile ?
            <section>
              <img src={mobilebanner1} alt="mobilebanner1" />
            </section>
            :
            <div className="inner">
              <div className="text-wrap1">

                <section>
                  <img src={logo} alt="logo" width={100} height={20} />
                </section>

                <h2 className="description1">
                  배달팁 부담스럽다면
                  <br />
                  <span className="bold point-color">렛잇고</span>로 포장하자!
                  <br />
                </h2>
                <h3 className="detail">동네가게의 포장 할인 / 이벤트 총 집합</h3>
              </div>
              <div className="image-wrap">
                <img src={banner1} alt="banner1" />
              </div>
            </div>

          }
        </MainWrapper>

        <MainWrapper isMobile={isMobile} isTablet={isTablet}>
          {
            isMobile ?
              <section>
                <img src={mobilebanner2} alt="mobilebanner2" />
              </section>
              :
              <div className="inner">
                <div className="image-wrap">
                  <img src={banner2} alt="banner2" />
                </div>
                <div className="text-wrap2">
                  <h2 className="description2">
                    전화주문 가격
                    <br />
                    <span className="bold point-color">= 렛잇고 포장 가격</span>
                  </h2>
                  <h3 className="detail">중개 수수료가 포함된 음식 가격은 NO!</h3>
                </div>
              </div>
          }
        </MainWrapper>

        <MainWrapper isMobile={isMobile} isTablet={isTablet}>
          {
            isMobile ?
              <section>
                <img src={mobilebanner3} alt="mobilebanner3" />
              </section>
              :
              <div className="inner">
                <div className="text-wrap3">
                  <h2 className="description3">
                    간편한 게시글 수정을 통해
                    <br />
                    우리집도<span className="bold point-color"> #웨이팅_맛집 !</span>
                  </h2>
                  <h3 className="detail">매일 다양한 혜택을 사장님이 직접 작성해봐요</h3>
                </div>
                <div className="image-wrap">
                  <img src={banner3} alt="banner3" />
                </div>
              </div>
          }
        </MainWrapper>

        <MainWrapper isMobile={isMobile} isTablet={isTablet}>
          {
            isMobile ?
              <section>
                <img src={mobilebanner4} alt="mobilebanner4" />
              </section>
              :
              <div className="inner">
                <div className="text-wrap4">
                  {/* <section>
                    <img src={banner4_title} alt="banner4_title" width={40} height={20} />
                  </section> */}
                  {/* <span className="bold point-color">본격 영업 들어갑니다.</span> */}


                  <h2 className="description4">
                    맛집 뚫기
                    <br />
                    대작전
                  </h2>

                  <section>
                    <img src={banner4_main} alt="banner4_main" width={50} height={10} />
                  </section>

                  <h3 className="detail">포장을 하지 않는 음식점이라고요?
                    <br />
                    문의 주세요! 렛잇고가 직접 영업갑니다!
                  </h3>
                  <h3 className="info">contact@werow.co.kr</h3>
                </div>

                <div className="image-wrap">
                  <img src={banner4} alt="banner4" />
                </div>
              </div>
          }

        </MainWrapper>

        <MainWrapper isMobile={isMobile} isTablet={isTablet}>
          <div className="inner">
            <div className="text-wrap5">
              {/* <section>
                <img src={logo} alt="logo" width={100} height={20} />
              </section> */}

              <h4 className="description5">
                사전신청으로 렛잇고와 함께해요!👩🏻‍💻

              </h4>

              <div className="register"

              >

                {/* <section
                  style={{
                    alignItems: 'center', float: 'left', flexDirection: 'column'
                  }}>
                  <img src={ceo} alt="ceo" width={100} height={20} />
                  <h3 className="detail">사장님</h3>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSej4393K1Dp0mnOAr4CoTMX6r9U5NQJbULW_4VlIAUFs7oT7A/viewform?"
                    className="info">
                    <button style={{
                      borderRadius: 50,
                      backgroundColor: '#00C1DE',
                      width: isMobile ? 60 : 100,
                      height: isMobile ? 25 : 50,
                      fontWeight: 'bold',
                      fontFamily: 'Apple SD Gothic Neo',
                      fontSize: isMobile ? 12 : 18,
                    }}>신청하기</button>
                  </a>
                </section> */}

                {/* <section
                  onClick={openModal}
                  style={{
                    alignItems: 'center', flexDirection: 'column'
                  }}> */}
                <img src={user} alt="user" width={100} height={100} style={{ cursor: "pointer" }} onClick={openModal} />
                <div className="detail">
                  <h5>
                    지금 사전신청을 완료하면
                    <br />
                    앱 출시와 동시에 사전링크를 보내드려요!
                  </h5>
                  <h4>👈 여기를 클릭해주세요!</h4>
                </div>

                {/* <a>
                    <button
                      onClick={openModal}
                      style={{
                        borderRadius: 50,
                        backgroundColor: '#00C1DE',
                        width: isMobile ? 60 : 100,
                        height: isMobile ? 25 : 50,
                        fontWeight: 'bold',
                        fontFamily: 'Apple SD Gothic Neo',
                        fontSize: isMobile ? 12 : 18,
                      }}>신청하기</button>
                  </a> */}
                {/* </section> */}
              </div>
            </div>
            <div className="image-wrap">
              <img src={banner5} alt="banner5" />
            </div>
          </div>
        </MainWrapper>

        <MainWrapper isMobile={isMobile} isTablet={isTablet}>
          <div className="inner">
            <div className="text-wrap6">
              <a className="download" href="https://www.instagram.com/leteatgo_official/"><img width={5} src={instagram}></img></a>
              <h4 className="description6">
                회사 : 위로우 컴퍼니
                <br />
                대표자 : 권혁문
                <br />
                주소 : 서울 서초구 남부순환로339길 60 402호
                <br />
              </h4>
            </div>
          </div>
        </MainWrapper>

        {modalOpen &&
          <Modal open={modalOpen} close={closeModal} header="사전 신청" kind="register">
            곧 봐요! LET EAT GO!
          </Modal>
        }
      </Body>
    </>

  )
}
const Body = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`
const MainWrapper = styled.div`
{
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  
  img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .image-wrap {
    width: ${props => (props.isMobile || props.isTablet ? '100%' : '100%')};
    height: ${props => (props.isMobile || props.isTablet ? '100%' : '100%')};
    overflow-y: hidden;
    img {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  section {
    width: ${props => (props.isMobile || props.isTablet ? '100%' : '80%')};
    
    margin: auto;
    overflow-y: hidden;
    img {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .inner {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
    align-items: center;
    justify-content: center;
  }

  .text-wrap1 {
    display: flex;
    position: absolute;
    animation: fadein 1s;
    display: flex;
    top: 20%;
    left: 10%;
    flex-direction: ${props => props.isMobile ? 'column' : 'column'};
  
    img {
      width: 40%;
      height: 50%;
    }
    .description1 {
      font-weight: bold;
      align-items: center;
      justify-content: center;
      font-size: ${props => (props.isMobile ? 10 : props.isTablet ? 35 : 50)}px;
      font-family: Apple SD Gothic Neo;
      color: #ffff;
      padding-left: ${props => (props.isMobile ? '0px' : '0px')};
      .point-color {
        color: #00C1DE
      }
    }

    .detail {
      font-weight: 200;
      font-size: ${props => (props.isMobile ? 10 : props.isTablet ? 20 : 25)}px;
      color: #ffff;
      font-family: Apple SD Gothic Neo;
      
      .info {
        display: flex;
        text-align: ${props => (props.isMobile ? 'center' : 'none')};
      }
    }
  }

  .text-wrap2 {
    position: absolute;
    animation: fadein 1s;
    display: flex;
    top: 30%;
    right: 10%;
    flex-direction: ${props => props.isMobile ? 'column' : 'column'};
  
    .description2 {
  
      font-weight: bold;
      align-items: center;
      justify-content: center;
      font-size: ${props => (props.isMobile ? 10 : props.isTablet ? 35 : 50)}px;
      font-family: Apple SD Gothic Neo;
      color: #000;
      padding-left: ${props => (props.isMobile ? '0px' : '0px')};
      .point-color {
        color: #00C1DE
      }
    }

    .detail {
      font-weight: 200;
      font-family: Apple SD Gothic Neo;
      font-size: ${props => (props.isMobile ? 10 : props.isTablet ? 20 : 25)}px;
      color: #000;
    }

  }

  .text-wrap3 {
    display: flex;
    position: absolute;
    animation: fadein 1s;
    display: flex;
    top: 30%;
    left: 10%;
    flex-direction: ${props => props.isMobile ? 'column' : 'column'};
    img {
      width: 40%;
      height: 50%;
    }
    .description3 {
      font-weight: bold;
      align-items: center;
      justify-content: center;
      font-size: ${props => (props.isMobile ? 10 : props.isTablet ? 35 : 50)}px;
      font-family: Apple SD Gothic Neo;
      color: #000;
      padding-left: ${props => (props.isMobile ? '0px' : '0px')};
      .point-color {
        color: #00C1DE
      }
    }

    .detail {
      font-weight: 200;
      font-size: ${props => (props.isMobile ? 10 : props.isTablet ? 20 : 25)}px;
      color: #000;
      font-family: Apple SD Gothic Neo
      
      .info {
        display: flex;
        text-align: ${props => (props.isMobile ? 'center' : 'none')};
      }
    }
  }


  .text-wrap4 {
    display: flex;
    position: absolute;
    animation: fadein 1s;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-top: 1px;
    flex-direction: ${props => props.isMobile ? 'column' : 'column'};
    margin: ${props => (props.isMobile ? '40px 10px' : '50px 25px')};
    .point-color {
      color: #00C1DE
    }

    section {
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${props => (props.isMobile || props.isTablet ? '100%' : '80%')};
      margin: auto;
      overflow-y: hidden;
      img {
        display: flex;
        width: 100%;
        height: 100%;
        object-fit: contain;
  
      }
    }

    .description4 {
      font-weight: bold;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: ${props => (props.isMobile ? 10 : props.isTablet ? 35 : 50)}px;
      font-family: Apple SD Gothic Neo;
      color: #ffff;
      padding-left: ${props => (props.isMobile ? '0px' : '0px')};

      .point-color {
        color: #00C1DE
      }
    }

    .detail {
      font-weight: 200;
      font-size: ${props => (props.isMobile ? 10 : props.isTablet ? 20 : 20)}px;
      color: #ffff;
      font-family: Apple SD Gothic Neo
    
    }
    .info {
        display: flex;
        color: #00C1DE;
        font-size: 20px;
        text-align: ${props => (props.isMobile ? 'center' : 'none')};
    }
    
  }

  .text-wrap5 {
    display: flex;
    position: absolute;
    animation: fadein 1s;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: ${props => props.isMobile ? 'column' : 'column'};
    margin : ${props => (props.isMobile ? '0px 50px' : '0px 25px')};
    h5 {
      font-size: ${props => (props.isMobile ? 10 : props.isTablet ? 20 : 30)}px;
    }
    a {
      cursor: pointer;
      display: flex;
      width: 100%;
      height: 85%;
      align-items: center;
      justify-content: center;
      img {
        display: flex;
        width: 60%;
        // height: 100%;
        object-fit: contain;
      }
      // .detail {
      //   font-weight: bold;
      //   width: ${props => (props.isMobile ? 10 : props.isTablet ? 20 : 30)}px;
      //   font-size: ${props => (props.isMobile ? 10 : props.isTablet ? 20 : 30)}px;
      //   color: #000;
      //   font-family: Apple SD Gothic Neo;
      // }
    }
    section {
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${props => (props.isMobile || props.isTablet ? '100%' : '80%')};
      height: 80%;
      overflow-y: hidden;
      img {
        display: flex;
        width: 40%;
        height: 100%;
        object-fit: contain;
  
      }
    }
    .description5 {
      padding-top: 10px;
      font-weight: bold;
      align-items: center;
      justify-content: center;
      font-size: ${props => (props.isMobile ? 12 : props.isTablet ? 25 : 25)}px;
      font-family: Apple SD Gothic Neo;
      color: #000;
      .point-color {
        color: #00C1DE
      }
    }
    .register {
      display: flex;
      // flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: ${props => (props.isMobile || props.isTablet ? '100%' : '100%')};
      overflow-y: hidden;
      
      img {
        display: flex;
        width: 50%;
        height: 80%;
        object-fit: contain;
      }

      .detail {
        font-weight: bold;
        // width: 300px;
        width: ${props => (props.isMobile ? 300 : props.isTablet ? 500 : 650)}px;
        // font-size: ${props => (props.isMobile ? 10 : props.isTablet ? 20 : 30)}px;
        color: #000;
        font-family: Apple SD Gothic Neo;
        h5 {
          font-size: ${props => (props.isMobile ? 5 : props.isTablet ? 15 : 20)}px;
        }
        h4 {
          font-size: ${props => (props.isMobile ? 10 : props.isTablet ? 20 : 30)}px;
        }
      }
    }
    
  }

  .text-wrap6 {
    padding-top: 10px;
    display: flex;
    animation: fadein 1s;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    flex-direction: ${props => props.isMobile ? 'column' : 'column'};
    margin : ${props => (props.isMobile ? '0px 50px' : '0px 150px')};
    section {
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${props => (props.isMobile || props.isTablet ? '100%' : '80%')};
      overflow-y: hidden;
      img {
        display: flex;
        width: 40%;
        height: 100%;
        object-fit: contain;
  
      }
    }

    .download{
      display: flex;
      height: 30px;
      width: 30px;
      border-radius: 5px;
      cursor: pointer;
    }

    .description6 {
      display: flex;
      // font-weight: bold;
      align-items: center;
      justify-content: center;
      font-size: ${props => (props.isMobile ? 10 : props.isTablet ? 15 : 15)}px;
      font-family: Apple SD Gothic Neo;
      color: #00000087;
      .point-color {
        color: #00C1DE
      }
      
    }
    .register {
      display: flex;
      flex-direction: row;
      height: ${props => (props.isMobile || props.isTablet ? '100%' : '100%')};
    }
    .detail {
      font-weight: bold;
      height: ${props => (props.isMobile ? 10 : props.isTablet ? 20 : 30)}px;
      font-size: ${props => (props.isMobile ? 12 : props.isTablet ? 20 : 30)}px;
      color: #000;
      font-family: Apple SD Gothic Neo
      
      .info {
        display: flex;
        text-align: ${props => (props.isMobile ? 'center' : 'none')};
      }
    }
  }

}
`
export default Home;