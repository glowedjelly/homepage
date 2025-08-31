document.addEventListener('DOMContentLoaded', async function() {
    const faqList = document.getElementById('faqList');
    try {
        const res = await fetch('/api/faqs');
        const faqs = await res.json();

        faqs.forEach((faq, idx) => {
            const item = document.createElement('div');
            item.className = 'faq-item';

            const question = document.createElement('div');
            question.className = 'faq-question';
            question.textContent = faq.question;

            const answer = document.createElement('div');
            answer.className = 'faq-answer';
            answer.textContent = faq.answer;

            question.addEventListener('click', () => {
                item.classList.toggle('open');
            });

            item.appendChild(question);
            item.appendChild(answer);
            faqList.appendChild(item);
        });
    } catch (err) {
        faqList.innerHTML = '<p>Could not load FAQs. Please try again later.</p>';
    }
});
