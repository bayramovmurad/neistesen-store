
export interface ProductsResponse {
    products: Product[];
}

export interface Product {
    id?: string;
    slug: string;
    name: string;
    category: string;
    description: string;
    priceCents: number;
    currency: string;
    imageUrl: string;
    active: boolean;
    createdAt?: string;
    updatedAt?: string;
}
