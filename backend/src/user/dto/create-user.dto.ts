import { IsBoolean, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  last_name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  start_time: string;

  @IsString()
  end_time: string;

  @IsBoolean()
  verified: boolean;
}
