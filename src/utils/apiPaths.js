export const BASE_URL = "http://localhost:8000";
// export const BASE_URL = "https://resumebuilder-backend-bn8q.onrender.com";

// Utils/apiPath.js
export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register", // SignUp
        LOGIN: "/api/auth/login", // Authenticate user & return JWT token
        GET_PROFILE: "/api/auth/profile", // Get logged-in user details
    },

    RESUME: {
        CREATE: "/api/resume",   // POST - Create a new user
        GET_ALL: "/api/resume",  // GET - Get all resumes of logged-in user
        GET_BY_ID: (id) => `/api/resume/${id}`, // GET - Get a specific resume
        UPDATE: (id) => `/api/resume/${id}`,    // PUT - Update a resume
        DELETE: (id) => `/api/resume/${id}`,    // DELETE - Delete a resume
        UPLOAD_IMAGES: (id) => `/api/resume/${id}/upload-images`,  // PUT - Upload Thumbnail and Resume profile image
    },

    IMAGE: {
        UPLOAD_IMAGE: "/api/auth/upload-image",
    },
};