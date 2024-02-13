---
title: SQL Join Operation
tags: sql, databases, join
createdAt: 17/11/2021
---

# SQL Join Operation

When using a JOIN clause in an SQL statement, it indicates how two tables are to be joined. This operation is
fundamental for combining rows from two or more tables based on a related column between them.

## Example Tables

Before diving into JOIN operations, let's consider two example tables: Album and Artist.

**Artist**

| id  | name        |
| --- | ----------- |
| 1   | The Beatles |
| 2   | Pink Floyd  |

**Album**

| id  | title                     | artist_id |
| --- | ------------------------- | --------- |
| 1   | Abbey Road                | 1         |
| 2   | The Dark Side of the Moon | 2         |

**Genre**

| id  | name             |
| --- | ---------------- |
| 1   | Rock             |
| 2   | Psychedelic Rock |

**Track**

| id  | title         | album_id | genre_id |
| --- | ------------- | -------- | -------- |
| 1   | Come Together | 1        | 1        |
| 2   | Speak to Me   | 2        | 2        |

## Joining Tables With an ON Clause

The most common way to join tables is by using the ON clause to specify the condition for the join. This method combines
rows when the join condition is true.

```sql
SELECT Album.title, Artist.name FROM Album
  JOIN Artist ON Album.artist_id = Artist.id
```

Result:

| title                     | name        |
| ------------------------- | ----------- |
| Abbey Road                | The Beatles |
| The Dark Side of the Moon | Pink Floyd  |

## Joining Tables Without an ON Clause

Joining tables without specifying an ON condition results in a Cartesian product between the two tables. This means each
row from the first table is combined with all rows from the second table, which can lead to a large number of
combinations.

```sql
SELECT Album.title, Artist.name FROM Album
  JOIN Artist
```

Result:

| title                     | name        |
| ------------------------- | ----------- |
| Abbey Road                | The Beatles |
| Abbey Road                | Pink Floyd  |
| The Dark Side of the Moon | The Beatles |
| The Dark Side of the Moon | Pink Floyd  |

## Joining Multiple Tables

SQL allows joining more than two tables in a single query. This is useful for fetching data that spans across several
related tables.

```sql
SELECT
    Track.title AS track_title,
    Artist.name AS artist_name,
    Album.title AS album_title,
    Genre.name AS genre_name
FROM Track
  JOIN Genre ON Track.genre_id = Genre.id
  JOIN Album ON Track.album_id = Album.id
  JOIN Artist ON Album.artist_id = Artist.id
```

Result:

| track_title   | artist_name | album_title               | genre_name       |
| ------------- | ----------- | ------------------------- | ---------------- |
| Come Together | The Beatles | Abbey Road                | Rock             |
| Speak to Me   | Pink Floyd  | The Dark Side of the Moon | Psychedelic Rock |
