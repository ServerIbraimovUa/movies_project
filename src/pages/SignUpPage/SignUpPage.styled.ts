import styled from 'styled-components';
import authBackground from '../../images/auth-bg.png';
import { device } from '../../css/deviceSize';

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 32px;
  background-color: var(--text-clr-white);
  padding: 40px 16px;
  margin: 136px auto;
  width: 398px;

  .navlink {
    margin-bottom: 60px;
  }

  .title {
    color: var(--text-clr-black);
    font-family: var(--main-font);
    font-weight: var(--bold-font-weight);
    margin-bottom: 40px;
    font-size: 32px;
  }

  @media ${device.tablet} {
    width: 560px;
    padding: 80px 60px;

    .title {
      font-size: 40px;
    }

    .navlink {
      margin-bottom: 100px;
    }
  }
`;

export const AuthWrapper = styled.section`
  background-image: url(${authBackground});
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
`;
