// Schéma et modèle de l'hôtel
const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    currency: { type: String, required: true, default: "XOF" },
    image: { type: String, required: true },
  });

  const Hotel = mongoose.model('Hotel', UserSchema)

module.exports= Hotel
