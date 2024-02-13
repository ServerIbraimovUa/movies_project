import styled from 'styled-components';

export const SettingsMobModalThumb = styled.div`
  max-width: 398px;
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
  height: 90dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SettingsIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--text-clr-grey);
`;

export const SettingsLogoutBtn = styled.button`
  width: 398px;
  padding: 13px 0;
  color: var(--dark-violet-clr);
  border: 2px solid var(--dark-violet-clr);
  border-radius: 12px;

  &:active {
    color: var(--violet-click);
    border: 2px solid var(--violet-click);
  }
`;
