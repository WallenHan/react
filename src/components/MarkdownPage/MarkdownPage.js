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
import Flex from 'components/Flex';
import MarkdownHeader from 'components/MarkdownHeader';
import NavigationFooter from 'templates/components/NavigationFooter';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> upstream/master
import React from 'react';
import StickyResponsiveSidebar from 'components/StickyResponsiveSidebar';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import findSectionForPath from 'utils/findSectionForPath';
import toCommaSeparatedList from 'utils/toCommaSeparatedList';
import {sharedStyles} from 'theme';
import createOgUrl from 'utils/createOgUrl';

<<<<<<< HEAD
const MarkdownPage = ({
  authors,
=======
import type {Node} from 'types';

type Props = {
  authors: Array<string>,
  createLink: Function, // TODO: Add better flow type once we Flow-type createLink
  date?: string,
  enableScrollSync?: boolean,
  ogDescription: string,
  location: Location,
  markdownRemark: Node,
  sectionList: Array<Object>, // TODO: Add better flow type once we have the Section component
  titlePostfix: string,
};

const getPageById = (sectionList: Array<Object>, templateFile: ?string) => {
  if (!templateFile) {
    return null;
  }

  const sectionItems = sectionList.map(section => section.items);
  const flattenedSectionItems = [].concat.apply([], sectionItems);
  const linkId = templateFile.replace('.html', '');

  return flattenedSectionItems.find(item => item.id === linkId);
};

const MarkdownPage = ({
  authors = [],
>>>>>>> upstream/master
  createLink,
  date,
  enableScrollSync,
  ogDescription,
  location,
  markdownRemark,
  sectionList,
  titlePostfix = '',
<<<<<<< HEAD
}) => {
  const hasAuthors = authors.length > 0;
  const titlePrefix = markdownRemark.frontmatter.title || '';

=======
}: Props) => {
  const hasAuthors = authors.length > 0;
  const titlePrefix = markdownRemark.frontmatter.title || '';

  const prev = getPageById(sectionList, markdownRemark.frontmatter.prev);
  const next = getPageById(sectionList, markdownRemark.frontmatter.next);

>>>>>>> upstream/master
  return (
    <Flex
      direction="column"
      grow="1"
      shrink="0"
      halign="stretch"
      css={{
        width: '100%',
        flex: '1 0 auto',
        position: 'relative',
        zIndex: 0,
      }}>
      <TitleAndMetaTags
        ogDescription={ogDescription}
        ogUrl={createOgUrl(markdownRemark.fields.slug)}
        title={`${titlePrefix}${titlePostfix}`}
      />
      <div css={{flex: '1 0 auto'}}>
        <Container>
          <div css={sharedStyles.articleLayout.container}>
            <Flex type="article" direction="column" grow="1" halign="stretch">
              <MarkdownHeader title={titlePrefix} />

              {(date || hasAuthors) && (
                <div css={{marginTop: 15}}>
                  {date}{' '}
                  {hasAuthors && (
                    <span>
                      by{' '}
                      {toCommaSeparatedList(authors, author => (
                        <a
                          css={sharedStyles.link}
                          href={author.frontmatter.url}
                          key={author.frontmatter.name}>
                          {author.frontmatter.name}
                        </a>
                      ))}
                    </span>
                  )}
                </div>
              )}

              <div css={sharedStyles.articleLayout.content}>
                <div
                  css={[sharedStyles.markdown]}
                  dangerouslySetInnerHTML={{__html: markdownRemark.html}}
                />

                {markdownRemark.fields.path && (
                  <div css={{marginTop: 80}}>
                    <a
                      css={sharedStyles.articleLayout.editLink}
<<<<<<< HEAD
                      href={`https://github.com/discountry/react/tree/master/content/${markdownRemark
                        .fields.path}`}>
                      纠错
=======
                      href={`https://github.com/discountry/react/tree/master/content/${
                        markdownRemark.fields.path
                      }`}>
                      编辑本页面
>>>>>>> upstream/master
                    </a>
                  </div>
                )}
              </div>
            </Flex>

            <div css={sharedStyles.articleLayout.sidebar}>
              <StickyResponsiveSidebar
                enableScrollSync={enableScrollSync}
                createLink={createLink}
                defaultActiveSection={findSectionForPath(
                  location.pathname,
                  sectionList,
                )}
                location={location}
                sectionList={sectionList}
              />
            </div>
          </div>
        </Container>
      </div>

<<<<<<< HEAD
      {/* TODO Read prev/next from index map, not this way */}
      {(markdownRemark.frontmatter.next || markdownRemark.frontmatter.prev) && (
        <NavigationFooter
          location={location}
          next={markdownRemark.frontmatter.next}
          prev={markdownRemark.frontmatter.prev}
        />
=======
      {(next || prev) && (
        <NavigationFooter location={location} next={next} prev={prev} />
>>>>>>> upstream/master
      )}
    </Flex>
  );
};

<<<<<<< HEAD
MarkdownPage.defaultProps = {
  authors: [],
};

// TODO Better types
MarkdownPage.propTypes = {
  authors: PropTypes.array.isRequired,
  createLink: PropTypes.func.isRequired,
  date: PropTypes.string,
  enableScrollSync: PropTypes.bool,
  location: PropTypes.object.isRequired,
  markdownRemark: PropTypes.object.isRequired,
  sectionList: PropTypes.array.isRequired,
};

=======
>>>>>>> upstream/master
export default MarkdownPage;
