import "reflect-metadata";
import {ApolloServer} from "apollo-server";
import {buildSchema} from "type-graphql";
import {AppointmentsResolver} from "./resolvers/appointments-resolver";
import path from "path";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [AppointmentsResolver],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    });

    const server = new ApolloServer({
        schema
    });

    const {url} = await server.listen();
    console.log(`🚀 HTTP server running on ${url}...`);
}

bootstrap();