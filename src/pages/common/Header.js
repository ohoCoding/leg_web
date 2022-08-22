import styled from "styled-components";
import SearchIcon from "assets/icons/icon-search.svg";
import Logo from 'logo.svg';
import AppStore from "assets/icons/AppStore.svg";
import GooglePlay from "assets/icons/GooglePlay.svg";

const Header = () => {
  return (
    <NavBar>
      <NavLogo>
        <img src={Logo} width={40} />
      </NavLogo>
      {/* <NavInput>
        <StyledInput />
        <img src={SearchIcon} alt="돋보기" />
      </NavInput> */}
      <NavLink>
        <a className="download" href="https://apps.apple.com/kr/app/pangyojangteo/id1018769995?l=ko&ls=1">
          <img src={AppStore} alt="APP Store" width={20} />
          <div className="button">App Store</div>
        </a>
        <a className="download" href="https://play.google.com/store/apps/details?id=com.towneers.www">
          <img src={GooglePlay} alt="Google Play" width={20} />
          <div className="button">Google Play</div>
        </a>
      </NavLink>
    </NavBar>
  )
}

const NavBar = styled.div` 
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1;
  background-color: rgba(185, 217, 243, 0.615);
  padding: 10px 20px;
  margin: 0;
`;

const NavLogo = styled.div`
  user-select: none;
  cursor: pointer;
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
  -webkit-appearance: none;
  margin-top: 3px;
  background-color: transparent;
`

const NavLink = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: right;
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