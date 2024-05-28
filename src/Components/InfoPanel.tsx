interface Props {
    sampleName: string;
}

function InfoPanel({ sampleName }: Props) {
    return (
        <div id="info-panel">
            {/* Display shows sound clip name */}
            <div id="display">
                {sampleName}
            </div>
        </div>
    );
}

export default InfoPanel;