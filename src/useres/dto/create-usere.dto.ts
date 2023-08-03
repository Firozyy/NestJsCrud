import { IsEmail } from "class-validator"

export class CreateUsereDto {
    name: string
    @IsEmail()
    email: string

}
