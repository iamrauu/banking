<div style="text-align: center">
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>
</div>

## Tech Stack
- Next.js
- TypeScript
- Appwrite
- Plaid
- Dwolla
- React Hook Form
- Zod
- TailwindCSS
- Chart.js
- ShadCN

## Features

**Authentication**: An ultra-secure SSR authentication with proper validations and authorization
**Connect Banks**: Integrates with Plaid for multiple bank account linking
**Home Page**: Shows general overview of user account with total balance from all connected banks, recent transactions, money spent on different categories, etc
**My Banks**: Check the complete list of all connected banks with respective balances, account details
**Transaction History**: Includes pagination and filtering options for viewing transaction history of different banks
**Real-time Updates**: Reflects changes across all relevant pages upon connecting new bank accounts.
**Funds Transfer**: Allows users to transfer funds using Dwolla to other accounts with required fields and recipient bank ID.
**Responsiveness**: Ensures the application adapts seamlessly to various screen sizes and devices, providing a consistent user experience across desktop, tablet, and mobile platforms.

and many more, including code architecture and reusability. 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)

**Installation**

Install the project dependencies using pnpm:

```bash
npm install

```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox

```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Appwrite](https://appwrite.io/), [Plaid](https://plaid.com/) and [Dwolla](https://www.dwolla.com/)

**Running the Project**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Screens

### Sign-in
![PF_2-Signin](https://github.com/user-attachments/assets/30f29b80-70e4-456a-8f49-a980ca8cdd28)

### Sign-up
![PF_1-Signup](https://github.com/user-attachments/assets/5093b950-0c4d-4aec-8643-643064a70ce9)

### Main
![PF_3-Dash](https://github.com/user-attachments/assets/120a327b-efa5-4a03-8c57-5137455dd210)

### My banks
![PF_4-BankAccts](https://github.com/user-attachments/assets/8213d596-cfea-43c7-9f81-9517e5c3cb6c)

### Transaction History
![PF_5-TransactionHistory](https://github.com/user-attachments/assets/b311076b-a0c3-4b6b-9b0c-b1a534d245c3)

### Payment Transfer
![PF_6-PaymentTransfer](https://github.com/user-attachments/assets/f4aa94aa-38c5-48f9-b5d0-83a556d43591)
