import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: 24px;
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 100px;
  min-height: 100vh;
  
  @media (min-width: 768px) {
    padding: 40px;
    padding-bottom: 120px;
  }
`;

export const ProductDetailContent = styled.div`
  padding-top: 20px;
  animation: fadeIn ${props => props.theme.transitions.normal} ease;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const BackButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  cursor: pointer;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: ${props => props.theme.borderRadius.round};
    background-color: ${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.text};
    transition: all ${props => props.theme.transitions.normal};
    box-shadow: ${props => props.theme.shadows.card};
    
    &:hover {
      background-color: ${props => props.theme.colors.primary};
      color: white;
      border-color: ${props => props.theme.colors.primary};
      transform: translateX(-2px);
      box-shadow: ${props => props.theme.shadows.cardHover};
    }
    
    svg {
      width: 20px;
      height: 20px;
      
      @media (max-width: 768px) {
        width: 22px;
        height: 22px;
      }
    }
  }
  
  @media (max-width: 768px) {
    top: 16px;
    left: 16px;
    
    a {
      width: 44px;
      height: 44px;
    }
  }
`;

export const Options = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
  border-radius: ${props => props.theme.borderRadius.round};
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text};
  transition: all ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.card};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: white;
    border-color: ${props => props.theme.colors.primary};
    transform: scale(1.05);
    box-shadow: ${props => props.theme.shadows.cardHover};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    width: 20px;
    height: 20px;
    
    @media (max-width: 768px) {
      width: 22px;
      height: 22px;
    }
  }
  
  @media (max-width: 768px) {
    top: 16px;
    right: 16px;
    width: 44px;
    height: 44px;
  }
`;

export const OptionsDropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 220px;
  background: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.dropdown};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 8px 0;
  z-index: 20;
  border: 1px solid ${props => props.theme.colors.borderLight};
  animation: slideDown ${props => props.theme.transitions.normal} ease;
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const OptionItem = styled.div`
  padding: 14px 20px;
  font-size: 14px;
  font-weight: ${props => props.theme.fonts.weight.medium};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.primary};
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:first-child {
    border-radius: ${props => props.theme.borderRadius.medium} ${props => props.theme.borderRadius.medium} 0 0;
  }
  
  &:last-child {
    border-radius: 0 0 ${props => props.theme.borderRadius.medium} ${props => props.theme.borderRadius.medium};
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 32px 0;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
    margin: 40px 0;
  }
`;

export const MainProductImage = styled.img`
  width: auto;
  max-width: 300px;
  max-height: 300px;
  height: auto;
  border-radius: ${props => props.theme.borderRadius.large};
  margin: 0 auto 32px;
  display: block;
  box-shadow: ${props => props.theme.shadows.card};
  object-fit: contain;
  border: 1px solid ${props => props.theme.colors.borderLight};
  background: ${props => props.theme.colors.backgroundWarm};
  transition: transform ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: scale(1.01);
    box-shadow: ${props => props.theme.shadows.cardHover};
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${props => props.theme.borderRadius.large};
  margin-bottom: 24px;
  box-shadow: ${props => props.theme.shadows.card};
  border: 1px solid ${props => props.theme.colors.borderLight};
  background: ${props => props.theme.colors.backgroundWarm};
  transition: transform ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.cardHover};
  }
`;

export const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding: 20px;
  background: ${props => props.theme.colors.backgroundWarm};
  border-radius: ${props => props.theme.borderRadius.medium};
  border: 1px solid ${props => props.theme.colors.borderLight};
`;

export const ProductLogo = styled.img`
  width: 64px;
  height: 64px;
  border-radius: ${props => props.theme.borderRadius.medium};
  margin-right: 20px;
  object-fit: cover;
  border: 2px solid ${props => props.theme.colors.borderLight};
  box-shadow: ${props => props.theme.shadows.card};
  transition: transform ${props => props.theme.transitions.normal};
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const ProductHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ProductCategory = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 6px;
  font-weight: ${props => props.theme.fonts.weight.semibold};
  letter-spacing: 0.5px;
`;

export const ProductTitle = styled.h1`
  font-size: 28px;
  font-weight: ${props => props.theme.fonts.weight.bold};
  color: ${props => props.theme.colors.text};
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
  
  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 17px;
  line-height: 1.7;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 32px;
  max-width: 100%;
  
  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 40px;
  }
`;

export const ActionButtonsContainer = styled.div`
  display: none; /* Hide the original buttons */
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 12px 1fr;
  gap: 12px;
  padding: 20px;
  background: ${props => props.theme.colors.background};
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08);
  border-top: 1px solid ${props => props.theme.colors.borderLight};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all ${props => props.theme.transitions.normal};
  
  &[data-at-bottom="true"] {
    position: static;
    box-shadow: none;
    border-top: none;
    margin-top: 32px;
    padding: 0;
    background: transparent;
  }

  /* Center content with max-width */
  > * {
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
  }

  /* Container itself takes full width */
  width: 100%;
  margin: 0;
  
  /* Add padding on the sides for larger screens */
  @media (min-width: 901px) {
    padding-left: calc((100% - 900px) / 2);
    padding-right: calc((100% - 900px) / 2);
  }
  
  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const ButtonSeparator = styled.div`
  width: 8px;
`;

export const UpvoteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.background};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  border: 2px solid ${props => props.active ? props.theme.colors.primary : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 14px 28px;
  font-size: 15px;
  font-weight: ${props => props.theme.fonts.weight.semibold};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.theme.gradients.primary};
    opacity: ${props => props.active ? '1' : '0'};
    transition: opacity ${props => props.theme.transitions.normal};
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.buttonHover};
    border-color: ${props => props.theme.colors.primary};
    background-color: ${props => props.active ? props.theme.colors.primaryHover : props.theme.colors.primary};
    color: white;
    
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;