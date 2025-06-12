export const isAuthenticated = () => {
  return !!localStorage.getItem('jwt');
};

export const getUserRoleFromToken = (): string | null => {
  const token = localStorage.getItem('jwt');
  if (!token) return null;

  try {
    const base64Payload = token.split('.')[1];
    const payload = JSON.parse(atob(base64Payload));
    return payload.roles || null;
  } catch (err) {
    console.error('Erreur de décodage du JWT :', err);
    return null;
  }
};

export const getUserEmailFromToken = (): string | null => {
  const token = localStorage.getItem('jwt');
  if (!token) return null;

  try {
    const base64Payload = token.split('.')[1];
    const payload = JSON.parse(atob(base64Payload));
    return payload.sub || null;
  } catch (err) {
    console.error('Erreur de décodage du JWT :', err);
    return null;
  }
}