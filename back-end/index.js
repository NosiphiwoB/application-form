const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const port = 3007
const URI = process.env.DATA_BASE
const mongoose = require('mongoose')
const { saveDetails } = require('./routes/postRoutes')