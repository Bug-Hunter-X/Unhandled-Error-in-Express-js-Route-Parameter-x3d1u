const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  if (isNaN(userId) || userId <=0) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ...rest of the code to fetch user data
  // Example of fetching the user, but needs a valid data source
  // const user = await User.findById(userId);
  // res.json(user);
});