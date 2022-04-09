import React from 'react';
import { FooterStyles } from '../styles/FooterStyles';
import { Logo } from './Logo';
import ParagraphText from './typography/ParagraphText';

export const Footer = () => (
  <FooterStyles>
    <div className="container">
      <Logo />
      <ParagraphText className="footer__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ullam error
        accusantium commodi laboriosam iusto quam, libero aliquam labore earum
      </ParagraphText>
    </div>
  </FooterStyles>
);
