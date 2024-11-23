import express from 'express'
import { checkAuth, login, logout, register, showUser } from '../controller/Auth.js';

const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.get('/check', checkAuth)
router.get('/show', showUser)
router.post('/logout', logout)

export default router