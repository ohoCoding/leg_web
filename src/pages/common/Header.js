import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchIcon from "assets/icons/icon-search.svg";
import Logo from 'logo.svg';
// import AppStore from "assets/icons/AppStore.svg";
import AppStore from "assets/images/AppStore.png";
// import GooglePlay from "assets/icons/GooglePlay.svg";
import GooglePlay from "assets/images/GooglePlay.png";
import Modal from "components/Modal";
import title from 'assets/images/title.png';
import 'css/header.css';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }
  useEffect(() => {
    const headerTag = document.querySelector("header")

    document.addEventListener("scroll", function () {
      const pixels = window.scrollY

      if (pixels >= headerTag.getBoundingClientRect().height) {

        headerTag.classList.add("scrolled")
      } else {
        headerTag.classList.remove("scrolled")
      }
    })


  })
  return (
    <header className="header">
      <NavLogo>
        <img src={title} width={120} height={20} />
      </NavLogo>
      {/* <NavInput>
        <StyledInput />
        <img src={SearchIcon} alt="돋보기" />
      </NavInput> */}
      <NavLink>
        <a href="#!" className="download" onClick={openModal}>
          <img src={AppStore} alt="APP Store" width={100} />
          {/* <div className="button">App Store</div> */}
        </a>
        <a href="#!" className="download" onClick={openModal}>
          <img src={GooglePlay} alt="Google Play" width={100} />
          {/* <div className="button">Google Play</div> */}
        </a>
      </NavLink>
      {modalOpen &&
        <Modal open={modalOpen} close={closeModal} header="Coming Soon!">
          곧 만날 수 있어요 :)
        </Modal>
      }
    </header>
  )
}

const NavBar = styled.header` 

  display: flex;
  background-color: #fff;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 0 50px;
  transition: all 0.5s;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  .scrolled {
    background-color: #fff;
    height: 100px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 60px;
`;

const NavInput = styled.div`
  display: flex;
  border-radius: 5px;
  border: solid 1px #e9ecef;
  text-decoration: none;
  height: 30px;
  box-sizing: border-box;
  margin: 10px 10px;
  img{
    margin-right: 10px;
  }
`;

const StyledInput = styled.input`
  border: hidden;
  margin: 0px;
  padding: 10px;
  width: 600px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 3px;
  background-color: transparent;
`

const NavLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  flex-direction: row;
  
  .download{
    width: 140px;
    border-radius: 5px;
    box-sizing: border-box;
    text-decoration: none;
    display: flex;
    vertical-align: middle;
    text-align: center;
    padding: 7px;
    height: 40px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
   
    .button{
      display: inline-block;
      color: #495057;
      font-size: 14px;
      margin-left: 8px;
      font-weight: 700;
      vertical-align: middle;
    }
  }

`
export default Header;