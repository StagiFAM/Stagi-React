import React, { useState } from 'react'
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,    
  formatDate,
} from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useDisclosure } from '../../hooks/useDiscloure'
import { IEventCalendar } from '../../domain/EventCalendar'
import { updateEventCalendar } from '../../services/eventCalendarApi'

import { toast } from "react-toastify";
import { ModalInfosEventCalendar } from './ModalInfosEventCalendar'

type CalendarSchedulerProps = {
  eventsCalendar: IEventCalendar[];
}

export default function Scheduler({eventsCalendar}: CalendarSchedulerProps) {
  const [eventInfos, setEventInfos] = useState();
  const [isEditCard, setIsEditCard] = useState<boolean>(false);

  const weekends = {
    weekendsVisible: true,
    currentEvents: [],
  };

  const modalInfosEvent = useDisclosure(false);

  const handleAddEventSelectAndOpenModal = (selectInfo: any) => {
    setIsEditCard(false);
    setEventInfos(selectInfo);
    modalInfosEvent.handleOpen();
  }

  const handleEditEventSelectAndOpenModal = (clickInfo: any) => {
    setIsEditCard(true);
    setEventInfos(clickInfo);
    modalInfosEvent.handleOpen();
  };

  const handleUpdateEventSelect = async (changeInfo: any) => {
    try {
      const eventCalendarUpdated = {
        eventCalendar: {
          _id: changeInfo.event.id,
          title: changeInfo.event.title,
          start: changeInfo.event.startStr,
          end: changeInfo.event.endStr,
          backgroundColor: changeInfo.event.backgroundColor,
          textColor: changeInfo.event.textColor,
        },
      };

      await updateEventCalendar(eventCalendarUpdated);
    } catch (err) {
      toast.error('Houve um erro ao atualizar o evento');
    }
  };
 
    return (
      <div className='demo-app'>
        <div className='demo-app-main'>
        <ModalInfosEventCalendar
        open={modalInfosEvent.isOpen}
        handleClose={modalInfosEvent.handleClose}
        eventInfos={eventInfos}
        isEditCard={isEditCard}
      />
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            locale="pt-br"
            weekends={weekends.weekendsVisible}
            select={handleAddEventSelectAndOpenModal}
            eventClick={handleEditEventSelectAndOpenModal}
            eventChange={handleUpdateEventSelect}
            initialEvents={eventsCalendar}
            initialView='timeGridDay'
            height="700px"
            longPressDelay={1000}
            eventLongPressDelay={1000}
            selectLongPressDelay={1000}
            editable={true}
            allDaySlot={false}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            buttonText={{
              today: "Hoje",
              month: "Mês",
              week: "Semana",
              day: "Dia",
              list: "Lista",
            }}
          />
        </div>
      </div>
    )
  }