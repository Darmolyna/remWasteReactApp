## React APP Cypress Automation Test for REMWASTE - README

This project covers UI testing using:  
**Cypress** – for browser-based UI testing

---

## Prerequisites

Before you begin, ensure the following tools are installed on your system:

1. **Node.js** v18 or above  
2. **VS Code** (Latest version)

---

## Getting Started

### 1. Open Visual Studio Code

- Launch Visual Studio Code on your system.  
- Navigate to the folder you want to download the project in, e.g.:  
  ```bash
  cd user/documents
  ```  
- Open a new terminal in VS Code (`Ctrl + ~` or go to **Terminal > New Terminal**).

### 2. Clone the Repository

In the terminal, run the following commands to clone the project and navigate into the folder:

```bash
git clone https://github.com/Darmolyna/remWasteReactApp
cd remWasteReactApp
```

### 3. Install All Dependencies

Install all required dependencies (like Cypress) listed in `package.json`:

```bash
npm install
```

---

## Running Cypress Tests

### Option 1: Run Cypress in Interactive Mode (UI)

```bash
npx cypress open
```

This opens the Cypress Test Runner for manual test execution.

### Option 2: Run Cypress Tests in CLI (Headless)

```bash
npx cypress run
```

### Option 3: Run Cypress in GitHub Actions CI

#### Step 1: Remove Existing Git History

To remove the link to the original GitHub repo and make it clean for pushing to a new one:

```bash
rm -rf .git
```

#### Step 2: Create a New GitHub Repository

- Go to [GitHub](https://github.com)
- Click the `+` icon (top right) → **New repository**
- Name it (e.g., `my-cypress-tests`)
- Click **Create repository**  
- **DO NOT** initialize with README or `.gitignore`

#### Step 3: Push Cypress Project to New Repo

Back in your terminal, run:

```bash
git init
git add .
git commit -m "Initial Cypress project commit"
```

#### Step 4: Add Remote and Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

> Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and new repository name.

#### Step 5: Verify GitHub Actions CI is Working

- Go to your new GitHub repo in the browser.
- Click the **Actions** tab at the top.
- You should see a workflow run triggered by your recent push.

Click on the workflow name to:

- View job steps  
- See if Cypress tests passed or failed  
- Check logs and console output