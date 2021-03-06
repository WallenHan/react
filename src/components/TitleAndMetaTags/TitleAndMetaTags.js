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
import Helmet from 'react-helmet';
import React from 'react';

const defaultDescription = 'A JavaScript library for building user interfaces';

<<<<<<< HEAD
const TitleAndMetaTags = ({title, ogDescription, ogUrl}) => {
=======
type Props = {
  title: string,
  ogDescription: string,
  ogUrl: string,
};

const TitleAndMetaTags = ({title, ogDescription, ogUrl}: Props) => {
>>>>>>> upstream/master
  return (
    <Helmet title={title}>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:image" content="/logo-og.png" />
      <meta
        property="og:description"
        content={ogDescription || defaultDescription}
      />
      <meta property="fb:app_id" content="623268441017527" />
    </Helmet>
  );
};

export default TitleAndMetaTags;
