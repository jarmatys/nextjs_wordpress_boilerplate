const API_URL = process.env.WP_API_URL;

import { page, allPagesWithSlug } from 'utils/queries/pages';
import { service, allServicesWithSlug, allServices } from 'utils/queries/services';
import { allPosts, allPostsWithSlug, post, postPaginate } from 'utils/queries/posts';
import { allMain } from 'utils/queries/main';

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

// POSTS

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

export const getPaginatePost = async (endCursor = "") => {
  const data = await fetchAPI(postPaginate, { variables: { endCursor } });
  return data?.posts;
}

// HOME PAGE

export const getAllMainData = async () => {
  const data = await fetchAPI(allMain);
  return data;
};

// PAGES

export const getAllPagesWithSlug = async () => {
  const data = await fetchAPI(allPagesWithSlug);
  return data?.pages;
};

export const getPage = async (slug) => {
  const data = await fetchAPI(page, { variables: { id: slug, idType: 'URI' } });
  return data;
};

// SERVICES

export const getAllServiceWithSlug = async () => {
  const data = await fetchAPI(allServicesWithSlug);
  return data?.services;
};

export const getService = async (slug) => {
  const data = await fetchAPI(service, { variables: { id: slug, idType: 'SLUG' } });
  return data;
};

export const getAllServices = async () => {
  const data = await fetchAPI(allServices);
  return data?.services;
};