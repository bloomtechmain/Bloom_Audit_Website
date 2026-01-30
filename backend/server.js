const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require("socket.io");
require('dotenv').config();
const { createUsersTable } = require('./models/userModel');
const { createMessagesTable, saveMessage, getMessages } = require('./models/chatModel');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const seedAdmin = require('./seedAdmin');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Allow frontend to connect
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
  res.send('BloomSwiftPOS Backend is running');
});

// Socket.io
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Send initial messages
  getMessages().then(messages => {
    socket.emit('initial_messages', messages);
  }).catch(err => console.error("Error fetching messages:", err));

  socket.on('send_message', async (data) => {
    // data: { userId, userName, message, channel }
    try {
      const savedMessage = await saveMessage(data.userId, data.userName, data.message, data.channel);
      io.emit('receive_message', savedMessage);
    } catch (error) {
      console.error("Error saving message:", error);
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Initialize DB Table and Admin User
const init = async () => {
  await createUsersTable();
  await createMessagesTable();
  await seedAdmin();
};
init();

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
