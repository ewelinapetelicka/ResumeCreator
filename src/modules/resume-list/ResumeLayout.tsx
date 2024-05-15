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
  const isResumesLoaded = useSelector(selectIsResumesLoaded);
  const isTemplateLoaded = useSelector(selectIsTemplateLoaded);
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  useEffect(() => {
    if (isResumesLoaded) {
      return;
    }
    http
      .get<Resume[]>(`users/${userId}/resumes`)
      .then((resumes) => dispatch(setResumes(resumes)));
  }, []);

  useEffect(() => {
    if (isTemplateLoaded) {
      return;
    }
    http
      .get<Template[]>(`users/${userId}/templates`)
      .then((templates) => dispatch(setTemplates(templates)));
  }, []);

  if (!isTemplateLoaded || !isResumesLoaded) {
    return <Loader></Loader>;
  }

  return <Outlet />;
}
