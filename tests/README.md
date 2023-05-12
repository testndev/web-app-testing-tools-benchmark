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
- in `tests\web\navigateOnManyPages.spec.ts` file:
  - inside "_**The-Internet, navigate to pages `[S_3]`**_" tests suite, 38 tests with title:
    - "**should navigate to "`${linkUrl}`" page by clicking on link [`T_${testId}`]**"

### the "**shortest possible example `[T_00]`**" test

Example of shorter test file with only 1 test.

Like this: 

```javascript
it(`shortest possible example [T_00]`, () => {
  expect(1 + 1).to.equal(2);
});
```

### the "_**Arithmetic operations `[S_0]`**_" tests suite

A simple suite of 2 tests, without any interaction with a webapp.

Like this: 

```javascript
describe('Arithmetic operations [S_0]', () => {
  it(`Simple addition [T_01]`, () => {
    expect(2 + 2).to.equal(4);
  });

  it(`Simple multiplication [T_02]`, () => {
    expect(2 * 2).to.equal(4);
  });
})
```

### the "_**The-Internet, login form `[S_1]`**_" tests suite

Tests in this suite use the [login form](https://the-internet.herokuapp.com/login) of "**the-internet**" page: https://the-internet.herokuapp.com/login

Simple actions/verifications:
- click on buttons
- fill input with  text
- check presence of elements, and their text 

### the "_**The-Internet, WYSIWYG text editor `[S_2]`**_" tests suite

Tests in this suite use the [WYSIWYG text editor](https://the-internet.herokuapp.com/tinymce) of  "**the-internet**" page: https://the-internet.herokuapp.com/tinymce

Interesting notes: 
- The text editor is inside an *iFrame*.
- *Loading* of some elements is sometime *slow* (initial text in texrt area).
- Some tests in this suite play with combinations and sequences of keyboard strokes:
  - `CTRL+A` to select all text, 
  - `END` in order to navigate to end of written text,
  - `CTRL+SHIFT+UP` to extend selection to the beginning of current paragraph,
  - `DELETE` to delete text

### the "_**The-Internet, navigate to pages `[S_3]`**_" tests suite

Each of tests of this suite begins at homepage "**the-internet**" page: https://the-internet.herokuapp.com.

According to [dataset (`listOfLinks.ts`)](./listOfLinks.ts), user clicks on a link, and checks that title of new page is correct. 




## Implemented tests

    
| test id | ![Nw](../doc/nw-icon.png)                                    | ![Cypress](../doc/cy-icon.png)                              | ![Pw](../doc/pw-icon.png)                                    | ![Se+Je](../doc/se-js-icon.png)                                 |
| ------- | ------------------------------------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------- |
| `T_00`  | [✔️](./with-nightwatch/tests/simple/simpleSingleTest.spec.ts) | [✔️](./with-cypressio/tests/simple/simpleSingleTest.spec.ts) | [✔️](./with-playwright/tests/simple/simpleSingleTest.spec.ts) | [✔️](./with-selenium-jest/tests/simple/simpleSingleTest.spec.ts) |
| `T_01`  | [✔️](./with-nightwatch/tests/simple/simpleTestSuite.spec.ts)  | [✔️](./with-cypressio/tests/simple/simpleTestSuite.spec.ts)  | [✔️](./with-playwright/tests/simple/simpleTestSuite.spec.ts)  | [✔️](./with-selenium-jest/tests/simple/simpleTestSuite.spec.ts)  |
| `T_02`  | [✔️](./with-nightwatch/tests/simple/simpleTestSuite.spec.ts)  | [✔️](./with-cypressio/tests/simple/simpleTestSuite.spec.ts)  | [✔️](./with-playwright/tests/simple/simpleTestSuite.spec.ts)  | [✔️](./with-selenium-jest/tests/simple/simpleTestSuite.spec.ts)  |
| `T_10`  | [✔️](./with-nightwatch/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-cypressio/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-playwright/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-selenium-jest/tests/web/simpleFormLogin.spec.ts)     |
| `T_11`  | [✔️](./with-nightwatch/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-cypressio/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-playwright/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-selenium-jest/tests/web/simpleFormLogin.spec.ts)     |
| `T_12`  | [✔️](./with-nightwatch/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-cypressio/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-playwright/tests/web/simpleFormLogin.spec.ts)     | [✔️](./with-selenium-jest/tests/web/simpleFormLogin.spec.ts)     |
| `T_20`  | [✔️](./with-nightwatch/tests/web/textEditor.spec.ts)          | [✔️](./with-cypressio/tests/web/textEditor.spec.ts)          | [✔️](./with-playwright/tests/web/textEditor.spec.ts)          | [✔️](./with-selenium-jest/tests/web/textEditor.spec.ts)          |
| `T_21`  | [✔️](./with-nightwatch/tests/web/textEditor.spec.ts)          | [✔️](./with-cypressio/tests/web/textEditor.spec.ts)          | [✔️](./with-playwright/tests/web/textEditor.spec.ts)          | [✔️](./with-selenium-jest/tests/web/textEditor.spec.ts)          |
| `T_22`  | [✔️](./with-nightwatch/tests/web/textEditor.spec.ts)          | [🚨](./with-cypressio/tests/web/textEditor.spec.ts)          | [✔️](./with-playwright/tests/web/textEditor.spec.ts)          | [✔️](./with-selenium-jest/tests/web/textEditor.spec.ts)          |
| `T_3xx` | [⚪](./with-nightwatch/tests/web/navigateOnManyPages.spec.ts) | [⚪](./with-cypressio/tests/web/navigateOnManyPages.spec.ts) | [✔️](./with-playwright/tests/web/navigateOnManyPages.spec.ts) | [⚪](./with-selenium-jest/tests/web/navigateOnManyPages.spec.ts) |
#### *legend:*

|                                 |                                     |
| ------------------------------- | ----------------------------------- |
| ![Nw](../doc/nw-icon.png)       | implementation with Nightwatch      |
| ![Cy](../doc/cy-icon.png)       | implementation with Cypress         |
| ![Pw](../doc/pw-icon.png)       | implementation with Playwright      |
| ![Se+Je](../doc/se-js-icon.png) | implementation with Selenium + Jest |
| ⚪                               | not yet implemented                 |
| ✔️                               | implemented, and pass               |
| 🚨                               | implemented, but fails              |