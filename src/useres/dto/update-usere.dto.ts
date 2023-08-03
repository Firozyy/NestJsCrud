import { PartialType } from '@nestjs/mapped-types';
import { CreateUsereDto } from './create-usere.dto';

export class UpdateUsereDto extends PartialType(CreateUsereDto) {
    name:string
    email:string
}
