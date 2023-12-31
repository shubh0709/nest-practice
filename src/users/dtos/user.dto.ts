import { IsEmail, IsOptional, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  @IsString()
  id: string;

  @Expose()
  @IsEmail()
  email: string;
}
