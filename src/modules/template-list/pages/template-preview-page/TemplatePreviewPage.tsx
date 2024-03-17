import { Navigate, useParams } from 'react-router-dom';
import { TemplateDrawer } from '../../../../components/template-drawer/TemplateDrawer';
import { useSelector } from 'react-redux';
import { selectTemplateById } from '../../../../store/template/templates.slice';

export function TemplatePreviewPage() {
  const params = useParams();
  const template = useSelector(selectTemplateById(params.id!));

  if (!template) {
    return <Navigate to={'/404'} />; // TODO: add 404 page
  }

  return <TemplateDrawer template={template} />;
}
