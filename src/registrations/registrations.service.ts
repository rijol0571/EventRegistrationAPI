import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Registration } from '../registrations/ models/registration.model'
import { CreateRegistrationDto, UpdateRegistrationDto } from './dto/registration.dto';

@Injectable()
export class RegistrationsService {
  constructor(
    @InjectModel(Registration)
    private readonly registrationModel: typeof Registration,
  ) {}

  async create(createRegistrationDto: CreateRegistrationDto): Promise<Registration> {
    return this.registrationModel.create(createRegistrationDto);
  }

  async findAll(): Promise<Registration[]> {
    return this.registrationModel.findAll();
  }

  async findOne(id: number): Promise<Registration> {
    const registration = await this.registrationModel.findByPk(id);
    if (!registration) {
      throw new NotFoundException(`Registration with id ${id} not found`);
    }
    return registration;
  }

  async update(id: number, updateRegistrationDto: UpdateRegistrationDto): Promise<Registration> {
    const registration = await this.findOne(id);
    return registration.update(updateRegistrationDto);
  }

  async remove(id: number): Promise<void> {
    const registration = await this.findOne(id);
    await registration.destroy();
  }
}
