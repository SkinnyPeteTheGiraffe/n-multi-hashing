declare module '*/n-hashing.node' {
    function bcrypt(buffer: Buffer, out: Buffer, n: number): any;
    function blake(buffer: Buffer, out: Buffer, n: number): any;
    function c11(buffer: Buffer, out: Buffer, n: number): any;
    function fresh(buffer: Buffer, out: Buffer, n: number): any;
    function fugue(buffer: Buffer, out: Buffer, n: number): any;
    function groestl(buffer: Buffer): any;
    function groestlmyriad(buffer: Buffer): any;
    function kawpow(buffer: Buffer, nonce: Buffer, height: number, mix: Buffer, out: Buffer): any;
    function kawpow_verify(buffer: Buffer, nonce: Buffer, height: number, mix: Buffer, out: Buffer): any;
    function scryptn(buffer: Buffer, n: number): any;
    function sha256d(buffer: Buffer, out: Buffer, n: number): any;
    function x16rv2(buffer: Buffer, out: Buffer, n: number): any;
    function x16r(buffer: Buffer, out?: Buffer, n?: number): any;
}
