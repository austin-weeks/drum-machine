import { useState } from "react";
import Controls from "./Controls";
import InfoPanel from "./InfoPanel";

function DrumMachine() {
    const [lastSound, setLastSound] = useState("");
    function onPlay(sample: string) {
        setLastSound(sample);
    }
    return (
        <div id="drum-machine" >
            <Controls  onPlay={onPlay}/>
            <InfoPanel sampleName={lastSound} />
        </div>
    );
}

export default DrumMachine;