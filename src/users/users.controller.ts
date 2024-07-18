import { Controller, Get, Post, Body, Param, Patch, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../common/constants';
import { RolesGuard } from 'src/common/guards/roles.guard';

@Controller('users')

export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Roles(UserRole.ADMIN)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @Roles(UserRole.ADMIN)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  @Roles(UserRole.ADMIN)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
function UseGuards(RolesGuard: any): (target: typeof UsersController) => void | typeof UsersController {
  throw new Error('Function not implemented.');
}

