const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <h1>DevOps Assignment Complete!</h1>
    <p>Congratulations! You have successfully set up your CI/CD pipeline.</p>
    <p>Redirecting you to the <a href="/devops">DevOps Page</a>...</p>
    <script>
      setTimeout(function() {
        window.location.href = '/devops';
      }, 3000);
    </script>
  `);
});

app.get('/devops', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
