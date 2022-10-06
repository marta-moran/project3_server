const { Schema, model } = require("mongoose");

const matchSchema = new Schema(
    {
        users: [{ type: Schema.Types.ObjectId, ref: 'users' }],
        messages: [{
            owner: { type: Schema.Types.ObjectId, ref: 'users' },
            text: { type: String }
        }] // owner ( extra: createdAt default) 
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const Match = model("matches", matchSchema);

module.exports = Match;
