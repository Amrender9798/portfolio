import React from "react";

const Contact = () => {
  return (
    <section className="text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-8">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>
        <div className="flex justify-center">
          <a
            href="amrender9798@gmail.com"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
