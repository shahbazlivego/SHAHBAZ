export function detectLanguage(req) {
  const lang = req.headers['accept-language']?.split(',')[0] || 'en';
  return lang;
}