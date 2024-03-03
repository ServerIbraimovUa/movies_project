import styled from 'styled-components';

export const SettingsMobModalThumb = styled.div`
  margin: 0 auto;
  width: 430px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
`;

export const SettingsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: var(--main-font);
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
