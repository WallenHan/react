/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

<<<<<<< HEAD
'use strict';

=======
>>>>>>> upstream/master
import Container from 'components/Container';
import Flex from 'components/Flex';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import {colors, fonts, media} from 'theme';

const NavigationFooter = ({next, prev, location}) => {
  return (
    <div
      css={{
        background: colors.dark,
        color: colors.white,
        paddingTop: 50,
        paddingBottom: 50,
      }}>
      <Container>
        <Flex
          type="ul"
          halign="space-between"
          css={{
            [media.between('small', 'medium')]: {
              paddingRight: 240,
            },

            [media.between('large', 'largerSidebar')]: {
              paddingRight: 280,
            },

            [media.between('largerSidebar', 'sidebarFixed', true)]: {
              paddingRight: 380,
            },
          }}>
          <Flex basis="50%" type="li">
            {prev && (
              <div>
<<<<<<< HEAD
                <SecondaryLabel>Previous article</SecondaryLabel>
=======
                <SecondaryLabel>上一篇</SecondaryLabel>
>>>>>>> upstream/master
                <div
                  css={{
                    paddingTop: 10,
                  }}>
<<<<<<< HEAD
                  <PrimaryLink location={location} to={prev}>
                    {linkToTitle(prev)}
=======
                  <PrimaryLink location={location} to={`${prev.id}.html`}>
                    {prev.title}
>>>>>>> upstream/master
                  </PrimaryLink>
                </div>
              </div>
            )}
          </Flex>
          {next && (
            <Flex
              halign="flex-end"
              basis="50%"
              type="li"
              css={{
                textAlign: 'right',
              }}>
              <div>
<<<<<<< HEAD
                <SecondaryLabel>Next article</SecondaryLabel>
=======
                <SecondaryLabel>下一篇</SecondaryLabel>
>>>>>>> upstream/master
                <div
                  css={{
                    paddingTop: 10,
                  }}>
<<<<<<< HEAD
                  <PrimaryLink location={location} to={next}>
                    {linkToTitle(next)}
=======
                  <PrimaryLink location={location} to={`${next.id}.html`}>
                    {next.title}
>>>>>>> upstream/master
                  </PrimaryLink>
                </div>
              </div>
            </Flex>
          )}
        </Flex>
      </Container>
    </div>
  );
};

NavigationFooter.propTypes = {
<<<<<<< HEAD
  next: PropTypes.string,
  prev: PropTypes.string,
=======
  next: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  prev: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
>>>>>>> upstream/master
};

export default NavigationFooter;

<<<<<<< HEAD
const linkToTitle = link => link.replace(/-/g, ' ').replace('.html', '');

=======
>>>>>>> upstream/master
const PrimaryLink = ({children, to, location}) => {
  // quick fix
  // TODO: replace this with better method of getting correct full url
  const updatedUrl =
    (location && location.pathname.replace(/\/[^/]+\.html/, '/' + to)) || to;
  return (
    <Link
      css={{
        display: 'inline',
<<<<<<< HEAD
        textTransform: 'capitalize',
=======
>>>>>>> upstream/master
        borderColor: colors.subtle,
        transition: 'border-color 0.2s ease',
        fontSize: 30,
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',

        [media.lessThan('large')]: {
          fontSize: 24,
        },
        [media.size('xsmall')]: {
          fontSize: 16,
        },
        ':hover': {
          borderColor: colors.white,
        },
      }}
      to={updatedUrl}>
      {children}
    </Link>
  );
};

const SecondaryLabel = ({children}) => (
  <div
    css={{
      color: colors.brand,
      ...fonts.small,
    }}>
    {children}
  </div>
);
