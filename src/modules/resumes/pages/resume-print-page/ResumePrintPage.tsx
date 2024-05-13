import { TemplateDrawer } from '../../../../components/template-drawer/TemplateDrawer.tsx';
import { useSelector } from 'react-redux';
import { selectResumeById } from '../../../../store/resume/resumes.slice.ts';
import { selectTemplateById } from '../../../../store/template/templates.slice.ts';
import { Navigate, useParams } from 'react-router-dom';
import { A4 } from '../../../../const/a4.const.ts';
import { useEffect } from 'react';

export function ResumePrintPage() {
  const params = useParams();
  const resume = useSelector(selectResumeById(parseInt(params.id!)));
  const template = useSelector(selectTemplateById(resume?.templateId || -1));

  useEffect(() => {
    if (resume && template) {
      setTimeout(() => {
        window.print();
        window.close();
      }, 1000);
    }
  }, [resume, template]);

  if (!resume || !template) {
    return <Navigate to={'/404'} />;
  }

  return (
    <TemplateDrawer
      template={template}
      dimension={A4}
      scale={1.332}
      data={resume.personalData}
    />
  );
}
