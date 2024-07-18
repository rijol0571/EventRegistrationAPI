import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/models/user.model';
import { PaymentsModule } from './payments/payments.module';
import { EventsModule } from './events/events.module';


let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PGHOST,
      port: 5432, // or use +process.env.DB_PORT if needed
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      autoLoadModels: true,
      synchronize: true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // You may need to adjust this setting based on your PostgreSQL server's SSL configuration
        }
      }
    }),
    
    SequelizeModule.forFeature([User]),
    AuthModule,
    UsersModule,
    EventsModule,
    PaymentsModule
  ],
})
export class AppModule {}




