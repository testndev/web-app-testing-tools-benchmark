## List of tests scenarios

We use  ["**the-internet**" page (the-internet.herokuapp.com)](https://the-internet.herokuapp.com) as target web application.


## The tests

- in `tests\simple\simpleSingleTest.spec.ts` file:
  - "**shortest possible example `[T_00]`**" test
- in `tests\simple\simpleTestSuite.spec.ts` file:
  - inside "_**Arithmetic operations `[S_0]`**_" tests suite:
    - "**Simple addition `[T_01]`**" test
    - "**Simple multiplication `[T_02]`**" test
- in `tests\web\simpleFormLogin.spec.ts` file:
  - inside "_**The-Internet, login form `[S_1]`**_" tests suite:
    - "**should accept user with valid credentials `[T_10]`**" test
    - "**should display error message for incorrect username `[T_11]`**" test
    - "**should display error message for incorrect password `[T_12]`**" test
- in `tests\web\textEditor.spec.ts` file:
  - inside "_**The-Internet, WYSIWYG text editor `[S_2]`**_" tests suite:
    - "**should have an initial text `[T_20]`**" test
    - "**should be able to replace initial text by new one `[T_21]`**" test
    - "**should be able to delete last paragraph with keyboard shortcuts `[T_22]`**" test


### the "**shortest possible example `[T_00]`**" test

Example of shorter test file with only 1 test.

### the "_**Arithmetic operations `[S_0]`**_" tests suite

A simple suite of 2 tests, without any interaction with a webapp.

### the "_**The-Internet, login form `[S_1]`**_" tests suite

Tests in this suite use the [login form](https://the-internet.herokuapp.com/login) of  ["**the-internet**" page (the-internet.herokuapp.com)](https://the-internet.herokuapp.com)

### the "_**The-Internet, WYSIWYG text editor `[S_2]`**_" tests suite

Tests in this suite use the [WYSIWYG text editor](https://the-internet.herokuapp.com/tinymce) of  ["**the-internet**" page (the-internet.herokuapp.com)](https://the-internet.herokuapp.com)

The text editor is inside an iFrame. Loading of some elements is not immediate (initial text in texrt area).

Some tests in this suite play with combinations and sequences of keyboard strokes:
- `CTRL+A` to select all text, 
- `END` in order to navigate to end of written text,
- `CTRL+SHIFT+UP` to extend selection to the beginning of current paragraph,
- `DELETE` to delete text


## Implemented tests

    
| id     | ![Nw](../doc/nw-icon.png)                                    | ![Cypress](../doc/cy-icon.png)                              | ![Pw](../doc/pw-icon.png)                                    | ![Se+Je](../doc/se-js-icon.png)                                 |
| ------ | ------------------------------------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------- |
| `T_00` | [✔️](./with-nightwatch/tests/simple/simpleSingleTest.spec.ts) | [✔️](./with-cypressio/tests/simple/simpleSingleTest.spec.ts) | [✔️](./with-playwright/tests/simple/simpleSingleTest.spec.ts) | [✔️](./with-selenium-jest/tests/simple/simpleSingleTest.spec.ts) |
| `T_01` | [✔️](./with-nightwatch/tests/simple/simpleTestSuite.spec.ts)  | [✔️](./with-cypressio/tests/simple/simpleTestSuite.spec.ts)  | [✔️](./with-playwright/tests/simple/simpleTestSuite.spec.ts)  | [✔️](./with-selenium-jest/tests/simple/simpleTestSuite.spec.ts)  |
| `T_02` | [✔️](./with-nightwatch/tests/simple/simpleTestSuite.spec.ts)  | [✔️](./with-cypressio/tests/simple/simpleTestSuite.spec.ts)  | [✔️](./with-playwright/tests/simple/simpleTestSuite.spec.ts)  | [✔️](./with-selenium-jest/tests/simple/simpleTestSuite.spec.ts)  |
| `T_10` | [✔️](./with-nightwatch/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-cypressio/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-playwright/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-selenium-jest/tests/web/simpleFormLogin.spec.ts)     |
| `T_11` | [✔️](./with-nightwatch/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-cypressio/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-playwright/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-selenium-jest/tests/web/simpleFormLogin.spec.ts)     |
| `T_12` | [✔️](./with-nightwatch/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-cypressio/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-playwright/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-selenium-jest/tests/web/simpleFormLogin.spec.ts)     |
| `T_20` | [✔️](./with-nightwatch/tests/web/textEditor.spec.ts)          | [✔️](./with-cypressio/tests/web/textEditor.spec.ts)          | [✔️](./with-playwright/tests/web/textEditor.spec.ts)          | [✔️](./with-selenium-jest/tests/web/textEditor.spec.ts)          |
| `T_21` | [✔️](./with-nightwatch/tests/web/textEditor.spec.ts)          | [✔️](./with-cypressio/tests/web/textEditor.spec.ts)          | [✔️](./with-playwright/tests/web/textEditor.spec.ts)          | [✔️](./with-selenium-jest/tests/web/textEditor.spec.ts)          |
| `T_22` | [✔️](./with-nightwatch/tests/web/textEditor.spec.ts)          | [🚨](./with-cypressio/tests/web/textEditor.spec.ts)          | [✔️](./with-playwright/tests/web/textEditor.spec.ts)          | [✔️](./with-selenium-jest/tests/web/textEditor.spec.ts)          |

<details>
<summary>legend: </summary>
*legend:*

|                                 |                                     |
| ------------------------------- | ----------------------------------- |
| ![Nw](../doc/nw-icon.png)       | implementation with Nightwatch      |
| ![Cy](../doc/cy-icon.png)       | implementation with Cypress         |
| ![Pw](../doc/pw-icon.png)       | implementation with Playwright      |
| ![Se+Je](../doc/se-js-icon.png) | implementation with Selenium + Jest |
| ✔️                               | implemented, and pass               |
| 🚨                               | implemented, but fails              |
</details>