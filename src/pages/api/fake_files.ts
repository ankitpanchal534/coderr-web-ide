export const fake_files = [
  {
    name: "app",
    id: 1,
    parentId: 0,
    type: "directory",
    extension: "",
    isOpen: false,
    children: [
      {
        name: "layout",
        type: "file",
        extension: ".ts",
        content: `
        export interface LayoutOptions {
          title?: string;
          centered?: boolean;
          header?: string;
          footer?: string;
        }
    
        export function createLayout(content: string, options: LayoutOptions = {}): string {
          const { title, centered, header, footer } = options;
          let layout = \`<div class="\${centered ? 'layout layout--centered' : 'layout'}">\`;
    
          if (title) {
            layout += \`<h1 class="layout__title">\${title}</h1>\`;
          }
    
          if (header) {
            layout += \`<header class="layout__header">\${header}</header>\`;
          }
    
          layout += \`<main class="layout__main">\${content}</main>\`;
    
          if (footer) {
            layout += \`<footer class="layout__footer">\${footer}</footer>\`;
          }
    
          layout += \`</div>\`;
          return layout;
        }
    
        export function createContainer(content: string): string {
          return \`<div class="container">\${content}</div>\`;
        }
      `,
        isSelectedFile: false,
        parentId: 1,
        id: 2,
      },
      {
        name: "page",
        type: "file",
        extension: ".ts",
        content: `const promise = new Promise<string>((resolve, reject) => {
          setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
              resolve('Success!');
            } else {
              reject('Failure!');
            }
          }, 2000);
        });
        
        promise
          .then(result => console.log(result))
          .catch(error => console.error(error));`,
        isSelectedFile: false,
        parentId: 1,
        id: 3,
      },
    ],
  },
  {
    name: "next.config",
    type: "file",
    extension: ".mjs",
    content: `const nextConfig = {}; \n
    export default nextConfig;
    `,
    isSelectedFile: false,
    id: 4,
    parentId: 0,
  },
  {
    name: "components",
    type: "directory",
    extension: "",
    id: 5,
    parentId: 0,
    children: [
      {
        name: "utils",
        type: "directory",
        extension: "",
        id: 6,
        parentId: 5,
        children: [
          {
            name: "helpers",
            type: "file",
            extension: ".ts",
            content: `const add = (a: number, b: number): number => a + b;
            const square = (x: number): number => x * x;
            const greet = (name: string): string => \`\Hello, \${name}!\`;
            const isEven = (num: number): boolean => num % 2 === 0;
            const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);
            
            export { add, square, greet, isEven, capitalize };`,
            isSelectedFile: false,
            id: 7,
            parentId: 6,
          },
          {
            name: "constants",
            type: "file",
            extension: ".ts",
            content: `const PI = 3.14159;
            const GREETING = "Hello";
            const MAX_ATTEMPTS = 5;
            const COLORS = ["red", "green", "blue"];
            export { PI, GREETING, MAX_ATTEMPTS, COLORS };`,
            isSelectedFile: false,
            id: 8,
            parentId: 6,
          },
        ],
      },
      {
        name: "Person",
        type: "file",
        extension: ".ts",
        isSelectedFile: false,
        id: 9,
        parentId: 5,
        content: `interface Person {
          name: string;
          age: number;
          isStudent: boolean;
        }
        
        const person1: Person = {
          name: 'John Doe',
          age: 25,
          isStudent: false,
        };
        
        function greetPerson(person: Person): string {
          return \`Hello, \${person.name}!\`;
        }
        
        console.log(greetPerson(person1));`,
      },
      {
        name: "Book",
        type: "file",
        extension: ".ts",
        isSelectedFile: false,
        id: 10,
        parentId: 5,
        content: `
        interface Book {
          title: string;
          author: string;
          published: number;
          available: boolean;
        }
        
        const books: Book[] = [
          {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            published: 1925,
            available: true,
          },
          {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            published: 1960,
            available: false,
          },
          {
            title: '1984',
            author: 'George Orwell',
            published: 1949,
            available: true,
          },
        ];
        
        function findAvailableBooks(bookList: Book[]): Book[] {
          return bookList.filter((book) => book.available);
        }
        
        function createBook(title: string, author: string, published: number, available: boolean): Book
        {
          return { title, author, published, available };
        }
        
        books.push(createBook('The Story Book', 'Author', 1932, true));

        console.log('Available Books:');
        const availableBooks = findAvailableBooks(books);
        availableBooks.forEach((book) => {
          console.log(\`Title: \${book.title}, Author: \${book.author}\`);
        });`,
      },
    ],
  },
  // Additional files and directoryectories added below
  {
    name: "pages",
    type: "directory",
    extension: "",
    id: 11,
    parentId: 0,
    children: [
      {
        name: "index",
        type: "file",
        extension: ".tsx",
        content: `import React from 'react';
        import Layout from '../components/layout';
        
        export default function Home() {
          return (
            <Layout>
              <h1>Welcome to my website</h1>
              <p>This is the homepage.</p>
            </Layout>
          );
        }`,
        isSelectedFile: false,
        parentId: 11,
        id: 12,
      },
      {
        name: "about",
        type: "file",
        extension: ".tsx",
        content: `import React from 'react';
        import Layout from '../components/layout';
        
        export default function About() {
          return (
            <Layout>
              <h1>About Us</h1>
              <p>This is the about page.</p>
            </Layout>
          );
        }`,
        isSelectedFile: false,
        parentId: 11,
        id: 13,
      },
    ],
  },
  {
    name: "styles",
    type: "directory",
    extension: "",
    id: 14,
    parentId: 0,
    children: [
      {
        name: "main",
        type: "file",
        extension: ".css",
        content: `body {
          font-family: Arial, sans-serif;
        }
        
        h1 {
          color: blue;
        }
        
        p {
          color: green;
        }`,
        isSelectedFile: false,
        parentId: 14,
        id: 15,
      },
    ],
  },
  {
    name: "utils",
    type: "directory",
    extension: "",
    id: 16,
    parentId: 0,
    children: [
      {
        name: "api",
        type: "directory",
        extension: "",
        id: 17,
        parentId: 16,
        children: [
          {
            name: "fetch",
            type: "file",
            extension: ".ts",
            content: `export async function fetchData(url: string) {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              return response.json();
            }`,
            isSelectedFile: false,
            parentId: 17,
            id: 18,
          },
        ],
      },
      {
        name: "helpers",
        type: "directory",
        extension: "",
        id: 19,
        parentId: 16,
        children: [
          {
            name: "format",
            type: "file",
            extension: ".ts",
            content: `export function formatCurrency(amount: number): string {
              return '$' + amount.toFixed(2);
            }`,
            isSelectedFile: false,
            parentId: 19,
            id: 20,
          },
        ],
      },
    ],
  },
];
