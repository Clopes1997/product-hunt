import styled from 'styled-components';

export const PhoneFrameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 10px;
  position: relative;
  box-sizing: border-box;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 5px;
  }
  
  @media (max-width: 480px) {
    padding: 0;
    background: #000;
  }
`;

export const PhoneScreen = styled.div`
  width: 375px;
  height: 812px;
  max-height: calc(100vh - 20px);
  max-width: calc(100vw - 20px);
  background: #000;
  border-radius: 40px;
  padding: 8px;
  box-shadow: 
    0 0 0 2px rgba(255, 255, 255, 0.1),
    0 20px 60px rgba(0, 0, 0, 0.5),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1;
  margin: auto;
  flex-shrink: 0;
  
  /* Scale down proportionally if viewport height is too small */
  @media (max-height: 840px) {
    transform: scale(calc((100vh - 20px) / 812));
    transform-origin: center top;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
    padding: 0;
    box-shadow: none;
    transform: none;
    margin: 0;
  }
`;

export const Notch = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 30px;
  background: #000;
  border-radius: 0 0 20px 20px;
  z-index: 100;
  
  &::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: #333;
    border-radius: 2px;
  }
`;

export const StatusBar = styled.div`
  background: ${props => props.theme.colors.background};
  padding: 8px 20px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  position: relative;
  padding-top: 12px;
`;

export const StatusBarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StatusBarTime = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  letter-spacing: -0.3px;
`;

export const StatusBarIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StatusBarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text};
  
  svg {
    display: block;
  }
`;

export const NavigationBar = styled.div`
  background: ${props => props.theme.colors.background};
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  border-radius: 0 0 32px 32px;
`;

export const HomeIndicator = styled.div`
  width: 134px;
  height: 5px;
  background: ${props => props.theme.colors.text};
  border-radius: 3px;
  opacity: 0.3;
`;
