import { cn } from '@/lib/utils';

export function ComponentPreviewTemp({ children }: any) {
  return (
    <div className={cn('p-3 border-2 rounded-xl mt-5')}>
      <div>{children}</div>
    </div>
  );
}
