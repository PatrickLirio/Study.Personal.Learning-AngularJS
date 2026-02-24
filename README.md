# Study.Personal.Learning-AngularJS

This is a personal Angular project for learning and development purposes.

---

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (Recommended: LTS version)  
  Download: https://nodejs.org/
- **npm** (comes with Node.js)
- **Angular CLI**

Install Angular CLI globally (if not yet installed):

```bash
npm install -g @angular/cli
```

Verify installations:

```bash
node -v
npm -v
ng version
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Study.Personal.Learning-AngularJS.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd Study.Personal.Learning-AngularJS
```

### 3️⃣ Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

---

## ▶️ Run the Project (Development Server)

Start the Angular development server:

```bash
ng serve
```

or

```bash
npm start
```

After running, open your browser and go to:

```
http://localhost:4200/
```

The app will automatically reload whenever you modify source files.

---

## 🏗️ Build for Production

To create a production build:

```bash
ng build
```

For optimized production build:

```bash
ng build --configuration production
```

The build output will be generated inside the `dist/` folder.

---

## 🧹 Clean Installation (If You Encounter Errors)

If you experience dependency or build issues:

```bash
rm -rf node_modules package-lock.json
npm install
```

Then run again:

```bash
ng serve
```

---

## 📁 Project Structure Overview

```
src/            → Application source code
dist/           → Production build output
node_modules/   → Installed dependencies
angular.json    → Angular configuration
package.json    → Project dependencies and scripts
```

---

## 👨‍💻 Author

Patrick Lirio
