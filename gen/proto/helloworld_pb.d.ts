// package: helloworld
// file: proto/helloworld.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HelloRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): HelloRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloRequest;
    static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
    export type AsObject = {
        name: string,
    }
}

export class HelloReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): HelloReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloReply.AsObject;
    static toObject(includeInstance: boolean, msg: HelloReply): HelloReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloReply;
    static deserializeBinaryFromReader(message: HelloReply, reader: jspb.BinaryReader): HelloReply;
}

export namespace HelloReply {
    export type AsObject = {
        message: string,
    }
}

export class FoobarRequest extends jspb.Message { 
    getOption(): string;
    setOption(value: string): FoobarRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FoobarRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FoobarRequest): FoobarRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FoobarRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FoobarRequest;
    static deserializeBinaryFromReader(message: FoobarRequest, reader: jspb.BinaryReader): FoobarRequest;
}

export namespace FoobarRequest {
    export type AsObject = {
        option: string,
    }
}

export class FoobarReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): FoobarReply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FoobarReply.AsObject;
    static toObject(includeInstance: boolean, msg: FoobarReply): FoobarReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FoobarReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FoobarReply;
    static deserializeBinaryFromReader(message: FoobarReply, reader: jspb.BinaryReader): FoobarReply;
}

export namespace FoobarReply {
    export type AsObject = {
        message: string,
    }
}
