const dotenv = require('dotenv');
const app = require('./app');

// sabse upar config call karna
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server running on port ${PORT}`);
});
