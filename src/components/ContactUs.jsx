import { useState } from 'react';

const places = {
  Trivandrum: "Address line 1...",
  Alappuzha: "Address line 2...",
  Kozhikode: "Address line 3...",
};

export default function ContactUs() {
  const [selected, setSelected] = useState('');

  return (
    <section id="contact" className="bg-black py-20 text-white">
      <div className="max-w-4xl mx-auto px-4">

        <select
          className="w-full bg-yellow-400 text-black p-3 mb-6"
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">Select Place</option>
          {Object.keys(places).map(place => (
            <option key={place} value={place}>{place}</option>
          ))}
        </select>

        {selected && (
          <div className="bg-gray-800 p-6 rounded">
            {places[selected]}
          </div>
        )}
      </div>
    </section>
  );
}
