import React from "react";

const Resume = ({theme}) => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 dark:text-white sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 dark:text-white font-medium w-[100%]">
          Mi experiencia y mi educación.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
  {/* Experiencia */}
  <div className="left flex-1 flex items-start justify-center relative">
    {/* Barra vertical que cubre ambas tarjetas */}
    <div className="absolute left-16 top-12 bottom-4 flex flex-col items-center z-0 w-8">
      <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-sky-500"></div>
      <div className="line flex-1 w-[2px] bg-gray-300"></div>
      <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-sky-500"></div>
    </div>
    <fieldset
      data-aos="zoom-in"
      className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2 z-10 flex flex-col gap-4"
    >
      <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-sky-500">
        Experiencia
      </legend>
      {/* Tarjeta 1 */}
      <div className="flex flex-col gap-1 sm:gap-1 border-2 border-sky-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg ml-8">
        <h1 className="text-[1.4rem] dark:text-sky-500 font-semibold sm:text-xl">
          Full Stack Developer
        </h1>
        <span className="text-[.9rem] dark:text-slate-200 font-semibold text-gray-500 sm:text-base">
          Acudir Emergencias Medicas S.A
        </span>
        <span className="text-[.9rem] font-semibold text-sky-500 sm:text-base">
          Enero 2023 - Enero 2024
        </span>
        <ul className="list-disc pl-5 text-[.9rem] break-words text-gray-500 dark:text-slate-200">
          <li>Diseño y desarrollo de una aplicación de video consultas médicas en entorno remoto, orientada a mejorar la comunicación entre pacientes y profesionales de la salud.</li>
          <li>Desarrollo full stack utilizando .NET (back-end), SQL Server (base de datos) y React.js (front-end), garantizando escalabilidad, seguridad y un rendimiento óptimo.</li>
          <li>Implementación de módulos clave: gestión de usuarios y pacientes, turnos online, autenticación segura y notificaciones en tiempo real.</li>
          <li>Integración de la capa de datos con SQL Server, optimizando la persistencia, consultas y rendimiento del sistema.</li>
          <li>Creación de interfaces dinámicas y responsivas con React.js, enfocadas en usabilidad y accesibilidad.</li>
        </ul>
      </div>
      {/* Tarjeta 2 */}
      <div className="flex flex-col gap-1 sm:gap-1 border-2 border-sky-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg mt-4 ml-8">
        <h1 className="text-[1.4rem] dark:text-sky-500 font-semibold sm:text-xl">
          Full Stack Developer
        </h1>
        <span className="text-[.9rem] dark:text-slate-200 font-semibold text-gray-500 sm:text-base">
          Desarrollo Freelance
        </span>
        <span className="text-[.9rem] font-semibold text-sky-500 sm:text-base">
          Mayo 2022 - Actual
        </span>
        <ul className="list-disc pl-5 text-[.9rem] break-words text-gray-500 dark:text-slate-200">
          <li>Desarrollo de aplicaciones junto a un equipo de trabajo freelance.</li>
          <li>Participación en todas las etapas: análisis, diseño, programación y pruebas.</li>
          <li>Uso de tecnologías como React.js, Node.js, .Net, y herramientas de control de versiones como Git.</li>
          <li>Comunicación con clientes para definir requerimientos y entregar soluciones a medida.</li>
          <li>Implementación de metodologías ágiles (Scrum) para organizar el trabajo en equipo y mejorar la productividad.</li>
          <li>Colaboración bajo metodologías ágiles (Scrum), participando en la definición de requisitos, estimaciones de esfuerzo y revisión de entregables.</li>
          <li>Contribución directa a la digitalización de procesos internos y a la mejora en la calidad de la atención médica remota.</li>
        </ul>
      </div>
    </fieldset>
  </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-sky-500">
              Educación
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-210px] top-1/2 items-center rotate-[90deg] sm:left-[-210px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-sky-500"></div>
                <div className="line w-[350px] bg-gray-300 h-[2px] sm:w-[350px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-sky-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-sky-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] dark:text-sky-500 font-semibold sm:text-xl">
                  Universidad Nacional De La Plata
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 dark:text-slate-200 sm:text-base">
                  Licenciatura en Sistemas
                </span>
                <span className=" text-[.9rem] font-semibold text-sky-500 sm:text-base">
                  2024 - Actual
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
              
                </p>
              </div>
              <div className=" flex flex-col gap-1 border-2 mt-5 border-sky-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] dark:text-sky-500 font-semibold sm:text-xl">
                  Udemy
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 dark:text-slate-200 sm:text-base">
                  Programación
                </span>
                <span className=" text-[.9rem] font-semibold text-sky-500 sm:text-base">
                  2022 - Actual
                </span>
                <p className=" text-[.9rem] dark:text-slate-200 text-justify text-gray-500">
                Desarrollo web completo - CSS3 | HTML5 | JavaScript| SASS | PHP | MySQL.
                </p>
                <p className=" dark:text-slate-200 text-[.9rem] text-justify text-gray-500">
                React - MERN.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
