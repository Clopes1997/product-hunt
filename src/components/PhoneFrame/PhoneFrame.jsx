import React from 'react';
import { PhoneFrameContainer, PhoneScreen, Notch, NavigationBar, HomeIndicator } from './PhoneFrame.styles';

const PhoneFrame = ({ children }) => {
  return (
    <PhoneFrameContainer>
      <PhoneScreen>
        <Notch />
        
        <div style={{ 
          flex: 1, 
          overflow: 'hidden', 
          display: 'flex', 
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          borderRadius: '32px 32px 0 0'
        }}>
          {children}
        </div>

        <NavigationBar>
          <HomeIndicator />
        </NavigationBar>
      </PhoneScreen>
    </PhoneFrameContainer>
  );
};

export default PhoneFrame;
