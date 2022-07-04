import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity'
import { ParkingArea } from './ParkingArea';
import { ParkingSlip } from './ParkingSlip';

@Entity({ name: 'customer' })
export class Customer extends BaseEntity{

    @Column()
    name: string;

    @Column({name: 'vehicle_number'})
    vehicleNumber: string;

    @Column({name: 'contact_number'})
    contactNumber: string;

    @OneToMany(type => ParkingSlip, (ParkingSlip) => ParkingSlip.customer)
    parkingSlip: ParkingSlip;

}
