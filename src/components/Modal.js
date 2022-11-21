import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import ClickOutside from "./ClickOutside";

const Modal = (props) => {
  const { open, close, header, kind } = props;
  const [phone, setPhone] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [isSucess, setIsSucess] = useState(false);

  const outSection = useRef();

  const handleClosemodal = (e) => {
    if (isOpen && (!outSection.current || !outSection.current.contains(e.target)))
      setOpen(false)
  }

  const handleInput = (e) => {
    setPhone(e.target.value)
  }

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
              <section>
                <header>
                  {header}
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                </header>
                <input
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                  maxLength="13"
                  placeholder=" '-' 없이 입력해주세요"
                  onChange={handleInput}
                >
                </input>

                <footer>
                  <button className="register" onClick={handleRegiser}>
                    번호 등록
                  </button>
                </footer>
              </section>
            ) : null}
          </div>
        }

      </ModalWrapper>
    </ClickOutside>

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
  padding: 15px;
  text-align: center;
  align-items: center;
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