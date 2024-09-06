import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // Para manejar el estado del envío

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        alert('Correo enviado exitosamente.');
        setFormState({ name: '', email: '', message: '' }); // Limpiar el formulario
      } else {
        setStatus('error');
        alert('Error al enviar el correo.');
      }
    } catch (error) {
      setStatus('error');
      alert('Ocurrió un error al enviar el mensaje.');
    }
  };

  return (
    <div id="contact" className="min-h-[90vh] bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-24  px-6 sm:px-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-10">
        {/* Sección de Motivación */}
        <div className="text-center lg:text-left space-y-4">
          <h2 className="text-4xl font-bold mb-4">Lets talk about your next project!</h2>

          <p className="text-lg font-bold"></p>
        </div>

        {/* Sección del Formulario */}
        <form onSubmit={handleSubmit} className="rounded-lg shadow-lg">

          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder='Escribe tu nombre'
                autoComplete="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full py-2 px-4 mt-1 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder='email'
                autoComplete="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full py-2 px-4 mt-1 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold leading-6">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formState.message}
                onChange={handleChange}
                placeholder='Dejame un mensaje'
                className="w-full py-2 px-4 mt-1 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              ></textarea>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-indigo-700 text-white font-semibold rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
