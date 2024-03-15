export function useHttpClient() {
  const host = 'http://localhost:8000';

  return {
    get: <T>(endpoint: string): Promise<T> => {
      return fetch(`${host}/${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json()) as Promise<T>;
    },
  };
}
