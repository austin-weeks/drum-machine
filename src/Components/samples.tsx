import { HandsClapping, PianoKeys } from "@phosphor-icons/react";
import snare from "./Drum Icons/snare.png";
import bass from  "./Drum Icons/bass.png";
import hh from "./Drum Icons/hi-hat.png";
const imgStyle = {
    width: "1em",
    height: "1em"
}
const pianoIcon = <PianoKeys />;
const clapIcon = <HandsClapping />;
const snareIcon = <img src={snare} style={imgStyle} />
const bassIcon = <img src={bass} style={imgStyle} />
const hhIcon = <img src={hh} style={imgStyle} />

export const samples: sample[] = [
    {
        sampleName: "Chord 1",
        key: "a",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
        icon: pianoIcon
    },
    {
        sampleName: "Chord 2",
        key: "s",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
        icon: pianoIcon
    },
    {
        sampleName: "Chord 3",
        key: "d",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
        icon: pianoIcon
    },
    {
        sampleName: "Clap",
        key: "f",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        icon: clapIcon
    },
    {
        sampleName: "Snare-1",
        key: "k",
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
        icon: snareIcon
    },
    {
        sampleName: "Snare-2",
        key: "l",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
        icon: snareIcon
    },
    {
        sampleName: "Open-HH",
        key: "u",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
        icon: hhIcon
    },
    {
        sampleName: "Kick",
        key: "space",
        altKey: " ",
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
        icon: bassIcon
    },
    {
        sampleName: "Closed-HH",
        key: "j",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
        icon: hhIcon
    }
];
export interface sample {
    sampleName: string;
    key: string;
    altKey?: string;
    url: string;
    icon: any;
}
