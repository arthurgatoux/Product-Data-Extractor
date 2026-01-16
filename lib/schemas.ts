import { z } from "zod";

// Define the schema for the product data extraction using Zod
// This guides the LLM to provide structured output
export const productSchema = z.object({
    name: z.string().describe('Le nom du produit'),
    price: z.number().describe('Le prix du produit'),
    category: z.string().describe('La catégorie du produit'),
    features: z.array(z.string()).describe('Les fonctionnalités du produit'),
});