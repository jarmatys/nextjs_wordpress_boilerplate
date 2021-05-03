const API_URL = process.env.WP_API_URL;

import { allPosts, allPostsWithSlug, post } from 'utils/queries/posts';

const fetchAPI = async (query, { variables } = {}) => {
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }
  return json.data;
};

export const getAllPosts = async () => {
  const data = await fetchAPI(allPosts);
  return data?.posts;
};

export const getAllPostsWithSlug = async () => {
  const data = await fetchAPI(allPostsWithSlug);
  return data?.posts;
};

export const getPost = async (slug) => {
  const data = await fetchAPI(post, { variables: { id: slug, idType: 'SLUG' } });
  return data;
};
