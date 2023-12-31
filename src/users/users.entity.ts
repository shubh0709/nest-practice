import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @AfterRemove()
  afterRemove() {
    console.log(`Removed entity ${this.id}`);
  }

  @AfterUpdate()
  afterUpdate() {
    console.log(`Updated entity ${this.id}`);
  }

  @AfterInsert()
  afterInsert() {
    console.log(`inserted entity ${this.email}`);
  }
}
