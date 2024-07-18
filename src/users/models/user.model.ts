// import { Table, Column, Model, DataType } from 'sequelize-typescript';
// import { UserRole } from '../../common/constants';

// @Table
// export class User extends Model<User> {
//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   name: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   email: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   password: string;

//   @Column({
//     type: DataType.BOOLEAN,
//     allowNull: false,
//   })
//   isActive: boolean;

//   @Column({
//     type: DataType.ENUM(...Object.values(UserRole)),
//     allowNull: false,
//   })
//   role: UserRole;
// }

import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  isActive: boolean;

  @Column({
    type: DataType.ENUM,
    values: ['admin', 'user'],
    allowNull: false,
  })
  role: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  username: string;
}


