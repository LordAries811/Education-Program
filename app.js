const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./config/dbConnection');
const programRoutes = require('./router/program_routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/programs', programRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

