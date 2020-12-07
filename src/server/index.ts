/**
 * Ref: https://github.com/agreatfool/grpc_tools_node_protoc_ts/blob/master/examples/src/grpc/server.ts
 */
import grpc from "grpc";
import {
  GreeterService,
  IGreeterServer,
} from "../../gen/proto/helloworld_grpc_pb";
import { HelloReply, HelloRequest } from "../../gen/proto/helloworld_pb";
import { port } from "../config";

class GreeterServer implements IGreeterServer {
  public sayHello(
    call: grpc.ServerUnaryCall<HelloRequest>,
    callback: grpc.sendUnaryData<HelloReply>
  ) {
    const greeter = new HelloReply();
    const name = call.request.getName() || "World";
    const message = `Hello ${name}`;

    greeter.setMessage(message);
    callback(null, greeter);
  }

  public foobar() {}
}

function startServer() {
  const server = new grpc.Server();
  server.addService(GreeterService, new GreeterServer());
  server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());
  server.start();
}

startServer();
