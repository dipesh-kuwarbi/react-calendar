# React Calendar Component 

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

1. **Clone the repository and install dependencies:**

   ```bash
   npm install
   # or
   # yarn install