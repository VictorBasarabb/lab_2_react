import { useEffect, useState } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({});

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    localStorage.setItem('sysInfo', JSON.stringify(info));
    const stored = JSON.parse(localStorage.getItem('sysInfo'));
    setSysInfo(stored);
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs px-6 py-8 mt-10">
      <p className="text-slate-300 font-semibold mb-3 uppercase tracking-widest text-xs">
        Системна інформація
      </p>
      <div className="flex flex-col gap-1">
        <p><span className="text-slate-500">User Agent:</span> {sysInfo.userAgent}</p>
        <p><span className="text-slate-500">Платформа:</span> {sysInfo.platform}</p>
        <p><span className="text-slate-500">Мова:</span> {sysInfo.language}</p>
        <p><span className="text-slate-500">Роздільна здатність:</span> {sysInfo.screenResolution}</p>
        <p><span className="text-slate-500">Часовий пояс:</span> {sysInfo.timeZone}</p>
      </div>
    </footer>
  );
}

export default Footer;
