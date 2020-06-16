import styled from '@emotion/styled';
import { FiArrowDown } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import Cookies from 'universal-cookie';

const PopUpEmail = ({ onPopupClose, downloadLink, downloadBtnName }) => {
  const [email, setEmail] = useState(null);
  const [emailStatus, setEmailStatus] = useState(null);

  const inputEl = useRef(null);

  const cookies = new Cookies();
  useEffect(() => {
    const cookieValue = cookies.get('userEmail') || '';

    if (cookieValue) {
      setEmail(cookieValue);
    }

    inputEl.current.value = cookieValue;
  }, []);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send('gmail', templateId, variables, 'user_WeycbcJ0dxUPiHdonwe4f')
      .then((res) => {
        setEmailStatus('Email successfully sent!');
      })
      .catch((err) => {
        setEmailStatus('Oh well, you failed. ' + err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    cookies.set('userEmail', email, { path: '/' });

    const templateId = 'template_lsam5pe6';
    sendFeedback(templateId, {
      link_download: downloadLink,
      to_email: email,
      email: email,
      customer_name: email,
    });
  };

  return (
    <PopUpEmailStyled>
      <h2 className="visually-hidden">email newsletter</h2>
      <div className="enterEmail__wrap">
        <div className="enterEmail">
          <b className="title">Almost there!</b>
          <p className="titleNeedEmail">We just need your email address.</p>

          <form onSubmit={(e) => handleSubmit(e)} className="test-mailing">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              id="test-mailing"
              name="test-mailing"
              onChange={(e) => handleChange(e)}
              placeholder="Post your email"
              ref={inputEl}
            />
            <button type="submit" value="Submit" className="btn btn--submit submit">
              {downloadBtnName}
              <span>
                <FiArrowDown />
              </span>
            </button>
            <p className="privacy">
              By providing my email address I agree that I have reviewed and agree to the Terms of Service and Privacy
              Policy.
            </p>
            {emailStatus && <p className="result">{emailStatus}</p>}
          </form>

          <button className="close" onClick={() => onPopupClose()}>
            <AiFillCloseCircle />
          </button>
        </div>
      </div>
    </PopUpEmailStyled>
  );
};

const PopUpEmailStyled = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  .enterEmail__wrap {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    max-width: 560px;
    background: ${(props) => props.theme.colors.beigeLight};
    padding: 30px;

    .enterEmail {
      background: ${(props) => props.theme.colors.white};
      padding: 30px;
      position: relative;

      .close {
        position: absolute;
        right: 30px;
        top: 30px;
        cursor: pointer;

        svg {
          width: 40px;
          height: auto;
        }
      }

      .title {
        margin-bottom: 15px;
        font-size: 24px;
        line-height: 28px;
        font-weight: 700;
        padding-right: 50px;
      }

      .titleNeedEmail {
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 15px;
        font-weight: 600;
        padding-right: 50px;
      }

      label {
        text-transform: uppercase;
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 8px;
        color: ${(props) => props.theme.colors.beigeLight};
      }

      input {
        display: block;
        height: 50px;
        padding: 0 15px;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid ${(props) => props.theme.colors.beigeLight};
        margin-bottom: 20px;
      }

      .submit {
        height: 70px;
        background: ${(props) => props.theme.colors.blue};
        width: 100%;
        padding: 0 17px;
        margin-bottom: 20px;
        text-align: left;
        font-size: 16px;
        font-weight: 500;
        color: ${(props) => props.theme.colors.white};
        position: relative;
        transition: background 0.3s ease-out;
        border: none;
        padding-right: 70px;

        :hover,
        :focus {
          background: ${(props) => props.theme.colors.pink2};
        }

        span {
          ${(props) => props.theme.flexCenter};
          position: absolute;
          width: 40px;
          height: 40px;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          background: ${(props) => props.theme.colors.white};
          border-radius: 50%;

          svg {
            color: black;
            width: 20px;
            height: auto;
          }
        }
      }
      .privacy {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 20px;
      }

      .result {
        font-size: 20px;
        line-height: 24px;
        text-transform: uppercase;
        text-decoration: underline;
      }
    }
  }
`;

export default PopUpEmail;
