const defaultCoverageThreshold = 80
const config = {
    verbose: true,
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: defaultCoverageThreshold,
            functions: defaultCoverageThreshold,
            lines: defaultCoverageThreshold,
            statements: defaultCoverageThreshold
        }
    },
    testMatch: [
        '**/__tests__/**/*.js'
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/coverage/'
    ]
}

module.exports = config