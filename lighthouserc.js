// module.exports = {
//   ci: {
//     collect: {
//       staticDistDir: './_site',
//       numberOfRuns: 1,
//     },
//     assert: {
//       "categories:performance": ["error", {"minScore": 1}],
//       "categories:accessibility": ["error", {"minScore": 1}],
//       "categories:best-practices": ["error", {"minScore": 1}],
//       "categories:seo": ["error", {"minScore": 1}],
//     },
//   },
// };
module.exports = {
  ci: {
    collect: {
      staticDistDir: './_site',
      numberOfRuns: 1,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
