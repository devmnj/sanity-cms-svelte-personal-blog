// sanityClient.js
import sanityClient from "@sanity/client";

const client = sanityClient({
    projectId: "n2amzrlx",
    dataset: "production",
    apiVersion: "2022-10-21",
    token:'skXPwUTlsP9L6Hg5S0cNFu5fGwHQhdsaWYnFGLCIl3ld881NlkqbrOPr0ZQ0mKAHNW5D9UD8qrxn5FUNElcGnb8Rogii4EbYD4QD7oTJo2YiCeyDbcJ8H2aKwIQclC9CJCNKiQg4jlmXnNuGB3mlyXgZX8Qv7zaR4Z1NvxmMpfdyoSPOHlwS',
    useCdn: false
  });

export default client;