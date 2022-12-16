import styled from "styled-components";
import {theme} from "../../styles/theme";
import {mText, px2vw} from "../../styles/styles";

export const StyledFooter = styled.footer`
  height: auto;
  position: relative;
  width: 100%;

  background: #FFFFFF;
  box-shadow: 0px -11px 40px rgba(39, 95, 158, 0.05);

  a {
    transition: ${theme.transition.base};
  }

  a:hover {
    cursor: pointer;
    color: ${theme.colors.yellow};
  }
`

export const FooterInner = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 300px) 1fr;
  grid-gap: 30px;

  padding: 40px 80px 46px 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 40px 0;
  }
  
  @media (max-width: ${theme.breakpoints.laptop}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
  }
`

export const FooterLeft = styled.div`
  max-width: 297px;
  display: grid;
  grid-template-rows: 44px 1fr;
  grid-gap: 36px;

  @media (max-width: ${theme.breakpoints.laptop}) {
    order: 1;
  }
`

export const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    color: ${theme.colors.gray};
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeights.xs};
    font-weight: ${theme.weights.medium};
  }
`

export const FooterInfo = styled.span`
  color: ${theme.colors.gray};
  font-size: ${theme.fontSizes.xxs};
  line-height: ${theme.lineHeights.xxs};
  font-weight: ${theme.weights.normal};
  word-wrap: unset;
  display: flex;
  flex-direction: column;

  span {
    letter-spacing: .0225em;
  }

  @media (max-width: ${theme.breakpoints.laptop}) {
    flex-direction: row;
    justify-content: space-between;                
  }
`

export const FooterRight = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 30px;
  grid-gap: 38px;

  @media (max-width: ${theme.breakpoints.laptop}) {
    order: -1;
  }
`

export const FooterNavigation = styled.nav`
  max-height: 96px;
  height: 100%;
  display: grid;
  grid-template-columns: 560px 156px;
  grid-gap: 98px;
`

export const FooterCategories = styled.ul`
  max-width: 560px;
  max-height: 95px;
  width: 100%;
  display: grid;
  grid-template-columns:repeat(2, minmax(150px, 341px));
  grid-template-rows: 17px 17px 17px;
  grid-auto-flow: column;
  grid-gap: 21px 69px;
`

export const FooterCategory = styled.li`
  font-weight: ${theme.weights.bold};
  color: ${theme.colors.black};
  display: inline-block;

  ${mText}

  &:last-child > a {
    pointer-events: none;
  }
  
  &:last-child {
    grid-column: span 2;
  }
`

export const FooterCategoryList = styled.ul`
  margin-top: 12px;
  width: inherit;
  
  display: grid;
  grid-template-columns: 136px 152px;
  grid-template-rows: repeat(3, 17px);
  grid-auto-flow: column;
  grid-gap: 8px 53px;
  max-width: 341px;
`

export const FooterCategoryItem = styled.li`
  font-weight: ${theme.weights.normal};
  color: ${theme.colors.gray};
`

export const FooterPages = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  max-height: 96px;
  height: 100%;
`

export const FooterPage = styled.li`
  font-weight: ${theme.weights.normal};
  color: ${theme.colors.gray};
  display: inline-block;
  min-width: 215px;

  ${mText}
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`

export const FooterBottom = styled.div`
  display: grid;
  grid-template-columns:1fr 340px;
  grid-gap: 20px;
`

export const FooterSocials = styled.div`
  display: flex;
  flex-direction: row;`

export const FooterSocialsText = styled.span`
  margin-right: ${px2vw(1920, 24)};
  display: flex;
  align-items: center;
  font-weight: ${theme.weights.medium};
  ${mText}
`

export const FooterSocialsLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
`

export const FooterSocialsLink = styled.a`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: ${px2vw(1920, 15)};
  }
`

export const FooterPayment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`

export const FooterPaymentItem = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
  height: props.height,
  width: props.width,
}))`
  width: ${props => props.width};
  height: ${props => props.height};
`
