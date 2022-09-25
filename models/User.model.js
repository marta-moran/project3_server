const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    age: { type: Number },
    gender: { type: String },
    picture: { type: String },
    description: { type: String },
    preferences: [{ type: String }],
    matches: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    /*
    Matches son las personas a las que has dado like y ellas a ti. Habría que hacer 
    otro campo que sean las personas a las que tú has dado like? 
    Cómo se podrá comparar esto?
    */
    location: { type: { type: String }, coordinates: [Number] }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

userSchema.index({ location: '2dsphere' });


const User = model("User", userSchema);

module.exports = User;
