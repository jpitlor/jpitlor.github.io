const testPathIgnorePatterns = [
    'node_modules',
    '<rootDir>/public',
    '<rootDir>/coverage',
    '<rootDir>/.cache',
];

module.exports = {
    projects: [
        {
            displayName: 'Tests',
            transform: {
                '^.+\\.[jt]sx?$': `<rootDir>/jest-preprocess.js`,
            },
            moduleNameMapper: {
                '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
                '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
            },
            testPathIgnorePatterns,
            transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
            globals: {
                __PATH_PREFIX__: ``,
            },
            testURL: `http://localhost`,
            setupFiles: [`<rootDir>/loader-shim.js`],
        },
        {
            displayName: 'ESLint',
            runner: 'jest-runner-eslint',
            testRegex: ['\\.[jt]sx?$'],
            testPathIgnorePatterns,
        },
    ],
    watchPlugins: ['jest-runner-eslint/watch-fix'],
};
