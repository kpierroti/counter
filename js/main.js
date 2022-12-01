const counters = document.querySelectorAll('.counter');

for (let c of counters) {
    const updateCount = () => {
        const target = +c.getAttribute('data-target');
        const count = +c.innerText;
        const divider = 300;
        const speed = 1; 

        const inc = target / divider;

        if (count < target) {
            c.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, speed);
        } else {
            c.innerText = target;
        }
    };

    updateCount();
}
