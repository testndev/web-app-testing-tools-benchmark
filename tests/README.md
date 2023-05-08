## List of tests scenarios

### simple, without web app

 
1. a tests' suite, with some simple tests

| id     | title                   | comment                               | file example                                                                        |
| ------ | ----------------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| `T_0`  | *shorter example ever*  | shorter test file                     | [ simpleSingleTest.spec.ts](with-nightwatch/tests/simple/simpleSingleTest.spec.ts)  |
| `T_01` | *Simple addition*       | simple test inside a named test-suite | [ simpleTestSuite.spec.ts](with-nightwatch/tests/simple/simpleTestSuite.spec.ts#L2) |
| `T_02` | *Simple multiplication* | simple test inside a named test-suite | [ simpleTestSuite.spec.ts](with-nightwatch/tests/simple/simpleTestSuite.spec.ts#L6) |


### Tests with a web app

We use  ["**the-internet**" page (the-internet.herokuapp.com)](https://the-internet.herokuapp.com) as our test web application.

| id     | title                                                      | comment                             | file                                                                 |
| ------ | ---------------------------------------------------------- | ----------------------------------- | -------------------------------------------------------------------- |
| `T_10` | *has a correct title*                                      | simple landing-to-page (no actions) | [theInternet.spec.ts](with-nightwatch/tests/web/theInternet.spec.ts) |
| `T_11` | *an error message appears if login with invalid username* | use login form                      | [theInternet.spec.ts](with-nightwatch/tests/web/theInternet.spec.ts) |
