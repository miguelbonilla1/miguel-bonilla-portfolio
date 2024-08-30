

const Contact = () => {
  return (
    <div id="contact" className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-24 sm:py-32 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">¡Contáctame!</h2>
        <form action="#" method="POST" className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6">Nombre</label>
              <input type="text" name="name" id="name" autoComplete="name" className="w-full py-2 px-4 mt-1 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6">Correo Electrónico</label>
              <input type="email" name="email" id="email" autoComplete="email" className="w-full py-2 px-4 mt-1 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold leading-6">Mensaje</label>
              <textarea id="message" name="message" rows="4" className="w-full py-2 px-4 mt-1 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"></textarea>
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-900">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
