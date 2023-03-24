declare module "codem-isoboxer" {
  interface AtomData {
    offset: number;
  }

  interface IsoBoxer {
    fetchAll: (name: string) => Array<any>;
  }

  export var parseBuffer: (arraybuffer: ArrayBuffer) => IsoBoxer;
}
