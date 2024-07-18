import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Payment extends Model<Payment> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  paymentMethod: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  amount: number;

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
  userId: string;
}
