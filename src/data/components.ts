import document from '@htmlplus/core/json/document.json';

export const components: any[] = document.components.filter((component) => {
  return component.tags.some((tag) => tag.key == 'stable');
});
