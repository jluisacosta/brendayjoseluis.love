import {
  Encode_Sans_Condensed as EncodeCon,
  Encode_Sans_Expanded as EncodeExp,
  Great_Vibes as GreatVibes,
  Kosugi_Maru as KosugiMaru,
} from 'next/font/google';

export const encodeC = EncodeCon({
  subsets: ['latin'],
  weight: ['300'],
});

export const encodeX = EncodeExp({
  subsets: ['latin'],
  weight: ['500'],
});

export const greatVibes = GreatVibes({
  subsets: ['latin'],
  weight: ['400'],
});

export const kosugiMaru = KosugiMaru({
  subsets: ['latin'],
  weight: ['400'],
});
