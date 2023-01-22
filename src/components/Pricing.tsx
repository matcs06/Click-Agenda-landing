import React from 'react';

import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { items, title } = pricing;
  const [firstPlan, secondPlan, thirdPlan] = items;

  const handleSimplePlan = (type: 'test' | 'basic' | 'pro') => {
    let wppmessage;
    if (type === 'basic') {
      wppmessage =
        'https://api.whatsapp.com/send/?phone=5511959842539&text=Tenho interesse no plano padrão de 49,99 R$';
    }

    if (type === 'test') {
      wppmessage =
        'https://api.whatsapp.com/send/?phone=5511959842539&text=Olá, quero fazer um teste gratuito de 15 dias';
    }

    if (type === 'pro') {
      wppmessage =
        'https://api.whatsapp.com/send/?phone=5511959842539&text=Olá, tenho interesse no plano PRO de 99,99 R$';
    }

    window.open(wppmessage);
  };

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        <div
          className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4`}
        >
          <div
            className={`flex flex-col w-5/6 lg:w-1/4  mx-auto cursor-pointer lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`}
            onClick={() => handleSimplePlan('test')}
          >
            <div
              className={`flex-1 bg-background text-gray-600 hover:text-gray-900  rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div
                className={`p-8 text-3xl font-bold text-center hover:text-gray-900  border-b-4 `}
              >
                {firstPlan?.name}
              </div>
              <ul
                className={`w-full text-center text-sm hover:text-gray-900  `}
              >
                {firstPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${firstPlan.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b hover:text-gray-900 rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center hover:text-gray-900 `}
              >
                {firstPlan?.price}
                <span className={`text-base`}> {firstPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg cursor-pointer bg-background mt-4 sm:-mt-6 shadow-lg z-10`}
            onClick={() => handleSimplePlan('basic')}
          >
            <div
              className={`flex-1 bg-background text-gray-600 hover:text-gray-900 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`w-full p-8 text-3xl font-bold text-center`}>
                {secondPlan?.name}
              </div>
              <div
                className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}
              ></div>
              <ul className={`w-full text-center text-base font-bold`}>
                {secondPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${secondPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl hover:text-gray-900  text-gray-600 font-bold text-center`}
              >
                {secondPlan?.price}
                <span className={`text-base`}> {secondPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4 cursor-pointer`}
            onClick={() => handleSimplePlan('pro')}
          >
            <div
              className={`flex-1 bg-background text-gray-600 hover:text-gray-900 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div
                className={`p-8 text-3xl font-bold text-center border-b-4 hover:text-gray-900 `}
              >
                {thirdPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm hover:text-gray-900 `}>
                {thirdPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${thirdPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto hover:text-gray-900  bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl hover:text-gray-900  text-gray-600 font-bold text-center`}
              >
                {thirdPlan?.price}
                <span className={`text-base`}> {thirdPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
