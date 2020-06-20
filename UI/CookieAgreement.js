import CookieConsent from 'react-cookie-consent';
import styled from '@emotion/styled';

const CookieAgreement = () => {
  return (
    <CookieAgreementStyled>
      <CookieConsent
        cookie="user-has-accepted-cookies"
        disableStyles={false}
        location="bottom"
        acceptOnScroll={true}
        buttonWrapperClasses="button-close__wrapper"
        buttonClasses="button-close"
        contentClasses="cookie-message"
        buttonText="click or scroll down to agree"
      >
        Yes, we use cookies. If you don't like it change website, we won't miss you!
      </CookieConsent>
    </CookieAgreementStyled>
  );
};
const CookieAgreementStyled = styled.div``;

export default CookieAgreement;
