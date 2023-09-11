import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Department } from "./Department";

@Entity("EMPLOYEE")
export class Employee extends BaseEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAd: Date;

  @ManyToOne(() => Department, (department: any) => department.employee)
  department: Department;
}
