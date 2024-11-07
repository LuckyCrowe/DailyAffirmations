document.addEventListener("DOMContentLoaded", function() {
    const affirmations = [
        "I am capable of achieving my goals.",
        "I am worthy of love and respect.",
        "I am as GOD made me.",
        "I attract positivity and success.",
        "I am resilient and can overcome challenges."
    ];

    const affirmationElement = document.querySelector('#affirmations p');
    
    // Change affirmation every 5 seconds
    let index = 0;
    setInterval(() => {
        index = (index + 1) % affirmations.length;
        affirmationElement.textContent = affirmations[index];
    }, 5000);
});
