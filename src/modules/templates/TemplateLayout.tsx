import { useEffect } from 'react';
import { Template } from '../../model/template.model';
import {
  selectIsTemplateLoaded,
  setTemplates,
} from '../../store/template/templates.slice';
import { useHttpClient } from '../../hooks/http-client/use-http-client';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Loader } from '../../components/loader/Loader';

export function TemplateLayout() {
  const httpClient = useHttpClient();
  const dispatch = useDispatch();
  const isLoaded = useSelector(selectIsTemplateLoaded);

  useEffect(() => {
    if (isLoaded) {
      return;
    }

    httpClient
      .get<Template[]>('templates')
      .then((templates) => dispatch(setTemplates(templates)));
  }, []);

  if (!isLoaded) {
    return <Loader></Loader>;
  }

  return <Outlet />;
}
