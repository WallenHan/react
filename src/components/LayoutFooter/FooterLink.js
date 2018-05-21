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
import Link from 'gatsby-link';
import React from 'react';
import {colors} from 'theme';

<<<<<<< HEAD
const FooterLink = ({children, target, to}) => (
=======
import type {Node} from 'react';

type Props = {
  children: Node,
  target?: string,
  to: string,
};

const FooterLink = ({children, target, to}: Props) => (
>>>>>>> upstream/master
  <Link
    css={{
      lineHeight: 2,
      ':hover': {
        color: colors.brand,
      },
    }}
    to={to}
    target={target}>
    {children}
  </Link>
);

export default FooterLink;
