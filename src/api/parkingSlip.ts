import { Router, Request, Response } from "express";
import { ParkingSlip } from "../database/entities/ParkingSlip";
import { Customer } from "../database/entities/Customer";
import { ParkingArea } from "../database/entities/ParkingArea";

import moment from "moment";
const router = Router();

async function create(req: Request, res: Response) {
    const { parkingAreaId, customerId } = req.body;

    const customer = await Customer.findOne(customerId);

    const parkingArea = await ParkingArea.findOne(parkingAreaId);

    const parkingSlip = new ParkingSlip();

    let cost;

    const parkingAreaFloor = parkingArea.floor;
    console.log(parkingAreaFloor)
    switch (parkingAreaFloor) {
        case 0:
            cost = 20;
            break;
        case 1:
            cost = 60;
            break;
        case 2:
            cost = 100;

            break;
        default:
            cost = 20;
            break;

    }

    parkingSlip.cost = cost;
    parkingSlip.customer = customer;
    parkingSlip.parkingArea = parkingArea;

    const result = await parkingSlip.save();

    return res.json({
        data: result
    })
}


async function findAll(req: Request, res: Response) {
    const parkingSlip = await ParkingSlip.find();

    return res.json({
        data: parkingSlip
    })
}

router.post('/create', create);
router.get('/find-all', findAll);

export default router;
