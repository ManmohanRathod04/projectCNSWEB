// counter

const counterAnim = (qSelector, start = 0, end, duration = 2000) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 3);
        target.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 3) {
            window.requestAnimationFrame(step);
        }   
    };
    window.requestAnimationFrame(step);
};
document.addEventListener("DOMContentLoaded", () => {
    counterAnim("#count1", 18, 2914, 1000);
    counterAnim("#count2", 201, 294, 900);
    counterAnim("#count3", 209, 348, 900);
    counterAnim("#count4", -1000, 2535, 700);
});



// counter 