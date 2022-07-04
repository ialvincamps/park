import { Router } from 'express';
import customer from './customer';
import parkingArea from './parkingArea';
import parkingSlip from './parkingSlip';
const routes = Router();


routes.use('/customer', customer)
routes.use('/area', parkingArea)
routes.use('/slip', parkingSlip)


export default routes;
