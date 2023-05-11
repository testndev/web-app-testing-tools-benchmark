## List of tests scenarios

We use  ["**the-internet**" page (the-internet.herokuapp.com)](https://the-internet.herokuapp.com) as target web application.

<table>
    <tr>
        <td align="center" colspan="3"></td>
        <td align="center" colspan="4"
   style="background-color: #eeeeee">location</td>
    </tr>
    <tr>
        <th>id</th>
        <th>title</th>
        <th>comment</th>
        <th><img src="../doc/nw-icon.png" alt="Nightwatch logo" title="implementation with Nightwatch" /></th>
        <th><img src="../doc/cy-icon.png" alt="Cypress logo" title="implementation with Cypress" /></th>
        <th><img src="../doc/pw-icon.png" alt="Playwright logo" title="implementation with Playwright" /></th>
        <th><img src="../doc/se-js-icon.png" alt="Selenium + Jest logos" title="implementation with Selenium + Jest" /></th>
    </tr>
    <tr>
        <td><code>T_00</code></td>
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
        <td rowspan="2">simple tests inside a named test-suite</td>
        <td rowspan="2"><a href="./with-nightwatch/tests/simple/simpleTestSuite.spec.ts" >✔️</a></td>
        <td rowspan="2"><a href="./with-cypressio/tests/simple/simpleTestSuite.spec.ts" >✔️</a></td>
        <td rowspan="2"><a href="./with-playwright/tests/simple/simpleTestSuite.spec.ts" >✔️</a></td>
        <td rowspan="2"><a href="./with-selenium-jest/tests/simple/simpleTestSuite.spec.ts" >✔️</a></td>
    </tr>
    <tr>
        <td><code>T_02</code></td>
        <td><em>Simple multiplication</em></td>
    </tr>
    <tr>
        <td><code>T_10</code></td>
        <td><em>should accept user with valid credentials</em></td>
        <td rowspan=3>use <a href="https://the-internet.herokuapp.com/login"><strong>login</strong> form</a</td>
        <td rowspan=3><a href="./with-nightwatch/tests/web/simpleFormLogin.spec.ts" >✔️</a></td>
        <td rowspan=3><a href="./with-cypressio/tests/web/simpleFormLogin.spec.ts" >✔️</a></td>
        <td rowspan=3><a href="./with-playwright/tests/web/simpleFormLogin.spec.ts" >✔️</a></td>
        <td rowspan=3><a href="./with-selenium-jest/tests/web/simpleFormLogin.spec.ts" >✔️</a></td>
    </tr>
    <tr>
        <td><code>T_11</code></td>
        <td><em>should display error message for incorrect username</em></td>
    </tr>
    <tr>
        <td><code>T_12</code></td>
        <td><em>should display error message for incorrect password</em></td>
    </tr>
    <tr>
        <td><code>T_20</code></td>
        <td><em>should have an initial text</em></td>
        <td rowspan=3>
            <p>
              use <a href="https://the-internet.herokuapp.com/tinymce">WYSIWYG text editor</a>
            </p>
            <ol>
                <li>check presence of the iFrame</li>
                <li>+ <code>CTRL+A</code> combo</li>
                <li>+ <code>CTRL+SHIFT+UP</code> combo</li>
            </ol>
        </td>
        <td rowspan=3>
           all <a href="./with-nightwatch/tests/web/textEditor.spec.ts" >✔️</a>
        </td>
        <td rowspan=3>
            <a href="./with-cypressio/tests/web/textEditor.spec.ts" >✔️✔️❌</a> 
        </td>
        <td rowspan=3>
            all <a href="./with-playwright/tests/web/textEditor.spec.ts" >✔️</a>
        </td>
        <td rowspan=3>
            all <a href="./with-selenium-jest/tests/web/textEditor.spec.ts" >✔️</a>
        </td>
    </tr>
    <tr>
        <td><code>T_21</code></td>
        <td><em>should be able to replace initial text by new one</em></td>
    </tr>
    <tr>
        <td><code>T_22</code></td>
        <td><em>should be able to delete last paragraph with keyboard shortcuts</em></td>
    </tr>
</table>