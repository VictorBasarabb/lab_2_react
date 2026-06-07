import { useEffect, useState } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); // 1 хвилина

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xykaedev', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setIsOpen(false);
          setSubmitted(false);
        }, 3000);
      }
    } catch {
      console.error('Помилка відправки форми');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-lg font-bold text-slate-900 mb-1">Зв'язатися зі мною</h2>
        <p className="text-slate-500 text-sm mb-6">Залиште ваш відгук або пропозицію</p>

        {submitted ? (
          <p className="text-green-600 font-semibold text-center py-8">
            ✓ Повідомлення надіслано!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Ваше ім'я"
              required
              className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-slate-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-slate-900"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Номер телефону"
              className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-slate-900"
            />
            <textarea
              name="message"
              placeholder="Ваше повідомлення"
              rows={4}
              required
              className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-slate-900 resize-none"
            />
            <button
              type="submit"
              className="bg-slate-900 text-white rounded-lg py-3 text-sm font-semibold hover:bg-slate-700 transition-colors"
            >
              Відправити
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
