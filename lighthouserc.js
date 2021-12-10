module.exports = {
  ci: {
    collect: {
      staticDistDir: './_site',
    },
    assert: {
      "categories:performance": ["error", {"minScore": 100}],
      "categories:accessibility": ["error", {"minScore": 100}],
      "categories:best-practices": ["error", {"minScore": 100}],
      "categories:seo": ["error", {"minScore": 100}],
    },
  },
};
