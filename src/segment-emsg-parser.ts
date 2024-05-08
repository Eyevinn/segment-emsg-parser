import ISOBoxer from "codem-isoboxer";

import { EMSG } from "./types";

export const extractEmsgArrayFromSegment = (
  segment: ArrayBuffer
): Array<EMSG> => {
  return ISOBoxer.parseBuffer(segment)
    .fetchAll("emsg")
    .map((emsg) => ({
      event_duration: emsg.event_duration,
      flags: emsg.flags,
      id: emsg.id,
      message_data: emsg.message_data,
      presentation_time: emsg.presentation_time,
      presentation_time_delta: emsg.presentation_time_delta,
      scheme_id_uri: emsg.scheme_id_uri,
      size: emsg.size,
      timescale: emsg.timescale,
      type: emsg.type,
      value: emsg.value,
      version: emsg.version,
    })) as Array<EMSG>;
};

export const mapMessageDataToString = (messageData: Uint8Array) =>
  Array.from(messageData)
    .filter((code) => code > 31 && code < 127)
    .map((code) => String.fromCharCode(code))
    .join("");
