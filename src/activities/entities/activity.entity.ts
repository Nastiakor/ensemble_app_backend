import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('activities')
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  category: string;

  @Column()
  date: string;

  @Column()
  location: string;

  @Column('int')
  capacity: number;

  @Column()
  organizerName: string;

  @CreateDateColumn()
  createdAt: Date;
}