/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
<<<<<<< HEAD
 */

'use strict';

=======
 * @flow
 */

>>>>>>> upstream/master
import Container from 'components/Container';
import ExternalFooterLink from './ExternalFooterLink';
import FooterLink from './FooterLink';
import FooterNav from './FooterNav';
import MetaTitle from 'templates/components/MetaTitle';
import React from 'react';
import {colors, media} from 'theme';

import ossLogoPng from 'images/oss_logo.png';

<<<<<<< HEAD
const Footer = ({layoutHasSidebar = false}) => (
=======
const Footer = ({layoutHasSidebar = false}: {layoutHasSidebar: boolean}) => (
>>>>>>> upstream/master
  <footer
    css={{
      backgroundColor: colors.darker,
      color: colors.white,
      paddingTop: 10,
      paddingBottom: 50,

      [media.size('sidebarFixed')]: {
        paddingTop: 40,
      },
    }}>
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',

          [media.between('small', 'medium')]: {
            paddingRight: layoutHasSidebar ? 240 : null,
          },

          [media.between('large', 'largerSidebar')]: {
            paddingRight: layoutHasSidebar ? 280 : null,
          },
          [media.between('largerSidebar', 'sidebarFixed', true)]: {
            paddingRight: layoutHasSidebar ? 380 : null,
          },
        }}>
        <div
          css={{
            flexWrap: 'wrap',
            display: 'flex',

            [media.lessThan('large')]: {
              width: '100%',
            },
            [media.greaterThan('xlarge')]: {
              width: 'calc(100% / 3 * 2)',
              paddingLeft: 40,
            },
          }}>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
<<<<<<< HEAD
            <MetaTitle onDark={true}>Docs</MetaTitle>
            <FooterLink to="/docs/hello-world.html">Quick Start</FooterLink>
            <FooterLink to="/docs/thinking-in-react.html">
              Thinking in React
            </FooterLink>
            <FooterLink to="/tutorial/tutorial.html">Tutorial</FooterLink>
            <FooterLink to="/docs/jsx-in-depth.html">
              Advanced Guides
            </FooterLink>
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>Community</MetaTitle>
=======
            <MetaTitle onDark={true}>文档</MetaTitle>
            <FooterLink to="/docs/hello-world.html">快速开始</FooterLink>
            <FooterLink to="/docs/thinking-in-react.html">
              React 理念
            </FooterLink>
            <FooterLink to="/tutorial/tutorial.html">入门教程</FooterLink>
            <FooterLink to="/docs/jsx-in-depth.html">
              高级指引
            </FooterLink>
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>社区</MetaTitle>
>>>>>>> upstream/master
            <ExternalFooterLink
              href="http://stackoverflow.com/questions/tagged/reactjs"
              target="_blank"
              rel="noopener">
              Stack Overflow
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://discuss.reactjs.org"
              target="_blank"
              rel="noopener">
<<<<<<< HEAD
              Discussion Forum
=======
              Discussion 论坛
>>>>>>> upstream/master
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://discord.gg/0ZcbPKXt5bZjGY5n"
              target="_blank"
              rel="noopener">
<<<<<<< HEAD
              Reactiflux Chat
=======
              Reactiflux 聊天室
>>>>>>> upstream/master
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://www.facebook.com/react"
              target="_blank"
              rel="noopener">
              Facebook
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://twitter.com/reactjs"
              target="_blank"
              rel="noopener">
              Twitter
            </ExternalFooterLink>
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
<<<<<<< HEAD
            <MetaTitle onDark={true}>Resources</MetaTitle>
            <FooterLink to="/community/conferences.html">
              Conferences
            </FooterLink>
            <FooterLink to="/community/videos.html">Videos</FooterLink>
            <ExternalFooterLink
              href="https://github.com/facebook/react/wiki/Examples"
              target="_blank"
              rel="noopener">
              Examples
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://github.com/facebook/react/wiki/Complementary-Tools"
              target="_blank"
              rel="noopener">
              Complementary Tools
            </ExternalFooterLink>
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>More</MetaTitle>
            <FooterLink to="/blog/">Blog</FooterLink>
=======
            <MetaTitle onDark={true}>参考资料</MetaTitle>
            <FooterLink to="/community/conferences.html">
              会议
            </FooterLink>
            <FooterLink to="/community/videos.html">视频</FooterLink>
            <FooterLink to="/community/examples.html">示例</FooterLink>
            <FooterLink to="/community/debugging-tools.html">
              开发工具
            </FooterLink>
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>其他</MetaTitle>
            <FooterLink to="/blog/">博客</FooterLink>
>>>>>>> upstream/master
            <ExternalFooterLink
              href="https://github.com/facebook/react"
              target="_blank"
              rel="noopener">
              GitHub
            </ExternalFooterLink>
            <ExternalFooterLink
              href="http://facebook.github.io/react-native/"
              target="_blank"
              rel="noopener">
              React Native
            </ExternalFooterLink>
            <FooterLink to="/acknowledgements.html">
<<<<<<< HEAD
              Acknowledgements
=======
              致谢
>>>>>>> upstream/master
            </FooterLink>
          </FooterNav>
        </div>
        <section
          css={{
            paddingTop: 40,
            display: 'block !important', // Override 'Installation' <style> specifics

            [media.greaterThan('xlarge')]: {
              width: 'calc(100% / 3)',
              order: -1,
            },
            [media.greaterThan('large')]: {
              order: -1,
              width: layoutHasSidebar ? null : 'calc(100% / 3)',
            },
            [media.lessThan('large')]: {
              textAlign: 'center',
              width: '100%',
              paddingTop: 40,
            },
          }}>
          <a
            href="https://code.facebook.com/projects/"
            target="_blank"
            rel="noopener">
            <img
              alt="Facebook Open Source"
              css={{
                maxWidth: 160,
                height: 'auto',
              }}
              src={ossLogoPng}
            />
          </a>
          <p
            css={{
              color: colors.subtleOnDark,
              paddingTop: 15,
            }}>
            Copyright © 2017 Facebook Inc.
          </p>
<<<<<<< HEAD
=======
          <p
            css={{
              color: colors.subtleOnDark,
              paddingTop: 15,
            }}>
            <a href="https://docschina.org/" target="_blank">印记中文</a>
          </p>
>>>>>>> upstream/master
        </section>
      </div>
    </Container>
  </footer>
);

export default Footer;
