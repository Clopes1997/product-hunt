import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: 16px;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 80px; /* Add space for the footer */
`;

export const ProductDetailContent = styled.div`
  padding-top: 24px;
`;

export const BackButton = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 10;
  cursor: pointer;
`;

export const Options = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: right;
  justify-content: right;
  z-index: 10;
  cursor: pointer;
  position: absolute;
`;

export const OptionsDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px 0;
  margin-top: 8px;
  z-index: 20;
`;

export const OptionItem = styled.div`
  padding: 12px 16px;
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.lightGray};
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin: 24px 0;
`;

export const MainProductImage = styled.img`
  width: 100%;
  max-width: 500px;
  max-height: 500px;
  height: auto;
  border-radius: 12px;
  margin: 0 auto 24px;
  display: block;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  object-fit: contain;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

export const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const ProductLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  margin-right: 16px;
  object-fit: cover;
`;

export const ProductHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductCategory = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 4px;
`;

export const ProductTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  margin: 0;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 24px;
`;

export const ActionButtonsContainer = styled.div`
  display: none; /* Hide the original buttons */
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 8px 1fr;
  gap: 8px;
  padding: 16px;
  background: ${props => props.theme.colors.background};
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: transform 0.3s ease;
  
  &[data-at-bottom="true"] {
    position: static;
    box-shadow: none;
    margin-top: 24px;
  }

  /* Center content with max-width */
  > * {
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
  }

  /* Container itself takes full width */
  width: 100%;
  margin: 0;
  
  /* Add padding on the sides for larger screens */
  @media (min-width: 801px) {
    padding-left: calc((100% - 800px) / 2);
    padding-right: calc((100% - 800px) / 2);
  }
`;

export const ButtonSeparator = styled.div`
  width: 8px;
`;

export const UpvoteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.active ? props.theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  border: 1px solid ${props => props.active ? 'transparent' : props.theme.colors.lightGray};
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: ${props => props.active ? 0.9 : 1};
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.lightGray};
  }

  &:active {
    transform: translateY(0);
  }
`;