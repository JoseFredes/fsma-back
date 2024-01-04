import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column({ length: 100 })
  companyName: string;

  @Column({ length: 100 })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;
}
