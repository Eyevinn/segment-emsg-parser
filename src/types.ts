export interface EMSG {
  id: number;
  flags: number;
  message_data: Uint8Array;
  presentation_time_delta?: number;
  presentation_time?: number;
  event_duration: number;
  scheme_id_uri: string;
  size: number;
  timescale: number;
  type: string;
  value: string;
  version: number;
}
