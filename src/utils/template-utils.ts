import { ElementType, Template, TextElement } from '../model/template.model';

export class TemplateUtils {
  static registerFonts(template: Template): void {
    TemplateUtils.extractUniqueFonts(template).forEach((font) => {
      const exists = !!document.getElementById('template-font-' + font);
      if (exists) {
        return;
      }
      const link = document.createElement('link');
      link.id = 'template-font-' + font;
      link.href = `https://fonts.googleapis.com/css2?family=${font}:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap`;
      link.rel = 'stylesheet';
      document.head.append(link);
    });
  }

  static extractUniqueFonts(template: Template): string[] {
    return [
      ...new Set(
        template.layouts
          .map((el) => el.fields)
          .flat()
          .map((el) => el.elements)
          .flat()
          .filter(
            (element) =>
              element.type === ElementType.TEXT &&
              (element as TextElement).style?.fontFamily,
          )
          .map((element) => (element as TextElement).style?.fontFamily!),
      ),
    ];
  }
}
