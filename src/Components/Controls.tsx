import { useEffect, useState } from "react";
import { sample, samples } from "./samples";

interface SoundPadProps {
    sample: sample;
    onPlay: (sample: string) => void;
}
function SoundPad({ sample, onPlay }: SoundPadProps) {
    function createAudio() {
        const audio = new Audio(sample.url);
        audio.id = sample.key.toUpperCase();
        audio.className = "clip";
        return audio;
    }

    const [audio] = useState(createAudio);
    function playSound() {
        audio.load();
        audio.play();
        onPlay(sample.sampleName);
    }
    useEffect(() => {
        function onKeyDown(event: { key: string; }) {
            if (event.key === sample.key || event.key === sample.altKey) playSound();
        }
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("keydown", onKeyDown);
        }
    });

    return (
        <div onClick={playSound} className="drum-pad" id={sample.sampleName} key={sample.sampleName} >
            <div>{sample.icon}</div>
            <div>{sample.key.toUpperCase()}</div>
        </div>
    );
}

interface ControlsProps {
    onPlay: (sample: string) => void;
}
function Controls({ onPlay }: ControlsProps) {
    return (
        <div id="controls">
            {samples.map((sample) => (
                <SoundPad sample={sample} onPlay={onPlay} />
            ))}
        </div>
    );
}

export default Controls;
