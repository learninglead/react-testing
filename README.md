# react-testing

In this code I used React Testing library to test react components.

**Note :**
I changed {resetMocks: false} property of config variable in node_modules\react-scripts\scripts\utils\createJestConfig.js as react-testing reset mocks every time so it cause to fail test.

**Steps:**

1. Install dependencies using the command: npm install
2. Chnage in react-scripts library. Open file located at node_modules\react-scripts\scripts\utils\createJestConfig.js
3. Find config object and change { resetMocks: false }.

If you find any other way to use mocks without changing react-scripts then please contact me.

**Thanks**
