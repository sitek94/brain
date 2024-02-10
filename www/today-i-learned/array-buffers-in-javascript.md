---
title: ArrayBuffers in JavaScript
createdAt: 10/02/2024
---

# {{ $frontmatter.title }}

- **ArrayBuffer**: It's a chunk of memory you can't touch directly. It's for handling binary data efficiently in
  JavaScript.

- **Why Use It?**: Directly manipulating binary data skips the performance cost of converting data to/from strings.
  Essential for tasks like file processing and encryption where speed and memory efficiency matter.

- **How to Use**:

  1. Create an ArrayBuffer with a specified size.
  2. Create a "view" (like `Uint8Array`) to interact with the data. This view lets you read/write in a structured way.

- **Example**:

  ```javascript
  // Allocates 16 bytes
  const buffer = new ArrayBuffer(16)

  // View as array of 8-bit unsigned integers
  const view = new Uint8Array(buffer)

  // Modify first byte
  view[0] = 255
  ```

- **Key Takeaway**: ArrayBuffers let you work with data at a lower level, closer to how the computer handles it, leading
  to better performance for certain tasks.
