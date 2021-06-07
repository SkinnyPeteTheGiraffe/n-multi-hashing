import {RpcData} from "./types";

const reverseBuffer = (buff: Buffer) => {
    const reversed = Buffer.alloc(buff.length);
    for (let i = buff.length - 1; i >= 0; i--)
        reversed[buff.length - i - 1] = buff[i];
    return reversed;
};

export const reverseBytes = (buffer: Buffer, output?: Buffer) => {
    output = output || buffer;
    const halfLen = buffer.length / 2;
    for (let i = 0; i < halfLen; i++) {
        const byte = buffer[i];
        output[i] = buffer[buffer.length - i - 1];
        output[buffer.length - i - 1] = byte;
    }
    return output;
};

export const serializeHeader = (rpcData: RpcData, merkleRoot: string, nTime: string, nonce: string) => {
    const header = Buffer.alloc(80);
    let position = 0;
    header.write(nonce, position, 4, 'hex');
    header.write(rpcData.bits, position += 4, 4, 'hex');
    header.write(nTime, position += 4, 4, 'hex');
    header.write(merkleRoot, position += 4, 32, 'hex');
    header.write(rpcData.previousblockhash, position += 32, 32, 'hex');
    header.writeUInt32BE(rpcData.version, position + 32);
    return reverseBuffer(header);
};
