import React from "react";

let searchTerm = String;

const search = async (searchTerm) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_keys=${process.env.API_KEY}`
  );

  const data = res.json;
  return data;
};

async function SearchResult({ params: { searchTerm } }) {
  const SearchResults = await search(searchTerm);
  return (
    <>
      <h1>{SearchResults.title}</h1>
    </>
  );
}

export default SearchResult;
