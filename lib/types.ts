import type { ComponentType } from "react";

export interface ExampleMeta {
  slug: string;
  title: string;
  description: string;
  prompt: string;
  tags: string[];
}

export interface Example extends ExampleMeta {
  category: string;
  Demo: ComponentType;
}

export interface CategoryMeta {
  slug: string;
  title: string;
  description: string;
}

export interface Category extends CategoryMeta {
  examples: Example[];
}
