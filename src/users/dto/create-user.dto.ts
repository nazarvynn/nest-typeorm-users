import { Gender } from '../enums';

export class CreateUserDto {
  email: string;
  gender: Gender;
}
