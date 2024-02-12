import styled from 'styled-components';

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
  width: 100%;
  padding: 13px 0;
  color: var(--dark-violet-clr);
  border: 2px solid var(--dark-violet-clr);
  border-radius: 12px;

  &:active {
    color: var(--violet-click);
    border: 2px solid var(--violet-click);
  }
`;
