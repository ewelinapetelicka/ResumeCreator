import { useHttpClient } from '../../hooks/http-client/use-http-client';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsResumesLoaded,
  setResumes,
} from '../../store/resume/resumes.slice';
import { Resume } from '../../model/resume.model';
import { Loader } from '../../components/loader/Loader';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { selectUserId } from '../../store/user/user.slice';
import { Template } from '../../model/template.model';
import {
  selectIsTemplateLoaded,
  setTemplates,
} from '../../store/template/templates.slice';

export function ResumeLayout() {
  const http = useHttpClient();
  const resumesIsLoaded = useSelector(selectIsResumesLoaded);
  const templatesIsLoaded = useSelector(selectIsTemplateLoaded);
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  useEffect(() => {
    if (resumesIsLoaded) {
      return;
    }
    http
      .get<Resume[]>(`users/${userId}/resumes`)
      .then((resumes) => dispatch(setResumes(resumes)));
  }, []);

  useEffect(() => {
    if (templatesIsLoaded) {
      return;
    }
    http
      .get<Template[]>(`users/${userId}/templates`)
      .then((templates) => dispatch(setTemplates(templates)));
  }, []);

  if (!templatesIsLoaded || !resumesIsLoaded) {
    return <Loader></Loader>;
  }

  return <Outlet />;
}
