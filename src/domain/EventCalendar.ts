export interface IEventCalendar {
    _id: string;
    id?: string;
    title: string;
    end: string;
    start: string;
    user: string;
  }
  
  export const mapEventCalendar = (eventCalendar: IEventCalendar) => ({
    ...eventCalendar,
    id: eventCalendar?._id,
  });
  
  export const mapArrayEventCalendar = (listEventsCalendar: IEventCalendar[] | undefined) => {
    if (!Array.isArray(listEventsCalendar)) {
      console.error('A lista de eventos não é um array!');
      return [];
    }
  
    if (listEventsCalendar.length === 0) {
      console.error('A lista de eventos está vazia!');
      return [];
    }
  
    const listEventsCalendarFormated = listEventsCalendar.map((eventCalendar) => mapEventCalendar(eventCalendar));
  
    return listEventsCalendarFormated;
  };
  