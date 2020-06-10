import styled from '@emotion/styled';
import { FiArrowDown } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';

const PopUpEmail = ({ onPopupClose }) => {
  return (
    <PopUpEmailStyled>
      <h2 className="visually-hidden">email newsletter</h2>
      <div className="enterEmail__wrap">
        <div className="enterEmail">
          <b className="title">Almost there!</b>
          <p className="titleNeedEmail">We just need your email address.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
            <button className="submit" type="submit">
              Download Activity
              <span>
                <FiArrowDown />
              </span>
            </button>
            <p className="privacy">
              By providing my email address I agree that I have reviewed and agree to the Terms of Service and Privacy
              Policy.
            </p>
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
        .privacy {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
`;

export default PopUpEmail;