---
title: React Query useQueries
tags: react-query, react, typescript, javascript
createdAt: 19/11/2021
---

# React Query useQueries

When you have a dynamic number of queries, you cannot use them in a loop, neither can you use `useQuery` conditionally,
because it violates the rules of hooks.

But you can use `useQueries` hook:

```js
function useTagsQueries({tags}) {
  const queries = useQueries(
    tags.map(tag => {
      return {
        queryKey: ['tag', tag.id],
        queryFn: () => fetchTagById(tag.id),
      }
    }),
  )
}
```

If you're using TypeScript, you might want to use React Query
[v.3.28.0](https://github.com/tannerlinsley/react-query/releases/tag/v3.28.0) or higher, which has enabled types for
`useQueries` hook.
