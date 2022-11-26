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
  const [validate, setValidate] = useState(false);

  const agreeValue = '개인정보 수집이용 및 제3자 제공에 동의합니다. 렛잇고는 개인정보보호법에 따라 본인의 동의를 얻어 사전등록 참여를 위해 개인정보를 수집 및 이용합니다. 1. 수집 이용 목적 : 사전 등록을 위함 2. 개인정보 수집 항목: 전화번호 3. 보유 및 이용기간: 이용목적 달성 후 1년 이내 폐기 4. 제공 받는 자: 렛잇고 * 개인정보 수집 이용에 대해 거부할 수 있으며 거부할 경우에는 사전등록이 불가함을 알려드립니다.'
  const outSection = useRef();

  const handleClosemodal = (e) => {
    if (isOpen && (!outSection.current || !outSection.current.contains(e.target)))
      setOpen(false)
  }

  const handleInput = (e) => {
    setPhone(e.target.value)
    // 숫자만 입력시
    var regExp = /^010\d{4}\d{4}$/;
    // 형식에 맞는 경우 true 리턴
    setValidate(regExp.test(e.target.value));
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
      if (result.data.status === 201) {
        alert(result.data.message)
      } else if (result.data.status === 400) {
        alert(result.data.message)
      }
    }).catch(err => {
    })
  }
  useEffect(() => {
    window.addEventListener('click', handleClosemodal);
    return () => {
      window.removeEventListener('click', handleClosemodal);
    };
  }, [validate])

  const checkPhonenumber = (e) => {

    // if (e.key === '.' || e.key === '-' || e.key >= 0 && e.key <= 9) {
    //   return true;
    // }
    // return false;
  }
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
                <main style={{ fontSize: '20px' }}>{props.children}</main>
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
                    }}
                    value={agreeValue}
                  >

                  </textarea>
                </main>
                <input
                  style={{
                    alignItems: 'center', justifyContent: 'center',
                    borderColor: validate === true ? 'blue' : 'red',
                    borderWidth: 2,
                    borderRadius: 10,
                    width: 250
                  }}
                  maxLength="11"
                  type='text'
                  placeholder=" '-' 없이 핸드폰 번호를 입력해주세요."
                  onChange={(e) => handleInput(e)}
                  onBlur={(e) => checkPhonenumber(e)}
                >
                </input>
                <footer>
                  {
                    agreeCheck === true && validate === true ?
                      <button className="register" onClick={handleRegiser}>
                        번호 등록
                      </button> : null
                  }


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
input::placeholder {
  font-size: 12px;
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