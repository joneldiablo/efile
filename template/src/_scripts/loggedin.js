'use strict';

(($, c8s) => {
  let components = {
    panel: new c8s.Panel($, '.panel', {
      collapsable: false,
      slidereveal: {
        autoEscape: false,
        top: 0,
        width: 162,
        push: false,
        //trigger
      }
    })
  };
})(jQuery, modules);