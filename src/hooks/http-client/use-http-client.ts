import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectAccessToken } from '../../store/user/user.slice';
import { useToast } from '@chakra-ui/react';

export function useHttpClient() {
  const host = 'http://localhost:8000';
  const accessToken = useSelector(selectAccessToken);
  const toast = useToast();
  const dispatch = useDispatch();

  function getHeaders(): HeadersInit {
    return {
      'Content-Type': 'application/json',
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
    };
  }

  async function handleResponse<T>(response: Response): Promise<T> {
    const data = await response.json();
    return response.ok ? data : handleError(response, data);
  }

  function handleError(response: Response, data: string) {
    if (response.status === 401) {
      dispatch(logOut());
    }
    console.error(response);
    toast({
      title: 'Error',
      description: data,
      status: 'error',
      duration: 5000,
      position: 'top-right',
      isClosable: true,
    });
    return Promise.reject({ status: response.status, message: data });
  }

  return {
    get: <T>(endpoint: string): Promise<T> =>
      fetch(`${host}/${endpoint}`, {
        headers: getHeaders(),
      }).then((res) => handleResponse(res)),
    post: <T>(endpoint: string, body: any): Promise<T> =>
      fetch(`${host}/${endpoint}`, {
        headers: getHeaders(),
        method: 'POST',
        body: JSON.stringify(body),
      }).then((res) => handleResponse(res)),
  };
}
