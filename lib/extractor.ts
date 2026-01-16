import { ChatOpenAI } from "@langchain/openai";
import { productSchema } from "./schemas";

// Initialize the OpenAI model with deterministic settings
export const model = new ChatOpenAI({
    model: 'gpt-3.5-turbo',
    temperature: 0,
});

// Create a parser that forces the model to output data matching the productSchema
export const parser = model.withStructuredOutput(productSchema);