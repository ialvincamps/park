import { Router, Request, Response } from "express";
import { ParkingArea } from "../database/entities/ParkingArea";
const router = Router();

async function create(req: Request, res: Response) {

    const { floor, floorArea, floorSize } = req.body;

    const parkingArea = new ParkingArea();
    parkingArea.floor = floor;
    parkingArea.floorSize = floorSize;
    parkingArea.floorArea = floorArea;

    const result = await parkingArea.save();

    return res.json({
        data: result
    })
}

async function findAll(req: Request, res: Response) {
    const parkingArea = await ParkingArea.find();


    return res.json({
        data: parkingArea
    })
}

router.post('/create', create);
router.get('/find-all', findAll);

export default router;
