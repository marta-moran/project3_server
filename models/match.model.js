const { Schema, model } = require("mongoose");

const matchSchema = new Schema(
    {
        users: [{ type: Schema.Types.ObjectId, ref: 'users' }],
        messages: [{ type: String }]
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const Match = model("matches", matchSchema);

module.exports = Match;
