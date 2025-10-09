import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

//TODO revisar como validar que dni acepte solo numeros pero que al guardar se guarde como un string
export class CreateUserDto {

    //Que informaci[on estoy esperando a la hora en que creen un usuario

    @IsString()
    public name: string;

    @IsString()
    public lastname: string;

    // @IsNumber({
    //     maxDecimalPlaces: 8,
    // })
    @IsString()
    public dni: string;

    @IsString()
    public email: string;

    @IsString()
    public password: string;


    //ejemplo si en este modulo tendría precio
    // @Min(0)
    // @Type(() => Number )
    // public price:number;
}
