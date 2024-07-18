import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Registration extends Model<Registration> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  eventName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userName: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  registrationDate: Date;
}
