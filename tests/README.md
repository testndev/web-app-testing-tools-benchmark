## List of tests scenarios

### simple, without web app


We use  ["**the-internet**" page (the-internet.herokuapp.com)](https://the-internet.herokuapp.com) as our test web application.

<table>
    <tr>
        <td>id</td>
        <td>title</td>
        <td>comment</td>
        <td>Nightwatch</td>
        <td>Cypress.io</td>
        <td>Playwright</td>
        <td>Selenium (+Jest)</td>
    </tr>
    <tr>
        <td><code>T_0</code></td>
        <td><em>shorter example ever</em></td>
        <td>shorter test file with only 1 test</td>
        <td><a href="./with-nightwatch/tests/simple/simpleSingleTest.spec.ts" >✔️</a></td>
        <td><a href="./with-cypressio/tests/simple/simpleSingleTest.spec.ts" >✔️</a></td>
        <td><a href="./with-playwright/tests/simple/simpleSingleTest.spec.ts" >✔️</a></td>
        <td><a href="./with-selenium-jest/tests/simple/simpleSingleTest.spec.ts" >✔️</a></td>
    </tr>
    <tr>
        <td><code>T_01</code></td>
        <td><em>Simple addition</em></td>
        <td>simple test inside a named test-suite</td>
        <td><a href="./with-nightwatch/tests/simple/simpleTestSuite.spec.ts" >✔️</a></td>
        <td><a href="./with-cypressio/tests/simple/simpleTestSuite.spec.ts" >✔️</a></td>
        <td><a href="./with-playwright/tests/simple/simpleTestSuite.spec.ts" >✔️</a></td>
        <td><a href="./with-selenium-jest/tests/simple/simpleTestSuite.spec.ts" >✔️</a></td>
    </tr>
    <tr>
        <td><code>T_02</code></td>
        <td><em>Simple multiplication</em></td>
        <td>idem</td>
        <td><a href="./with-nightwatch/tests/simple/simpleTestSuite.spec.ts" >✔️</a></td>
        <td><a href="./with-cypressio/tests/simple/simpleTestSuite.spec.ts" >✔️</a></td>
        <td><a href="./with-playwright/tests/simple/simpleTestSuite.spec.ts" >✔️</a></td>
        <td><a href="./with-selenium-jest/tests/simple/simpleTestSuite.spec.ts" >✔️</a></td>
    </tr>
    <tr>
        <td><code>T_10</code></td>
        <td><em>has a correct title</em></td>
        <td>simple landing-to-page (no actions)</td>
        <td><a href="./with-nightwatch/tests/web/theInternet.spec.ts" >✔️</a></td>
        <td><a href="./with-cypressio/tests/web/theInternet.spec.ts" >✔️</a></td>
        <td><a href="./with-playwright/tests/web/theInternet.spec.ts" >✔️</a></td>
        <td><a href="./with-selenium-jest/tests/web/theInternet.spec.ts" >✔️</a></td>
    </tr>
    <tr>
        <td><code>T_11</code></td>
        <td><em>an error message appears if login with invalid username</em></td>
        <td>use login form</td>
        <td><a href="./with-nightwatch/tests/web/theInternet.spec.ts" >✔️</a></td>
        <td><a href="./with-cypressio/tests/web/theInternet.spec.ts" >✔️</a></td>
        <td><a href="./with-playwright/tests/web/theInternet.spec.ts" >✔️</a></td>
        <td><a href="./with-selenium-jest/tests/web/theInternet.spec.ts" >✔️</a></td>
    </tr>
</table>