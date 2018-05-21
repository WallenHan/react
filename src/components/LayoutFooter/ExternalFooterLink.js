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
import React from 'react';
import {colors} from 'theme';
import ExternalLinkSvg from 'templates/components/ExternalLinkSvg';

<<<<<<< HEAD
const ExternalFooterLink = ({children, href, target, rel}) => (
=======
import type {Node} from 'react';

type Props = {
  children: Node,
  href: string,
  target?: string,
  rel?: string,
};

const ExternalFooterLink = ({children, href, target, rel}: Props) => (
>>>>>>> upstream/master
  <a
    css={{
      lineHeight: 2,
      ':hover': {
        color: colors.brand,
      },
    }}
    href={href}
    target={target}
    rel={rel}>
    {children}
    <ExternalLinkSvg
      cssProps={{
        verticalAlign: -2,
        display: 'inline-block',
        marginLeft: 5,
        color: colors.subtle,
      }}
    />
  </a>
);

export default ExternalFooterLink;
