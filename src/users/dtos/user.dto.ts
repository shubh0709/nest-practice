import { IsEmail, IsOptional, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class UpdateUserDto {
  @Expose()
  @IsEmail()
  email: string;

  @Expose()
  @IsString()
  password: string;
}
