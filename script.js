// 1. Create a synthesizer
const synth = new Tone.MembraneSynth().toDestination();

// 2. Add a listener to the buttons
document.querySelectorAll('.pad').forEach(button => {
    button.addEventListener('click', async () => {
        // Start the audio context (browsers require this)
        await Tone.start();
        
        const note = button.getAttribute('data-note');
        
        // Play the sound!
        synth.triggerAttackRelease(note, "8n");
    });
});
