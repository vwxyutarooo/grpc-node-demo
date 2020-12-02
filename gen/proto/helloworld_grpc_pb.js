// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2015 gRPC authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('grpc');
var proto_helloworld_pb = require('../proto/helloworld_pb.js');

function serialize_helloworld_FoobarReply(arg) {
  if (!(arg instanceof proto_helloworld_pb.FoobarReply)) {
    throw new Error('Expected argument of type helloworld.FoobarReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_FoobarReply(buffer_arg) {
  return proto_helloworld_pb.FoobarReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_FoobarRequest(arg) {
  if (!(arg instanceof proto_helloworld_pb.FoobarRequest)) {
    throw new Error('Expected argument of type helloworld.FoobarRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_FoobarRequest(buffer_arg) {
  return proto_helloworld_pb.FoobarRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_HelloReply(arg) {
  if (!(arg instanceof proto_helloworld_pb.HelloReply)) {
    throw new Error('Expected argument of type helloworld.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_HelloReply(buffer_arg) {
  return proto_helloworld_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_HelloRequest(arg) {
  if (!(arg instanceof proto_helloworld_pb.HelloRequest)) {
    throw new Error('Expected argument of type helloworld.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_HelloRequest(buffer_arg) {
  return proto_helloworld_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var GreeterService = exports.GreeterService = {
  // Sends a greeting
sayHello: {
    path: '/helloworld.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: proto_helloworld_pb.HelloRequest,
    responseType: proto_helloworld_pb.HelloReply,
    requestSerialize: serialize_helloworld_HelloRequest,
    requestDeserialize: deserialize_helloworld_HelloRequest,
    responseSerialize: serialize_helloworld_HelloReply,
    responseDeserialize: deserialize_helloworld_HelloReply,
  },
  foobar: {
    path: '/helloworld.Greeter/Foobar',
    requestStream: false,
    responseStream: false,
    requestType: proto_helloworld_pb.FoobarRequest,
    responseType: proto_helloworld_pb.FoobarReply,
    requestSerialize: serialize_helloworld_FoobarRequest,
    requestDeserialize: deserialize_helloworld_FoobarRequest,
    responseSerialize: serialize_helloworld_FoobarReply,
    responseDeserialize: deserialize_helloworld_FoobarReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
