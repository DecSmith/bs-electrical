import { defineConfig } from "tinacms";

// Tina Cloud credentials — set these in the hosting environment once the
// Tina Cloud project exists (app.tina.io). Local dev works without them.
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Homepage",
        path: "content",
        format: "json",
        match: { include: "home" },
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: "object",
            name: "company",
            label: "Company details",
            fields: [
              { type: "string", name: "name", label: "Full company name" },
              { type: "string", name: "shortName", label: "Short name" },
              { type: "string", name: "descriptor", label: "Descriptor" },
              { type: "string", name: "tagline", label: "Tagline", ui: { component: "textarea" } },
              { type: "string", name: "registrationLine", label: "Registration line" },
            ],
          },
          {
            type: "object",
            name: "about",
            label: "About section",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "services",
            label: "Services",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title }) },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "body", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "solar",
            label: "Solar section",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "installation",
            label: "Installation services",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "intro", label: "Intro", ui: { component: "textarea" } },
              { type: "string", name: "items", label: "Service list", list: true },
            ],
          },
          {
            type: "object",
            name: "clients",
            label: "Client portfolio",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "intro", label: "Intro" },
              {
                type: "object",
                name: "entries",
                label: "Clients",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.name }) },
                fields: [
                  { type: "string", name: "name", label: "Client name" },
                  { type: "string", name: "projects", label: "Projects", list: true },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "staff",
            label: "Staff & safety",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact details",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "intro", label: "Intro", ui: { component: "textarea" } },
              { type: "string", name: "tel", label: "Telephone" },
              { type: "string", name: "mobile", label: "Mobile" },
              { type: "string", name: "email", label: "Email" },
            ],
          },
        ],
      },
    ],
  },
});
