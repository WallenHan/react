/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
<<<<<<< HEAD
 */

'use strict';

import slugify from 'slugify';

export default (string, directory) => {
=======
 * @flow
 */

import slugify from 'slugify';

export default (string: string, directory?: string): string => {
>>>>>>> upstream/master
  const filename = slugify(string) + '.html';

  return directory ? `/${directory}/${filename}` : filename;
};
