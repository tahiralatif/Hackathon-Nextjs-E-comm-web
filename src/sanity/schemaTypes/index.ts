import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "./products";
import { categorySchema } from "./categories";
import popularProd from "./popular-prod";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, categorySchema , popularProd],
};