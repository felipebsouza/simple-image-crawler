module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    }
};

