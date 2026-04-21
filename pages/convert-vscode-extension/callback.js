import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    const { code, state } = router.query;
    if (!code || !state) return;

    const [scheme, ...rest] = state.split('|');
    const actualState = rest.join('|');

    const validSchemes = ['vscode', 'vscode-insiders', 'cursor'];
    const redirectScheme = validSchemes.includes(scheme) ? scheme : 'vscode';

    window.location.href = `${redirectScheme}://ShreyashSingh101.convert-vscode-extension/did-authenticate?code=${encodeURIComponent(code)}&state=${encodeURIComponent(actualState)}`;
  }, [router.query]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <p>Redirecting back to your editor...</p>
    </div>
  );
}