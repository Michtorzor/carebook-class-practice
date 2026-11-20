import mongoose from 'mongoose';

export const VISIT_TYPES = ["in_person", "video"];

//Defines a doctor's available time for a specific day of the week.
const availabilitySchema = new mongoose.Schema(
    {
        dayOfWeek: {type: Number, min: 0, max: 6, required: true},
        start: {type: String, required: true},
        end: {type: String, required: true},
    },
    {_id: false}
);

const timeOffSchema = new mongoose.Schema(
    {
        start: {type: String, required: true},
        end: {type: String, required: true},
        reason: {type: String, default: "", trim: true, maxlength: 200},
    },
    {_id: false}
);

const doctorSchema = new mongoose.Schema(
    {
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'user', unique: true, sparse:true},
        name: {type: String, required: true, trim: true},
        specialty: {type: String, required: true, trim: true},
        bio: {type: String, default: '', trim: true},
        fee: {type: Number, required: true, min: 0, default: 5000},

        //where patients see the doctor in person
        location: {type: String, default: '', trim: true, maxlength: 100},
        address: {type: String, default: '', trim: true, maxlength: 200},
        yearsExperience: {type: Number, min: 0, max: 70, default:0},
        qualifications: {type: [{type: String, trim: true, maxlength: 100}], default: []},
        mdcnNumber : {type: String, trim: true, uppercase: true, default: '', select: false},
    }
)

