'use strict';

(($, c8s) => {
  let confLogin = {
    submit: false,
    rules: {
      username: 'required',
      password: 'required'
    },
    messages: {
      username: 'Nombre de usuario es indispensable',
      password: 'Contraseña es indispensable'
    }
  };

  let components = {
    panel: new c8s.Panel($, '.panel', {
      collapsable: false,
      slidereveal: {
        autoEscape: false,
        top: 0,
        width: '50%',
        push: false,
        //trigger
      }
    }),
    fvLogin: new c8s.FormValidation($, '#form-login', confLogin),
  };
})(jQuery, modules);