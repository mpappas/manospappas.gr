import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  position: relative;
  overflow: hidden;
  background-color: #072a3d;
  padding: 100px 0 0;
  color: #fff;
  @media (max-width: 990px) {
    padding: 80px 0;
  }
  @media (max-width: 767px) {
    padding: 70px 0 50px 0;
  }
  @media (max-width: 575px) {
    padding: 70px 0 0 0;
  }

  .footer_social {
    margin-bottom: 30px;
    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
    a {
      svg {
        @media (max-width: 990px) {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
`;

export const FooterNav = styled.ul`
  margin: 0;
  padding: 0;
  margin-left: auto;
  @media (max-width: 575px) {
    margin-left: 0;
  }
`;

export const FooterNavItem = styled.li`
  display: inline-block;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }

  a {
    color: #fff;
    font-size: 14px;
    transition: 0.15s ease-in-out;
    &:hover {
      color: #0e6ebc;
    }
  }
`;
