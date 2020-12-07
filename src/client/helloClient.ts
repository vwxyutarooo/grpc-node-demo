import { HelloRequest } from "../../gen/proto/helloworld_pb";
import { GreeterClient } from "../../gen/proto/helloworld_grpc_pb";
import grpc from "grpc";
import { grpcClientOptions, port } from "../config";

const serverURL = `localhost:${port}`;

export function sayHello() {
  const Request = new HelloRequest();
  const Client = new GreeterClient(
    serverURL,
    grpc.credentials.createInsecure(),
    grpcClientOptions
  );
  Request.setName("Mercari");

  return new Promise((resolve, reject) => {
    Client.sayHello(Request, (error, response) => {
      if (error || response) {
        console.error(error);
        reject({
          code: error?.code || 500,
          message: error?.message || "something went wrong",
        });
      }

      return resolve(response.toObject());
    });
  });
}
