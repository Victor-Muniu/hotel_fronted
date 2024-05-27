import React, { useState } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';

function Off() {
  const [offDays, setOffDays] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [personName, setPersonName] = useState("");

  const handleDateSelect = (selectInfo) => {
    setSelectedDate(selectInfo);
    setSelectedEvent(null);
    setOpen(true);
  };

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPersonName("");
    setSelectedDate(null);
    setSelectedEvent(null);
  };

  const handleSave = () => {
    let calendarApi = selectedDate.view.calendar;
    calendarApi.unselect(); // clear date selection

    const newOffDay = {
      title: `Off Day: ${personName}`,
      start: selectedDate.startStr,
      end: selectedDate.endStr,
      allDay: selectedDate.allDay
    };

    setOffDays([...offDays, newOffDay]);
    handleClose();
  };

  const handleDelete = () => {
    selectedEvent.remove();
    handleClose();
  };

  return (
    <Box width='100%'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        headerToolbar={{
          start: "today prev,next", 
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", 
        }}
        height={"90vh"}
        events={offDays}
        select={handleDateSelect}
        eventClick={handleEventClick}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {selectedEvent ? "Remove Off Day" : "Enter Person's Name"}
        </DialogTitle>
        <DialogContent>
          {!selectedEvent && (
            <TextField
              autoFocus
              margin="dense"
              label="Person's Name"
              type="text"
              fullWidth
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {selectedEvent ? (
            <Button onClick={handleDelete} color="primary">
              Delete
            </Button>
          ) : (
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Off;
