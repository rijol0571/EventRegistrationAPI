import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { RegistrationsService } from './registrations.service';
import { CreateRegistrationDto, UpdateRegistrationDto } from './dto/registration.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../common/constants';

@Controller('registrations')
export class RegistrationsController {
  constructor(private readonly registrationsService: RegistrationsService) {}

  @Post()
  @Roles(UserRole.USER)
  create(@Body() createRegistrationDto: CreateRegistrationDto) {
    return this.registrationsService.create(createRegistrationDto);
  }

  @Get()
  findAll() {
    return this.registrationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registrationsService.findOne(+id);
  }

  @Patch(':id')
  @Roles(UserRole.USER)
  update(@Param('id') id: string, @Body() updateRegistrationDto: UpdateRegistrationDto) {
    return this.registrationsService.update(+id, updateRegistrationDto);
  }

  @Delete(':id')
  @Roles(UserRole.USER)
  remove(@Param('id') id: string) {
    return this.registrationsService.remove(+id);
  }
}
