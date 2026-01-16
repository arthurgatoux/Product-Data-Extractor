# Product Data Extractor

A powerful web application built with Next.js and LangChain that automatically extracts structured product information from unstructured text descriptions using AI.

## 🚀 Features

- **Smart Extraction**: Uses OpenAI (GPT-3.5-turbo) to analyze text.
- **Structured Data**: Cleanly extracts Name, Price, Category, and Features.
- **Modern Interface**: Responsive dark mode UI built with Tailwind CSS v4.
- **Type-Safe Schema**: Data validation with Zod.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: React 19
- **Style**: Tailwind CSS v4
- **AI & LLM**: [LangChain](https://js.langchain.com/) + OpenAI
- **Validation**: Zod

## ⚙️ Prerequisites

- Node.js (version 20 or higher recommended)
- An OpenAI API Key

## 📦 Installation

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd product-data-extractor
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🔐 Configuration

1. Create a `.env.local` file at the root of the project.
2. Add your OpenAI API key:

   ```env
   OPENAI_API_KEY=sk-your_api_key_here
   ```

## ▶️ Usage

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Enter a product description (e.g., "An iPhone 15 Pro Max for $1200 with an OLED screen and 512GB storage") and click "Extract".

## 📄 License

MIT License

Copyright (c) 2026 GATOUX Arthur

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
