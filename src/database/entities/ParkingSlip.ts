import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity'
import { Customer } from './Customer';
import { ParkingArea } from './ParkingArea';

@Entity({ name: 'parking_slip' })
export class ParkingSlip extends BaseEntity{

    @Column({ type: 'float' })
    cost: number;

    @Column('boolean', { default: false,})
    penalty: boolean;

    @Column({ name: 'exit_date', nullable: true})
    exitDate: Date;

    @ManyToOne(type => Customer, (customer) => customer.parkingSlip)
    customer: Customer;

    @ManyToOne(type => ParkingArea, (parkingArea) => parkingArea.parkingSlip)
    parkingArea: ParkingArea;

}
