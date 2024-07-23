
<div align="center">
  <br />
    <a href="" target="_blank">
      <img src="/public/Screenshot.png" alt="Project Banner">
    </a>
  <br />


 <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
     <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">Mark8 Challenge</h3>
   <div align="center">
     Frontend Developer Challenge!
    </div>
</div>

## <a name="features">🔋 Features</a>

👉 **Home Page**: Showcases a visually appealing display of Products and Stores fetched from  API.<br>
👉 **TypeScript Types**: Utilize TypeScript to provide robust typing for enhanced code quality and better development.<br>
👉 **Responsive Website Design**: The website is designed to be visually pleasing and responsive, ensuring an optimal user experience across various devices.<br>
👉 **SignUp/SignIn**: user will be able login and registered.<br>






**Cloning the Repository**

```bash
git https://github.com/nyirurugoomar/Mark8-20.git
cd Mark8-20
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

<<<<<<< HEAD
=======

>>>>>>> 842b02b2ae9f6a1184598473c9c9ecf61e66ec6e
Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.



<br />
    <a href="" target="_blank">
      <img src="/public/Screenshot_login.png" alt="Project login">
    </a>
  <br />

<details>
<summary><code>Type/index.ts</code></summary>

```typescript

export interface Product{
    
    id?:string,
    code?:string,
    name:string,
    description:string,
    category?:Category,
    unitPrice:number,
    thumbnail:string,
    currency:string
    createdAt:string,
    updatedAt:string,
    createdBy?:User
    inventories?:Inventory,
    reviews:Review,
    
}

export interface Category {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  }
  export interface User {
    id: string;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    shippingAddress: string;
    stripeAccountId: string | null;
    currency: string;
  }

export interface Role{
    id:string,
    name:string,
    users:string
    createdAt:string,
    updatedAt:string
}

export interface Inventory{
    id?:string,
    quantity:string,
    createdAt:string,
    updatedAt:string,
    code:string,
    owner:User,
    updatedBy:User,

}

export interface Review{
    id?:string,
    rating?:string,
    comment?: string,
    createdAt:string,
    updatedAt:string,
    ratedBy:User,
    updatedBy:User,

}

export interface Store {
    
    products?: Product[]; // Array of Product
    storeProduct: string;
    storeName: string;
    storeImage: string;
    id: string;
    name: string;
    price?:Product,
    description: string;
    address: string;
    image: string;
    createdAt: string;
    test?:Category;
    manager: {
      id: string;
      email: string;
      phoneNumber: string;
      firstName: string;
      lastName: string;
      createdAt: string;
      shippingAddress: string;
    };
  }
  
```

</details>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: "#C1CF16", 
        secondary: "#1C2834", 
        accent: "#DBDBDB",
        black:"#000000"

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "image-bg":"url('/Image01.png')",
        "bg-image":"url('/bgimage.png')"
      },
    },
  },
  plugins: [],
};

export default config;

```

</details>
<<<<<<< HEAD
=======

>>>>>>> 842b02b2ae9f6a1184598473c9c9ecf61e66ec6e
