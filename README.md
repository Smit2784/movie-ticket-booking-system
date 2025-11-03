# Movie Ticket Booking System

A full-stack web application for booking movie tickets with user authentication, seat selection, payment processing, and booking management.

## 🎬 Features

- **User Authentication**: Secure login/signup with JWT
- **Movie Browsing**: Browse current and upcoming movies
- **Theater Selection**: Choose from available theaters and showtimes
- **Seat Selection**: Interactive seat selection interface
- **Payment Processing**: Secure payment gateway integration
- **Booking Management**: View and manage your bookings
- **Gift Cards**: Purchase and redeem gift cards
- **Admin Panel**: Manage movies, theaters, and bookings

## 🚀 Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT + bcryptjs
- **File Upload**: Multer
- **Environment**: dotenv

### Frontend
- **Framework**: React 19.1.1
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **PDF Generation**: jsPDF
- **HTTP Client**: Fetch API

## 📁 Project Structure

```
movie-ticket-booking-system/
├── backend/                 # Node.js/Express server
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   ├── middleware/      # Authentication, validation
│   │   ├── models/          # Database schemas
│   │   ├── routes/          # API route definitions
│   │   ├── services/        # Business logic
│   │   └── utils/           # Helper functions
│   ├── uploads/             # File uploads (gitignored)
│   ├── .env.example         # Environment template
│   └── package.json
├── frontend/                # React application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Route components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API calls
│   │   └── utils/          # Helper functions
│   └── package.json
├── docs/                   # Documentation
└── docker-compose.yml      # Local development setup
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Configure your `.env` file:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/movie-booking
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=7d
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Configure your `.env` file:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

5. Start the development server:
   ```bash
   npm start
   ```

## 🐳 Docker Setup

Run the entire application with Docker Compose:

```bash
docker-compose up -d
```

## 📝 API Documentation

API endpoints and documentation can be found in `docs/api.md`

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 🚀 Deployment

Deployment instructions can be found in `docs/deployment.md`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Smit Dudhat**
- GitHub: [@Smit2784](https://github.com/Smit2784)

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js for the lightweight server framework
- MongoDB for the flexible database solution
- Tailwind CSS for the utility-first CSS framework
