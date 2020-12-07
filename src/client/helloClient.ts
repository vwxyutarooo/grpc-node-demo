import { HelloRequest } from "../../gen/proto/helloworld_pb";
import { GreeterClient } from "../../gen/proto/helloworld_grpc_pb";
import grpc from "grpc";
import { grpcClientOptions, port } from "../config";

const serverURL = `localhost:${port}`;

export type RequestParams = {
  name?: string;
};

export function sayHello({ name = "World" }: RequestParams) {
  const Request = new HelloRequest();
  const Client = new GreeterClient(
    serverURL,
    grpc.credentials.createInsecure(),
    grpcClientOptions
  );
  Request.setName(name);

  return new Promise((resolve, reject) => {
    Client.sayHello(Request, (error, response) => {
      if (error) {
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
