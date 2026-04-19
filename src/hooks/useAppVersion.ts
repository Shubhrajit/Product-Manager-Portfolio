import { useState, useEffect } from 'react';
import packageJson from '../../package.json';
import { VERSION_NOTES, GITHUB_API_URL, FETCH_TIMEOUT_MS, MAX_COMMIT_LINES } from '../constants';

export function useAppVersion() {
  const baseVersion = packageJson.version;
  const [versionInfo, setVersionInfo] = useState({
    version: `v${baseVersion}`,
    notes: VERSION_NOTES
  });

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
        
        const res = await fetch(`${GITHUB_API_URL}&t=${Date.now()}`, {
          signal: controller.signal,
          cache: 'no-store'
        });
        
        clearTimeout(timeoutId);
        
        if (!res.ok) {
          console.warn(`GitHub API returned status: ${res.status}. Using fallback version info.`);
          return;
        }
        
        const linkHeader = res.headers.get('link');
        let revision = '0';
        if (linkHeader) {
          const match = linkHeader.match(/page=(\d+)>; rel="last"/);
          if (match) {
            revision = match[1];
          }
        }
        
        const data = await res.json();
        if (data && data.length > 0 && data[0].commit) {
          const messageLines = data[0].commit.message.split('\n').filter((line: string) => line.trim() !== '');
          const versionPrefix = baseVersion.split('.').slice(0, 2).join('.');
          setVersionInfo({
            version: `v${versionPrefix}.${revision}`,
            notes: messageLines.slice(0, MAX_COMMIT_LINES)
          });
        }
      } catch (err) {
        console.warn('Failed to fetch version info, using fallback:', err);
      }
    };

    fetchVersion();
  }, []);

  return versionInfo;
}
