import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db.config.js';
import AuthRoute from './routes/auth.route.js';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get('/test', (_, res) => {
    res.send({message: "Server is working fine"});
})

// Authhentication route
app.use('/api/auth', AuthRoute);

sequelize.sync()
  .then(() => {
    console.log("Database synced successfully!");
  })
  .catch((error) => {
    console.error("Error syncing the database:", error);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`)
})