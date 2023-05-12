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



    
| id     | title                                                             | ![implementation with Nightwatch](../doc/nw-icon.png) | ![implementation with Cypress](../doc/cy-icon.png) | ![implementation with Playwright](../doc/pw-icon.png) | ![implementation with Selenium + Jest](../doc/se-js-icon.png)                         |
| ------ | ----------------------------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------- | ------------------------------------ | ------------------------------------ |
| `T_00` | _shortest possible example_                                            | [✔️](simple/simpleSingleTest.spec.ts)                  | [✔️](simple/simpleSingleTest.spec.ts)               | [✔️](simple/simpleSingleTest.spec.ts) | [✔️](simple/simpleSingleTest.spec.ts) |
| `T_01` | _Simple addition_                                                 | [✔️](simple/simpleTestSuite.spec.ts)                   | [✔️](simple/simpleTestSuite.spec.ts)                | [✔️](simple/simpleTestSuite.spec.ts)  | [✔️](simple/simpleTestSuite.spec.ts)  |
| `T_02` | _Simple multiplication_                                           | [✔️](simple/simpleTestSuite.spec.ts)                   | [✔️](simple/simpleTestSuite.spec.ts)                | [✔️](simple/simpleTestSuite.spec.ts)  | [✔️](simple/simpleTestSuite.spec.ts)  |
| `T_10` | _should accept user with valid credentials_                       | [✔️](web/simpleFormLogin.spec.ts)                      | [✔️](web/simpleFormLogin.spec.ts)                   | [✔️](web/simpleFormLogin.spec.ts)     | [✔️](web/simpleFormLogin.spec.ts)     |
| `T_11` | _should display error message for incorrect username_             | [✔️](web/simpleFormLogin.spec.ts)                      | [✔️](web/simpleFormLogin.spec.ts)                   | [✔️](web/simpleFormLogin.spec.ts)     | [✔️](web/simpleFormLogin.spec.ts)     |
| `T_12` | _should display error message for incorrect password_             | [✔️](web/simpleFormLogin.spec.ts)                      | [✔️](web/simpleFormLogin.spec.ts)                   | [✔️](web/simpleFormLogin.spec.ts)     | [✔️](web/simpleFormLogin.spec.ts)     |
| `T_20` | _should have an initial text_                                     | [✔️](web/textEditor.spec.ts)                           | [✔️](web/textEditor.spec.ts)                        | [✔️](web/textEditor.spec.ts)          | [✔️](web/textEditor.spec.ts)          |
| `T_21` | _should be able to replace initial text by new one_               | [✔️](web/textEditor.spec.ts)                           | [✔️](web/textEditor.spec.ts)                        | [✔️](web/textEditor.spec.ts)          | [✔️](web/textEditor.spec.ts)          |
| `T_22` | _should be able to delete last paragraph with keyboard shortcuts_ | [✔️](web/textEditor.spec.ts)                           | [❌](web/textEditor.spec.ts)                        | [✔️](web/textEditor.spec.ts)          | [✔️](web/textEditor.spec.ts)          |

