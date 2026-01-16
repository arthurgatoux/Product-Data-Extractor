"use server"

import { parser } from "@/lib/extractor";

// Server Action: Handles the extraction logic on the server
export async function extractData(text: string) {
    // Invoke the chain to extract structured data from the text
    const output = await parser.invoke(text);
    return output;
}