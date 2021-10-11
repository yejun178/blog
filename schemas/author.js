import { string } from "prop-types";

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: "role",
      title: "role",
      type: "string",
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      alidation: (Rule) => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
