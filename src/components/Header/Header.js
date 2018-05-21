/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
<<<<<<< HEAD
 */

'use strict';

import React from 'react';
import {colors, fonts} from 'theme';

const Header = ({children}) => (
=======
 * @flow
 */

import React from 'react';
import {colors, fonts} from 'theme';

import type {Node} from 'react';

const Header = ({children}: {children: Node}) => (
>>>>>>> upstream/master
  <h1
    css={{
      color: colors.dark,
      marginRight: '5%',
      ...fonts.header,
    }}>
    {children}
  </h1>
);

export default Header;
