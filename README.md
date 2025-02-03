# 🚀 HNG12 Stage 0 - Public API

This is a simple public API built using Node.js and Express for the HNG12 internship. It returns basic information in JSON format, including:
- Your registered email
- The current datetime in ISO 8601 format (UTC)
- The GitHub URL of the project’s codebase

## 📌  Example API Usage

**Base URL:**

```
https://your-deployed-api.com/ (Replace with your actual deployed URL)
```

**Example Request:**
```
GET https://your-deployed-api.com/api/classify-number?number=371
```

**🔹 Successful Response (200 OK)**
```json
{
    "email": "your-email@example.com",
    "current_datetime": "2025-01-30T09:30:00Z",
    "github_url": "https://github.com/yourusername/hng12-stage0-api"
}
```

**❌ Error Response (400 Bad Request)**
```json
{
  "number": "abc",
  "error": true
}
```

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Environment Variables:** dotenv
- **CORS Handling:** cors
- **Hosting:** Render / Vercel / Railway
- **Version Control:** Git, GitHub

## 🏗️ Installation & Setup

1. **Clone the repository:**
        ```sh
        git clone https://github.com/treasure-praise/stage-0.git
        cd stage-0
        ```

2. **Install dependencies:**
        ```sh
        npm install
        ```

3. **Create a .env file and add:**
        ```
        EMAIL=your-email@example.com
        GITHUB_URL=https://github.com/yourusername/hng12-stage0-api
        ```

4. **Start the server:**
        ```sh
        node index.js
        ```

## 🚀 Deployment

You can deploy this API using:
- **Render** (Guide)
- **Vercel** (Guide)
- **Railway** (Guide)

Ensure your .env variables are set in your hosting environment.

## 📜 License

This project is open-source and available under the MIT License.

