// node-fetch is used to make network requests to the Prismic Rest API.
// In Node.js Prismic projects, you must provide a fetch method to the
// Prismic client.
import fetch from 'node-fetch';
import * as prismic from '@prismicio/client';

export const repoName = 'sample-site'; // Fill in your repository name.

export const client = prismic.createClient(repoName, {
  // If your repo is private, add an access token.
  accessToken: '',
  fetch,

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  routes: [
    {
      type: 'homepage',
      path: '/',
    },
    {
      type: 'page',
      path: '/:uid',
    },
  ],
});
