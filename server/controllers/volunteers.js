import { Volunteer } from "../models/volunteers";



export default class VolunteerController {
    static async AddVolunteer(req, res) {
        const {first_name, last_name, email} = req.body
        let volunteer = await findOne({ email });
        if (volunteer) {
            return res.status(400).json({status: false, message: `volunteer with email ${email} exists`});
        }

        volunteer = Volunteer({
            first_name,
            last_name,
            email
        })
        await volunteer.save()
        return res.status(200).json({status: true, message: `volunteer created with email ${email}`});
    }

    // static async
}