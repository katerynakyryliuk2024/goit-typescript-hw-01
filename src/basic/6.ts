interface User {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}

let mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

let poly: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

console.log(mango, poly);
