import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './BaseEntity'
import { Customer } from './Customer';
import { ParkingSlip } from './ParkingSlip';

@Entity({ name: 'parking_area' })
export class ParkingArea extends BaseEntity{

    @Column()
    floor: number;

    @Column({ name: 'floor_area'})
    floorArea: number

    @Column({name: 'floor_size'})
    floorSize: number;

    @OneToMany(type => ParkingSlip, (parkingSlip) => parkingSlip.parkingArea)
    parkingSlip: Customer;


}
