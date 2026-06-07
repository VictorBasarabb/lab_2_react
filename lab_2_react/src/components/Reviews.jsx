import { useEffect, useState } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Помилка завантаження відгуків');
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-white rounded-xl shadow-sm border-l-4 border-slate-900 p-8">
      <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-4 pb-3 border-b border-slate-100">
        Відгуки роботодавців
      </h2>

      {loading && <p className="text-slate-400 text-sm">Завантаження...</p>}
      {error && <p className="text-red-400 text-sm">{error}</p>}

      <div className="flex flex-col gap-4">
        {comments.map((comment) => (
          <article
            key={comment.id}
            className="bg-slate-50 rounded-lg p-4 border border-slate-100"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                {comment.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">{comment.name}</p>
                <p className="text-xs text-blue-500">{comment.email}</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{comment.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
