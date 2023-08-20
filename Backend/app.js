
const express = require('express');

const sequelize= require('./util/database');

const cors = require('cors');

const app = express();

app.use(cors());

const userRoutes = require('./routes/user');

const expenseRoutes = require('./routes/expense');

const purchaseRoutes = require('./routes/purchase')

const User = require('./models/user');

const Expense = require('./models/expense');

const Order = require('./models/orders') 

app.use(express.json());

app.use('/user', userRoutes);

app.use('/expense', expenseRoutes);

app.use('/purchase', purchaseRoutes);

User.hasMany(Expense);
Expense.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

sequelize.sync()
.then(app.listen(3000))
.catch(err=> console.log(err));