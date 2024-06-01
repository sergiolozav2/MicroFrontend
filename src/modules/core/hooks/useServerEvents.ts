import { useEffect, useState } from "react";

type EventDataType = {
  name: string;
  data: unknown;
};
export function useServerEvents(url: string) {
  const [event, setEvent] = useState<EventDataType>({
    name: "",
    data: {},
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const eventSource = new EventSource(url, { withCredentials: true });
    eventSource.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setEvent({
        name: message.event,
        data: message.data,
      });
    };
    eventSource.onopen = () => {
      setIsOpen(true);
    };
    eventSource.onerror = () => {
      setIsOpen(false);
      eventSource.close();
    };
    return () => {
      if (eventSource.readyState === 1) {
        eventSource.close();
      } else {
        eventSource.addEventListener("open", () => {
          eventSource.close();
        });
      }
    };
  }, [url]);

  return { event, isOpen };
}
