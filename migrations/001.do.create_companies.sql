CREATE TABLE companies (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    title TEXT NOT NULL,
    pathname VARCHAR(60) NOT NULL UNIQUE,
    email VARCHAR(320) NOT NULL,
    password VARCHAR(60) NOT NULL
);