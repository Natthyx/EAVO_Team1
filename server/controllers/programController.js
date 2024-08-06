import { Program } from "../models/program.js";


export default class ProgramHandler {

    // Get all programs
    static async getAllPrograms (req, res) {
        try {
            const programs = await Program.find();
            res.json(programs);
          } catch (err) {
            res.status(500).json({ message: err.message });
          }
    }

    // Create a new program
    static async createProgram(req, res) {
        const program = new Program({
            picture: req.body.picture,
            title: req.body.title,
            description: req.body.description
          });
        
          try {
            const newProgram = await program.save();
            res.status(201).json(newProgram);
          } catch (err) {
            res.status(400).json({ message: err.message });
          }
    }

    // Get program by ID
    static async getProgramById(req, res) {
        try {
            const program = await Program.findById(req.params.id);
            if (!program) return res.status(404).json({ message: 'Program not found' });
            res.json(program);
          } catch (err) {
            res.status(500).json({ message: err.message });
          }
    }

    // Update program by ID
    static async updateProgram(req, res) {
        try {
            const program = await Program.findByIdAndUpdate(req.params.id, req.body, {
              new: true
            });
            if (!program) return res.status(404).json({ message: 'Program not found' });
            res.json(program);
          } catch (err) {
            res.status(400).json({ message: err.message });
          }
    }

    // Delete program by ID
    static async deleteProgram(req, res) {
        try {
            const program = await Program.findByIdAndDelete(req.params.id);
            if (!program) return res.status(404).json({ message: 'Program not found' });
            res.json({ message: 'Program deleted' });
          } catch (err) {
            res.status(500).json({ message: err.message });
          }
    }
}
