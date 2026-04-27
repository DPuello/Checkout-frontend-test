const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
};

export const getProducts = async (limit = 3) => {
    try {
        const products = await fetchProducts();
        return products.slice(0, limit);
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};