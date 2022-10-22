import {Field, ObjectType} from "type-graphql";

@ObjectType()
export class Customer {
    @Field()
    name!: string;

    constructor(name: string) {
        this.name = name;
    }
}