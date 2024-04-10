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

export function ResumeLayout() {
  const http = useHttpClient();
  const isLoaded = useSelector(selectIsResumesLoaded);
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  useEffect(() => {
    if (isLoaded) {
      return;
    }
    http
      .get<Resume[]>(`users/${userId}/resumes`)
      .then((resumes) => dispatch(setResumes(resumes)));
  }, []);

  if (!isLoaded) {
    return <Loader></Loader>;
  }

  return <Outlet />;
}
