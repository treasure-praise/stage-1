# 🚀 HNG12 Stage 1 - Public API

This is a simple public API built using Node.js and Express for the HNG12 internship. It  that takes a number and returns interesting mathematical properties about it, along with a fun fact.

## 📌  Example API Usage

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
        git clone https://github.com/treasure-praise/stage-1.git
        cd stage-1
        ```

2. **Install dependencies:**
        ```sh
        npm install
        ```


3. **Start the server:**
        ```sh
        node index.js
        ```


## 📜 License

This project is open-source and available under the MIT License.

