export function calculateCommission(level, earnings) {
  if (level === 'beginner') return earnings * 0.0005;
  if (level === 'pro') return earnings * 0.05;
  if (level === 'business') return earnings * 0.10;
  return 0;
}