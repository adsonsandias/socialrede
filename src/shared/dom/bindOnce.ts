type AnyEvent = Event;

export function bindOnce<K extends keyof HTMLElementEventMap>(
  element: Element,
  key: string,
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void
): void {
  const htmlElement = element as HTMLElement;
  const datasetKey = `bound${key}`;

  if ((htmlElement.dataset as Record<string, string | undefined>)[datasetKey]) return;
  (htmlElement.dataset as Record<string, string>)[datasetKey] = "1";

  htmlElement.addEventListener(eventName, handler as unknown as (e: AnyEvent) => void);
}

