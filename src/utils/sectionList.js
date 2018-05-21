/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
<<<<<<< HEAD
 */

'use strict';

import navCommunity from '../../content/community/nav.yml';
import navDocs from '../../content/docs/nav.yml';
import navTutorial from '../../content/tutorial/nav.yml';

const sectionListDocs = navDocs.map(item => ({
=======
 * @flow
 */

// $FlowExpectedError
import navCommunity from '../../content/community/nav.yml';
// $FlowExpectedError
import navDocs from '../../content/docs/nav.yml';
// $FlowExpectedError
import navTutorial from '../../content/tutorial/nav.yml';

const sectionListDocs = navDocs.map((item: Object): Object => ({
>>>>>>> upstream/master
  ...item,
  directory: 'docs',
}));

<<<<<<< HEAD
const sectionListCommunity = navCommunity.map(item => ({
=======
const sectionListCommunity = navCommunity.map((item: Object): Object => ({
>>>>>>> upstream/master
  ...item,
  directory: 'community',
}));

export {
  sectionListCommunity,
  sectionListDocs,
  navTutorial as sectionListTutorial,
};
