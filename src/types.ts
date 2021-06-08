export interface RpcData {
    bits: string;
    previousBlockHash: string;
    nextBlockHash?: string;
    version: number;
    size?: number;
    difficulty?: number;
}
