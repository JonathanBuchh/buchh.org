module.exports = {
  ci: {
    collect: {
      staticDistDir: './_site',
      numberOfRuns: 1,
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      "preset": "lighthouse:no-pwa",
    },
  },
};
