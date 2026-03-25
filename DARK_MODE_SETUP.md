# Dark Mode Setup Guide

This guide will help you set up and run the dark mode feature with MongoDB persistence.

## Prerequisites

- **Node.js** (v16+)
- **MongoDB** (installed locally or MongoDB Atlas cloud instance)
- **npm** or **yarn**

## Project Structure

```
project-root/
├── src/                          # Frontend (React/TypeScript)
│   ├── context/
│   │   └── UserPreferencesContext.tsx   # User preferences state management
│   ├── components/
│   │   └── DarkModeToggle.tsx           # Dark mode toggle button
│   ├── index.css                        # Includes dark mode styles
│   └── App.tsx                          # Updated with UserPreferencesProvider
├── server/                       # Backend (Express/MongoDB)
│   ├── src/
│   │   ├── db.ts                        # MongoDB connection
│   │   ├── models/
│   │   │   └── UserPreference.ts        # Data model
│   │   ├── routes/
│   │   │   └── preferences.ts           # API endpoints
│   │   └── server.ts                    # Express server
│   ├── package.json
│   └── .env.example
├── .env.example                 # Frontend environment variables
└── package.json
```

## Installation Steps

### 1. Install Frontend Dependencies

```bash
npm install
```

This installs axios and other frontend dependencies.

### 2. Install Backend Dependencies

```bash
cd server
npm install
cd ..
```

This installs Express, MongoDB driver, and other backend dependencies.

### 3. MongoDB Setup

#### Option A: Local MongoDB (Required for development)

Make sure MongoDB is running locally on `mongodb://localhost:27017`.

To start MongoDB on your system:
- **Windows**: Use MongoDB Community Edition or MongoDB Atlas
- **macOS**: `brew services start mongodb-community`
- **Linux**: `sudo systemctl start mongod`

#### Option B: MongoDB Atlas (Cloud)

1. Create a free account at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create a cluster and get your connection string
3. Update `server/.env` with your connection string:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/u2-brochure
   ```

### 4. Environment Configuration

Create `.env` file in the root directory (if it doesn't exist):

```
VITE_API_BASE_URL=http://localhost:5000
```

Create `server/.env` file:

```
MONGODB_URI=mongodb://localhost:27017/u2-brochure
PORT=5000
NODE_ENV=development
```

## Running the Application

### Terminal 1: Start Backend Server

```bash
cd server
npm run dev
```

You should see:
```
✓ Connected to MongoDB
🚀 Server running on http://localhost:5000
📊 API: http://localhost:5000/api/preferences
```

### Terminal 2: Start Frontend Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` (or the port shown in your terminal)

## How It Works

### User Identification
- When a user first visits the site, a unique UUID is generated and stored in their browser's localStorage
- This anonymous ID persists across sessions and is used to track preferences

### Dark Mode Toggle
1. User clicks the sun/moon icon in the header
2. Frontend sends preference to backend API
3. MongoDB stores the preference associated with the user ID
4. CSS class `dark` is applied to `<html>` element
5. All styles transition smoothly (CSS handles the dark mode color scheme)

### Data Flow

```
User Click on Toggle
    ↓
DarkModeToggle component updates state
    ↓
UserPreferencesContext calls API
    ↓
POST /api/preferences/dark-mode
    ↓
MongoDB stores { userId, darkMode: true/false, timestamps }
    ↓
Frontend applies/removes 'dark' class from <html>
    ↓
CSS variables update to dark/light colors
```

## API Endpoints

### GET /api/preferences/dark-mode/:userId
Retrieve user's dark mode preference

**Response:**
```json
{
  "userId": "u2_abc123...",
  "darkMode": true,
  "isNew": false
}
```

### POST /api/preferences/dark-mode
Save user's dark mode preference

**Request Body:**
```json
{
  "userId": "u2_abc123...",
  "darkMode": true
}
```

**Response:**
```json
{
  "success": true,
  "userId": "u2_abc123...",
  "darkMode": true,
  "created": false
}
```

### PATCH /api/preferences/dark-mode/:userId
Update user's dark mode preference

**Request Body:**
```json
{
  "darkMode": false
}
```

## Dark Mode CSS

The dark mode styles are defined in `src/index.css` under the `html.dark` selector.

When dark mode is enabled:
- Light backgrounds become dark
- Text colors invert
- Border colors adapt
- Component shadows adjust

All transitions are handled by the `transition: all 0.3s ease;` in the global CSS.

## Troubleshooting

### Backend won't connect to MongoDB
- Ensure MongoDB is running: `mongosh` or check your MongoDB service
- Verify connection string in `server/.env`
- Check if port 27017 is available

### Frontend can't reach backend API
- Ensure backend is running on port 5000
- Check `VITE_API_BASE_URL` in `.env`
- Check browser console for CORS errors
- Backend already has CORS configured for all origins

### Dark mode preference not persisting
- Check browser localStorage (DevTools > Application > Storage > Local Storage)
- Verify MongoDB is storing data: `use u2-brochure` → `db.userPreferences.find()`
- Check backend console for errors

### Toggle button not visible in header
- Ensure Header.tsx was updated with DarkModeToggle import
- Check that DarkModeToggle.tsx and DarkModeToggle.module.css exist

## Development Notes

### CSS Approach (No Tailwind)
- Uses CSS custom properties (variables) for theming
- Dark mode styles use `html.dark` selector
- Smooth transitions via `transition: all 0.3s ease;`

### Anonymous User ID Strategy
- UUID v4 generated on first visit
- Stored in localStorage with key `u2_user_id`
- Persists across sessions and devices (same browser)
- Used for preference tracking

### Scalability
This architecture is designed to easily extend to other preferences:
- `favoriteFloorPlans`: Array of favorite floor plan IDs
- `favoriteProperties`: Array of favorite property IDs
- `amenityPreferences`: Object with amenity ratings/preferences
- `recentlyViewed`: Array of recently viewed items

## Next Steps

After dark mode is working:

1. **Add more preferences** - Create contexts for favorites, amenities, etc.
2. **Add user auth** - Integrate with Supabase for authenticated users
3. **Add analytics** - Track which preferences are used most
4. **Mobile optimization** - Adjust toggle placement for mobile devices
5. **Accessibility** - Add `prefers-color-scheme` media query support

## Support

For issues or questions, check:
- Backend logs: `node server/src/server.ts`
- Frontend logs: Browser DevTools Console
- MongoDB Atlas dashboard (if using cloud)
