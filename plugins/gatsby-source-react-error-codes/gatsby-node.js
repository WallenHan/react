const request = require('request-promise');

const errorCodesUrl =
  'http://raw.githubusercontent.com/facebook/react/master/scripts/error-codes/codes.json';

exports.sourceNodes = async ({boundActionCreators}) => {
  const {createNode} = boundActionCreators;

<<<<<<< HEAD
  const jsonString = await request(errorCodesUrl);

  createNode({
    id: 'error-codes',
    children: [],
    parent: 'ERRORS',
    internal: {
      type: 'ErrorCodesJson',
      contentDigest: jsonString,
    },
  });
=======
  try {
    const jsonString = await request(errorCodesUrl);

    createNode({
      id: 'error-codes',
      children: [],
      parent: 'ERRORS',
      internal: {
        type: 'ErrorCodesJson',
        contentDigest: jsonString,
      },
    });
  } catch (error) {
    console.error(
      `The gatsby-source-react-error-codes plugin has failed:\n${
        error.message
      }`,
    );

    process.exit(1);
  }
>>>>>>> upstream/master
};
