import {Arg, FieldResolver, Mutation, Query, Resolver, Root} from "type-graphql";
import {CreateAppointmentInput} from "../inputs/create-appointment-input";
import {Appointment} from "../models/appointment";
import {Customer} from "../models/customer";

@Resolver(() => Appointment)
export class AppointmentsResolver {
    private readonly appointments: Appointment[] = [];

    @Query(() => [Appointment])
    async allAppointments() {
        return this.appointments;
    }

    @Mutation(() => Appointment)
    async createAppointment(@Arg('data') data: CreateAppointmentInput) {
        const appointment = new Appointment(data.startsAt, data.endsAt);
        this.appointments.push(appointment);
        return appointment;
    }

    @FieldResolver(() => Customer)
    async customer(@Root() appointment: Appointment) {
        return new Customer('John Doe');
    }

}