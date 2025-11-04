# React-in-Angular POC

Run a React sidebar inside an Angular app using a custom element.

## Setup

### 1) Build the React custom element
```bash
cd react-bridge
npm i
npm run build
mkdir -p ../angular-app/src/assets/vendor
cp dist/react-notebook-sidebar.js ../angular-app/src/assets/vendor/react-notebook-sidebar.js
```

### 2) Run the Angular app
```bash
cd ../angular-app
npm i
npm start
```

Open http://localhost:4200


## Live Dev (auto-build + auto-copy)
Open two terminals:

**Terminal A** (React bridge watch & auto-copy to Angular):
```bash
cd react-bridge
npm i
npm run dev
```

**Terminal B** (Angular dev server):
```bash
cd angular-app
npm i
npm start
```

Now edit React files in `react-bridge/src/...`; the bundle will rebuild and copy into Angular automatically.
