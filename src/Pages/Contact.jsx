import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar en localStorage
    const submissions = JSON.parse(
      localStorage.getItem("contactSubmissions") || "[]"
    );
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

    // Log en consola
    console.log("Formulario enviado:", formData);
    console.log("Total de envíos:", submissions.length);

    // Mostrar feedback
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              CONTACTO
            </h1>
            <p className="text-gray-400 text-lg">
              ¿Tienes alguna pregunta? Nos encantaría escucharte
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">
                  INFORMACIÓN DE CONTACTO
                </h2>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="text-amber-400 text-2xl">📍</div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        DIRECCIÓN
                      </h3>
                      <p className="text-gray-400">
                        Calle Urban Style 123
                        <br />
                        28001 Madrid, España
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="text-amber-400 text-2xl">✉️</div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        EMAIL
                      </h3>
                      <p className="text-gray-400">info@urbanthreads.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="text-amber-400 text-2xl">📞</div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        HORARIO
                      </h3>
                      <p className="text-gray-400">
                        Lun - Vie: 9:00 - 18:00
                        <br />
                        Sáb: 10:00 - 14:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">
                  ENVÍANOS UN MENSAJE
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg">
                    <p className="text-green-400 font-semibold">
                      ✓ Mensaje enviado correctamente. Nos pondremos en contacto
                      pronto.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-amber-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors duration-300"
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-amber-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Asunto
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-amber-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors duration-300"
                      placeholder="Asunto del mensaje"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-800 border border-amber-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tu mensaje..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-amber-400 text-gray-900 font-bold rounded-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-105"
                  >
                    ENVIAR MENSAJE
                  </button>
                </form>

                <p className="text-gray-500 text-sm mt-4">
                  Demo: Este es un formulario de demostración. Los mensajes se
                  guardarán en localStorage y se mostrarán en la consola.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
