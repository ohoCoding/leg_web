import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import ClickOutside from "./ClickOutside";

const Modal = (props) => {
  const { open, close, header, kind } = props;
  const [phone, setPhone] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [isSucess, setIsSucess] = useState(false);
  const [agreeCheck, setAgreeCheck] = useState(false);

  const outSection = useRef();

  const handleClosemodal = (e) => {
    if (isOpen && (!outSection.current || !outSection.current.contains(e.target)))
      setOpen(false)
  }

  const handleInput = (e) => {
    setPhone(e.target.value)
  }

  const agreeBtnEvent = () => {
    if (agreeCheck === false) {
      setAgreeCheck(true)
    } else {
      setAgreeCheck(false)
    }
  };

  const handleRegiser = async () => {
    await axios({
      method: 'post',
      url: "https://0giri.com/pre/phones",
      data: {
        phone: phone
      },
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((result) => {
      console.log(result);
      if (result.data.status === 201) {
        alert(result.data.message)
      } else if (result.data.status === 400) {
        alert(result.data.message)
      }
    }).catch(err => {
      console.log(err);
    })
  }
  useEffect(() => {
    window.addEventListener('click', handleClosemodal);
    return () => {
      window.removeEventListener('click', handleClosemodal);
    };
  }, [])

  return (
    <ClickOutside onClickOutside={close}>
      <ModalWrapper ref={outSection}>
        {kind !== "register" ?
          <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
              <section>
                <header>
                  {header}
                  {/* <button className="close" onClick={close}>
                &times;
              </button> */}
                </header>
                <main>{props.children}</main>
                <footer>
                  <button className="close" onClick={close}>
                    OK!
                  </button>
                </footer>
              </section>
            ) : null}
          </div>
          :
          <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
              <section style={{ flexDirection: 'row' }}>
                <header>
                  {header}
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                </header>
                <main>
                  <sub style={{ justifyContent: 'center', alignSelf: 'center', textAlign: 'center', fontSize: 15 }}>
                    <input style={{ justifyContent: 'center', alignSelf: 'center', textAlign: 'center', fontSize: 20 }}
                      type="checkbox" id="check1" checked={agreeCheck} onChange={agreeBtnEvent}
                    />동의함
                  </sub>
                  <textarea
                    readOnly
                    style={{
                      resize: 'none',
                      fontSize: '12px', width: '80%', padding: 10,
                    }}>
                    렛잇고(이하‘회사’라한다)는 개인정보보호법 제30조에 따라 정보주체의 개인정보를 보호하고이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리 방침을 수립·공개합니다.
                    제1조(개인정보의 수집·이용)
                    ①회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                    ② 개인정보 수집방법1. 회원가입및서비스이용과정에서이용자가개인정보수집에대해동의를하고직접정보를입력하는경우,해당개인정보를수집합니다.2. 고객센터를 통한 상담과정에서 웹페이지, 메일, 팩스, 전화등을 통해 이용자의 개인정보가 수집될 수 있습니다.3. 회사와 제휴한 외부기업이나 단체로부터 개인정보를 제공받을 수 있으며, 이러한 경우에는제휴사에서 이용자에게 개인정보 제공동의를 받은 후 수집합니다.③ 서비스 이용과정에서 아래개인정보항목이 자동으로 생성되어 수집될 수 있습니다.- IP주소,쿠키,MAC주소,서비스이용기록,방문기록,불량이용기록,기기정보(단말기종류,OS유형) 등
                    제2조(개인정보의 처리 및 보유기간)
                    ① 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.1. 회원 정보 : 회원탈퇴 즉시 (재가입 방지를 위하여 탈퇴 후 CI는 30일간 보관)2. 비회원 정보 : 업무 목적 달성 시까지3. 식품 이물 발견 신고 : 이물 통보 완료 시까지4. 법령 위반에 따른 수사·조사 등이 진행중인 경우에는 해당 건 종료 시까지5. 서비스 이용에 따른 채권·채무관계 정산 시까지② 1년간 회원의 서비스 이용 기록이 없는 경우, 개인정보를 분리 보관합니다.③ 회원 탈퇴 또는 회원 자격 정지 후 회원 재가입, 임의 해지 등을 반복적으로 행하여 회사가 제공하는 할인쿠폰, 이벤트 혜택 등으로 경제상의 이익을 취하거나 이 과정에서 명의를 무단으로 사용하는 등 편법 행위 또는 불법행위를 하는 회원을 차단하고자 회사는 회원 탈퇴 후 30일간 CI를 보유합니다.④ 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
                  </textarea>
                </main>
                <input
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                  maxLength="13"
                  placeholder=" '-' 없이 입력해주세요"
                  onChange={handleInput}
                >
                </input>
                <footer>
                  <button className="register" onClick={handleRegiser} style={{
                    backgroundColor: agreeCheck === true ? '#000' : 'white'
                  }}>
                    번호 등록
                  </button>

                </footer>
              </section>
            ) : null}
          </div>
        }

      </ModalWrapper>
    </ClickOutside >

  );
};
const ModalWrapper = styled.div`
.modal {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
}
.modal button {
  outline: none;
  cursor: pointer;
  border: 0;
}
.modal > section {
  width: 90%;
  height: 40%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  animation: modal-show 0.3s;
  overflow: hidden;
  text-align: center;
  align-items: center;
}
.modal > section > header {
  position: relative;
  padding: 15px;
  background-color: #fffff;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
}
.modal > section > header button {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  ont-size: 30px;
  font-weight: 700;
  text-align: center;
  color: #999;
  background-color: transparent;
}
.modal > section > main {
  display: flex;
  padding-bottom: 10px;
  text-align: center;
  align-items: center;
  font-size: 10px;
  flex-direction: column;
}
.modal > section > input {
  padding: 5px;
  text-align: center;
  align-items: center;
}
.modal > section > footer {
  padding: 20px 20px;
  text-align: center;
}
.modal > section > footer button {
  padding: 10px 80px;
  color: #ffff;
  background-color: #000;
  border-radius: 50px;
  font-size: 20px;
  font-weight: bold;
}
.modal.openModal {
  display: flex;
  align-items: center;
  animation: modal-bg-show 0.3s;
}
@keyframes modal-show {
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
}
@keyframes modal-bg-show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`
export default Modal;