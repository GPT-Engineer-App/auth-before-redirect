# auth-before-redirect

Add a login flow that forces users to authenticate before being redirected to the home page (make sure you send the user to the page after successfully logging in).  Use the Supabase REST API (DO NOT use the @supabase/supabase-js package) and assume I have a supabase project with following properties: 
- Project URL: https://merrefvnykbgyhbdzpleh.supabase.co
- ANON KEY: eyJhbGcjl4JIUzI1NiIsInR5cCI6IkpXVCJ9.j324l3

Make sure that: 
- You give the user an option to logout once logged in. 
- You make sure that login is persisted even after refreshing the page

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/auth-before-redirect.git
cd auth-before-redirect
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
