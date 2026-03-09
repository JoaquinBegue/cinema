const CLIENT_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
const SERVER_API_URL = process.env.API_URL || "http://backend:8000/api";

export async function fetchProducts() {
  const res = await fetch(`${SERVER_API_URL}/products/`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}
