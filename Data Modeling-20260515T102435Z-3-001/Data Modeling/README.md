# MongoDB Data Modeling Demo (Mongoose)

This lab demonstrates MongoDB data modeling concepts using Mongoose schemas.

## Folder
- `data-modeling-demo/`

## How to run
```bash
cd data-modeling-demo
npm install

# Copy env example
copy .env.example .env

npm run start
```

## Test endpoints (Thunder Client / Postman)
Base URL (default): `http://localhost:3000`

- **Create User**
  - `POST /api/demo/users`
  - Body:
    ```json
    {"name":"Alice","email":"alice@example.com"}
    ```

- **Create Task**
  - `POST /api/demo/tasks`
  - Body:
    ```json
    {"title":"Buy milk","description":"2 bottles","completed":false,"userId":"<userId>"}
    ```

- **List Tasks (with populated user)**
  - `GET /api/demo/tasks`

- **List Users**
  - `GET /api/demo/users`

