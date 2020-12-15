/**
 * Ref: https://github.com/agreatfool/grpc_tools_node_protoc_ts/blob/master/examples/src/grpc/server.ts
 */
import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import { GreeterService } from "../../gen/proto/helloworld_grpc_pb";
import { HelloReply, HelloRequest } from "../../gen/proto/helloworld_pb";
import { port } from "../config";

function sayHello(
  call: ServerUnaryCall<HelloRequest, HelloReply>,
  callback: sendUnaryData<HelloReply>
) {
  const greeter = new HelloReply();
  const name = call.request.getName();
  const message = `Hello ${name}`;

  greeter.setMessage(message);
  callback(null, greeter);
}

function startServer() {
  const server = new Server();
  server.addService(GreeterService, { sayHello });
  server.bindAsync(
    `0.0.0.0:${port}`,
    ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.error(error);
      }

      server.start();
      console.log(`server start listing on port ${port}`);
    }
  );
}

startServer();
