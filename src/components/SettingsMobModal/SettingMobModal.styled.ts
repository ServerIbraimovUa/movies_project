import styled from 'styled-components';

export const SettingsMobModalThumb = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 430px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const SettingsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: var(--main-font-medium);
  font-weight: var(--medium-font-weight);
  color: var(--text-clr-grey);
`;

export const SettingsThumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 828px;
  margin-top: 50px;
`;

export const SettingsIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--text-clr-grey);
`;

export const SettingsLogoutBtn = styled.button`
  min-width: 100%;
  height: 40px;
  color: var(--dark-violet-clr);
  border: 2px solid var(--dark-violet-clr);
  border-radius: 12px;
  margin-bottom: 20px;

  &:active {
    color: var(--violet-click);
    border: 2px solid var(--violet-click);
  }
`;
