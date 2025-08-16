import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('user')
export class User {

    @Column({type:'uuid'})
    id:string;

    @PrimaryColumn({type:'varchar'})
     first_name:string;

     @Column({type:'varchar'})
     last_name:string;

     @Column({default:true})
     is_active:boolean;
}
