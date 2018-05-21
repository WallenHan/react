/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
<<<<<<< HEAD
 */

'use strict';

import {urlRoot} from 'site-constants';

export default slug =>
=======
 * @flow
 */

import {urlRoot} from 'site-constants';

export default (slug: string): string | null =>
>>>>>>> upstream/master
  slug == null ? null : `${urlRoot}/${slug.replace(/^\//, '')}`;
