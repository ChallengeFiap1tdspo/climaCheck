document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        const question = item.querySelector('.faq-question');
        const icon = item.querySelector('.faq-icon');

        if (question && icon) {
            question.addEventListener('click', () => {
                faqItems.forEach((otherItem) => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherIcon = otherItem.querySelector('.faq-icon');
                        if (otherIcon) otherIcon.textContent = '+';
                    }
                });

                const isActive = item.classList.toggle('active');
                icon.textContent = isActive ? '-' : '+';
            });
        }
    });
});
