export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "123",
    role: "user",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "456",
    role: "user",
  },
  {
    id: 3,
    name: "Mark Wilson",
    email: "mark.wilson@example.com",
    password: "789",
    role: "user",
  },
  {
    id: 4,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "000",
    role: "user",
  },
];

export const admin = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    password: "admin",
    role: "admin",
  },
];

export const setLocalData = () => {
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalData = () => {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : [];
};

// to find john.doe@example.com
