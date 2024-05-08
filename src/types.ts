export interface EMSG {
  id: number;
  flags: number;
  message_data: Uint8Array;
  presentation_time_delta?: number;
  presentation_time?: number;
  event_duration: number;
  scheme_id_uri:
    | "urn:scte:scte35:2013:xml"
    | "https://aomedia.org/emsg/ID3"
    | "urn:yospace:a:id3:2016"
    | string;
  size: number;
  timescale: number;
  type: string;
  value: string;
  version: number;
}
