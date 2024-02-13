import styled from 'styled-components';

export const SettingsMobModalThumb = styled.div`
  max-width: 398px;
  min-height: 500px;
  margin: 0 auto;
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
  gap: 450px;
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
