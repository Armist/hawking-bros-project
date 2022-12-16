import {
  FooterBottom, FooterCategories, FooterCategory, FooterCategoryItem, FooterCategoryList,
  FooterInfo,
  FooterInner,
  FooterLeft,
  FooterLogo,
  FooterNavigation, FooterPage, FooterPages, FooterPayment, FooterPaymentItem,
  FooterRight, FooterSocials, FooterSocialsLink, FooterSocialsLinks, FooterSocialsText,
  StyledFooter
} from "./Footer.styles";
import VisaLogo from '../../../public/visa.png';
import WebPayLogo from '../../../public/webpay.png';
import VisaVerifiedLogo from '../../../public/verified-by-visa.png';
import MastercardLogo from '../../../public/mastercard.png';
import MastercardSecure from '../../../public/mastercard-securecode.png';
import Belcart from '../../../public/belkart.png';
import {Container} from "../Container/Container";
import {Logo} from "../Logo/Logo";
import {IoLogoVk, IoLogoFacebook, IoLogoInstagram} from "react-icons/io5";

import {footerData} from "../../data/FooterData";
import {Link} from "react-router-dom";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterInner>
          <FooterLeft>
            {/* LOGO */}
            <FooterLogo>
              <Logo/>
              <span>СДАЁМ БАЙ</span>
            </FooterLogo>

            {/* INFO */}
            <FooterInfo>
              <span>ИП Шушкевич Андрей Викторович</span>
              <span>УНП 192602485 Минским горисполкомом 10.02.2016</span>
              <span>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</span>
              <span>+375 29 621 48 33, sdaem@sdaem.by</span>
              <span>Режим работы: 08:00-22:00</span>
            </FooterInfo>
          </FooterLeft>

          <FooterRight>
            <FooterNavigation>
              <FooterCategories>
                {footerData.rent.map(item => (
                  <FooterCategory key={item.text}>
                    <Link to={item.path}>{item.text}</Link>
                    {item.cities && (
                      <FooterCategoryList>
                        {item.cities.map(city => (
                          <FooterCategoryItem key={city.text}>
                            <Link to={city.path}>{city.text}</Link>
                          </FooterCategoryItem>
                        ))}
                      </FooterCategoryList>
                    )}
                  </FooterCategory>
                ))}
              </FooterCategories>

              <FooterPages>
                {footerData.pages.map(item => (
                  <FooterPage key={item.text}>
                    <Link to={item.path}>{item.text}</Link>
                  </FooterPage>
                ))}
              </FooterPages>
            </FooterNavigation>

            <FooterBottom>
              <FooterSocials>
                <FooterSocialsText>Мы в соцсетях</FooterSocialsText>
                <FooterSocialsLinks>
                  <FooterSocialsLink href={'https://instagram.com'}>
                    <IoLogoInstagram size={24}/>
                  </FooterSocialsLink>
                  <FooterSocialsLink href={'https://vk.com/feed'}>
                    <IoLogoVk size={24}/>
                  </FooterSocialsLink>
                  <FooterSocialsLink href={'https://facebook.com'}>
                    <IoLogoFacebook size={20}/>
                  </FooterSocialsLink>
                </FooterSocialsLinks>
              </FooterSocials>

              <FooterPayment>
                <FooterPaymentItem
                  src={VisaLogo}
                  alt={'Visa logotype'}
                  width={'42px'}
                  height={'13px'}
                />
                <FooterPaymentItem
                  src={WebPayLogo}
                  alt={'WebPay logotype'}
                  width={'86px'}
                  height={'16px'}
                />
                <FooterPaymentItem
                  src={VisaVerifiedLogo}
                  alt={'VerifiedByVisa logotype'}
                  width={'38px'}
                  height={'16px'}
                />
                <FooterPaymentItem
                  src={MastercardLogo}
                  alt={'MasterCard logotype'}
                  width={'26px'}
                  height={'20px'}
                />
                <FooterPaymentItem
                  src={MastercardSecure}
                  alt={'MasterCard SecureCode logotype'}
                  width={'46px'}
                  height={'16px'}
                />
                <FooterPaymentItem
                  src={Belcart}
                  alt={'Belcart logotype'}
                  width={'22px'}
                  height={'30px'}
                />
              </FooterPayment>
            </FooterBottom>
          </FooterRight>
        </FooterInner>
      </Container>
    </StyledFooter>
  )
}
