import { Router, Request, Response } from "express";
import { Customer } from "../database/entities/Customer";
const router = Router();

async function create(req: Request, res: Response) {
    const { name, vehicleNumber, contactNumber } = req.body;

    const customer = new Customer();
    customer.name = name;
    customer.vehicleNumber = vehicleNumber;
    customer.contactNumber = contactNumber;

    const result = await customer.save();

    return res.json({
        data: result
    })
}

async function findAll(req: Request, res: Response) {
    const customer = await Customer.find();

    return res.json({
        data: customer
    })
}

router.post('/register', create);
router.get('/find-all', findAll);

export default router;
