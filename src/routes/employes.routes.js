import {Router} from 'express'
import { getEmployees, createEmployees, updateEmployees, deleteEmployees, getEmployee } from '../Controllers/employees.controller.js'

const router = Router()


router.get('/employers', getEmployees)

router.get('/employers/:id', getEmployee)

router.post('/employers', createEmployees)

router.patch('/employers/:id', updateEmployees)

router.delete('/employers/:id', deleteEmployees)


export default router