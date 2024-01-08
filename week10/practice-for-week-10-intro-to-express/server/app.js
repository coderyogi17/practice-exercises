const express = require ('express');
const app = express();


const data = {
    users : []
}
app.get('/', (req,res)=>{
    res.send('He22lo, we123me!')
})

// Use POST to add a user
app.post('/users', (req, res) => {
    let newUser = {
        name: 'Phyllis',
        age: 68
    }
    data.users.push(newUser);
    console.log(data);
    res.send(newUser);
});

// Use GET to retrieve a list of all users
app.get('/users', (req, res) => {
      //const resp= JSON.stringify(data);
      res.send(data);
})

const port = 5000;
app.listen(port, () => console.log('Server is listening to port', port));
