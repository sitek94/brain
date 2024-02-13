---
title: Query image dimensions from Sanity
tags: sanity, groq, javascript
createdAt: 25/11/2022
---

# Query image dimensions from Sanity

I haven't used [Sanity](https://www.sanity.io/) before, so it took me a while to figure out, how to get photos
dimensions using GROQ queries.

Here's how I've done it:

**GROQ query**

```ts
export const query = groq`
  *[_type == "photo"] {
    image{
      "dimensions": asset->metadata.dimensions
    }
  }
`
```

**Response**

```json
{
  "image": {
    "dimensions": {
      "_type": "sanity.imageDimensions",
      "aspectRatio": 0.6825192802056556,
      "height": 778,
      "width": 531
    }
  }
}
```

**Fetch example**

```ts
export async function getStaticProps() {
  const dimensions = await sanityClient.fetch(query)

  return {
    props: {dimensions},
  }
}
```

---

- [Next.js and Sanity Starter](https://github.com/sanity-io/nextjs-blog-cms-sanity-v3)
- [Sanity: Image metadata](https://www.sanity.io/docs/image-metadata)
- [Sanity: GROQ query for image palette](https://www.sanity.io/schemas/groq-query-to-for-image-palette-information-357a5bce)
