declare module '*/n-hashing.node' {
    function scryptn(buffer: Buffer, n: number): any;
    function c11(buffer: Buffer, out: Buffer, n: number): any;
    function x16rv2(buffer: Buffer, out: Buffer, n: number): any;
    function groestl(buffer: Buffer): any;
    function sha256d(buffer: Buffer, out: Buffer, n: number): any;
    function kawpow(buffer: Buffer, nonce: Buffer, height: number, mix: Buffer, out: Buffer): any;
    function kawpow_verify(buffer: Buffer, nonce: Buffer, height: number, mix: Buffer, out: Buffer): any;
}
