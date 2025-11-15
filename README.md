# React Calendar Component (Technical Exercise)

This project implements a reusable `<Calendar />` component using **React TypeScript** and **Chakra UI v2**, fulfilling all the provided requirements for functionality, component separation, and date flexibility.

## ✨ Features

* **Reusable Component:** Single, self-contained `<Calendar date={...} />` component.

* **Flexible Date Prop:** Accepts the `date` prop as either a native JavaScript `Date` object or a string in the specific **DD/MM/YYYY** format.

* **Accurate Parsing:** Includes robust manual parsing logic to correctly handle the DD/MM/YYYY string format, preventing `new Date()` constructor errors.

* **Highlighting:** Correctly highlights the day corresponding to the input `date` prop.

* **Structured Layout:** Displays the Month/Year header, Day Labels, and the correct date grid alignment.

* **Testing:** Includes component tests using Jest and React Testing Library (RTL).

## 🛠️ Setup and Installation

This project was bootstrapped using Create React App (CRA). We use **CRACO** to override the default Jest configuration required for Chakra UI v2 compatibility.

### Prerequisites

* Node.js (LTS version)
* npm or yarn

### Installation Steps

1.  **Clone the repository and install dependencies:**

    ```bash
    npm install
    # or
    # yarn install
    ```

2.  **Verify Configuration:** Note that the `package.json` and `craco.config.js` have been configured to resolve known module loading errors between Jest and Chakra UI v2.

## 🚀 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode using CRACO.
Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view it in the browser.
The page will display the three example calendars from the requirements (Today, Oct 3, 2022, and Mar 23, 2020).

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run test`

Launches the test runner in the interactive watch mode using CRACO.

## 🧪 Testing Strategy (Dynamic & Fixed)

The project uses **Jest** as the test runner and **React Testing Library (RTL)** for component interactions. The tests include both fixed date scenarios (for layout verification) and dynamic scenarios (for system date independence).

### Component Structure and Types Tested:

* **`src/utils/date.ts`:** Tested implicitly by verifying the grid output.
* **`src/components/calendar/Calendar.tsx`:** Verified primary requirements.

### Key Tests

| Test Requirement | Method | Details |
| :--- | :--- | :--- |
| **Dynamic Date** | `new Date()` (live system date) | **Validates current month/year header and highlights the current day,** ensuring system date independence. |
| **Fixed Layout** | Fixed Date (`2020-03-23`) | Verifies the component handles specific month lengths (e.g., March 31 days) and ensures proper grid alignment. |
| **Date Highlighting** | `expect(highlightedCell.closest('div')).toHaveStyle(...)` | Confirms the correct day receives the `blue.500` background style. |
| **Prop Flexibility** | Tests pass both `new Date()` objects and hardcoded `DD/MM/YYYY` strings. | Validates the custom parsing logic in `Calendar.tsx`. |

### 🛑 Jest Configuration Fix (For Chakra UI Compatibility)

To ensure tests run without `Cannot find module '@chakra-ui/utils/context'` errors, the following configuration overrides were applied via `craco.config.js`:

1.  **`moduleNameMapper`:** Explicitly maps the problematic internal package reference (`^@chakra-ui\/utils\/context$`) to a resolvable path (`@chakra-ui/utils/dist/cjs/context.js`).

2.  **`transformIgnorePatterns`:** Ensures Jest transpiles necessary ES modules within `@chakra-ui` during testing.

```markdown
Run `npm run test` to execute all tests.