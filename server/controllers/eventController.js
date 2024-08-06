import { Event } from "../models/event.js"



export default class EventHandler {

    // Get all events
    static async getAllEvents(req, res) {
        try {
          const events = await Event.find();
          res.json(events);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      };

    // Create a new event
    static async createEvent(req, res) {
        const event = new Event({
        picture: req.body.picture,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        isMain: req.body.isMain || false,
        });
    
        try {
        if (event.isMain) {
            await Event.updateMany({ isMain: true }, { isMain: false });
        }
        const newEvent = await event.save();
        res.status(201).json(newEvent);
        } catch (err) {
        res.status(400).json({ message: err.message });
        }
  };

  // Get event by ID
    static async getEventById(req, res){
        try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.json(event);
        } catch (err) {
        res.status(500).json({ message: err.message });
        }
  };

  // Update event by ID
    static async updateEvent (req, res){
        try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!event) return res.status(404).json({ message: 'Event not found' });
    
        if (event.isMain) {
            await Event.updateMany({ isMain: true, _id: { $ne: event._id } }, { isMain: false });
        }
    
        res.json(event);
        } catch (err) {
        res.status(400).json({ message: err.message });
        }
  };

  // Delete event by ID
    static async deleteEvent(req, res){
        try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.json({ message: 'Event deleted' });
        } catch (err) {
        res.status(500).json({ message: err.message });
        }
  };
}

