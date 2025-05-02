import { useTheme } from 'styled-components';
import { TTimelineItemProps } from '../../../../ui/timeline-item/assets/timeline-item.model.ts';

const useTimelineData: () => TTimelineItemProps[] = () => {
  const theme = useTheme();
  const color = theme.palette.secondary.main;

  return [
    {
      title: 'Middle+ front-end developer',
      text: 'Web application development using Next.js, TypeScript, Shadcn, and other technologies.',
      date: 'April 2025 - present',
      chips: [
        { label: 'React', color },
        { label: 'Next', color },
        { label: 'TypeScript', color },
        { label: 'JavaScript', color },
        { label: 'SCSS', color },
        { label: 'React Query', color },
        { label: 'Shadcn', color },
        { label: 'Tailwind', color },
      ],
    },
    {
      title: 'Middle front-end developer',
      text:
        'Built the front end for a social assistance management app using React, TypeScript, and MUI.\n' +
        'Integrated RTK, RTK Query, and SSE for real-time updates.\n' +
        'Wrote component tests with Vitest & React Testing Library.\n' +
        'Contributed to an HRM app using Next.js, TypeScript, and Mantine UI.',
      date: 'Oct 2024 - April 2025',
      chips: [
        { label: 'React', color },
        { label: 'Next', color },
        { label: 'Redux', color },
        { label: 'TypeScript', color },
        { label: 'JavaScript', color },
        { label: 'SCSS', color },
        { label: 'MUI', color },
        { label: 'Mantine UI', color },
        { label: 'RTK Query', color },
      ],
    },
    {
      title: 'Front-end developer',
      text:
        'Participated in the development of a CRM system using React and TypeScript, implementing FSD architecture principles.\n' +
        'Created a UI library based on MUI.\n' +
        'Refactored project structure and optimized code in accordance with SOLID, DRY, and KISS principles.\n' +
        'Assisted in developing the back end for a chat widget using WebSockets and MongoDB.',
      date: 'May 2023 - Oct 2024',
      chips: [
        { label: 'React', color },
        { label: 'Redux', color },
        { label: 'TypeScript', color },
        { label: 'JavaScript', color },
        { label: 'SCSS', color },
        { label: 'Storybook', color },
        { label: 'MUI', color },
        { label: 'RTK Query', color },
        { label: 'MongoDB', color },
        { label: 'GraphQL', color },
        { label: 'NodeJS', color },
        { label: 'Express', color },
      ],
    },
    {
      title: 'Front-end developer',
      text:
        'Developed responsive websites from Figma designs using HTML, CSS, and JavaScript.\n' +
        'Integrated layouts with WordPress, including theme development and plugin setup.\n' +
        'Optimized website performance with SEO.\n' +
        'Maintained and updated websites by fixing bugs and implementing changes.',
      date: 'Mar 2022 - May 2023',
      chips: [
        { label: 'HTML', color },
        { label: 'JavaScript', color },
        { label: 'CSS', color },
        { label: 'SCSS', color },
        { label: 'PHP', color },
        { label: 'WordPress', color },
      ],
    },
  ];
};

export default useTimelineData;
