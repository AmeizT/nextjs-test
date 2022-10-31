'use client';

import { useStyledComponentsRegistry } from '../src/lib/styled-components';
import { useServerInsertedHTML } from 'next/navigation';

export default function RootStyleRegistry({
  children,
}: {
  children: JSX.Element;
}) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();

  useServerInsertedHTML(() => {
    return <>{styledComponentsFlushEffect()}</>;
  });

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}