import { defineType } from "sanity";

export const categorySchema = defineType({
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields:
    [
        {
            name: 'title',
            title: 'Category Title',
            type: 'string',
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title", // Automatically generate slug from the title
              maxLength: 200, // Optional: Limit the length of the slug
            },
          },
        {
            name: 'image',
            title: 'Category Image',
            type: 'image',
        },
        {
            title: 'Number of Products',
            name: 'products',
            type: 'number',
        },
    ],
});