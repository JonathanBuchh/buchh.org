module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    collect: {
      staticDistDir: "./public",
      numberOfRuns: 1,
    },
    assert: {
      "assertions": {
        "categories:accessibility": ["error", {"minScore": 1}],
        "categories:best-practices": ["error", {"minScore": 1}],
        "categories:seo": ["error", {"minScore": 1}],
      }
    },
  },
};
