import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Event extends Model<Event> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue : DataType.NOW
  })
  date: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  location: string;
}
