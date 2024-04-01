import { useSelector } from 'react-redux';
import { selectAccessToken } from '../../store/user/user.slice';

export function useHttpClient() {
  const host = 'http://localhost:8000';
  const accessToken = useSelector(selectAccessToken);

  return {
    get: <T>(endpoint: string): Promise<T> => {
      return fetch(`${host}/${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
      }).then((res) => res.json()) as Promise<T>;
    },
    post: <T>(endpoint: string, body: any): Promise<T> => {
      return fetch(`${host}/${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
        method: 'POST',
        body: JSON.stringify(body),
      }).then((res) => res.json()) as Promise<T>;
    },
  };
}
