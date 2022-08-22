import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowUpIcon } from 'assets/icons/icon-arrow-up.svg';
import { useLocation } from 'react-router-dom';

export const ScrollTopButton = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    });

    const goUp = (e) => {
        e.stopPropagation();
        e.preventDefault();

        setTimeout(() => {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            });
        }, 300);
    };

    return (
        <>
            {showTopBtn && (
                <Wrapper onClick={e => goUp(e)}>
                    <ArrowUpIcon width={20} />
                    Top
                </Wrapper>
            )}
        </>
    );
};

export const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 13px;
  right: 120px;
  float: right;
  font-size: 12px;
  bottom: 50px;
  z-index: 999;
  color: ${({ theme }) => theme.gray600};
  svg > path {
    stroke: ${({ theme }) => theme.gray600};
  }
`;
