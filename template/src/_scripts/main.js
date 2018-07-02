// Main javascript entry point
// Should handle bootstrapping/starting application

(($, c8s) => {
  components = {
    panel: new c8s.Panel($, '.panel', {
      collapsable: false,
      slidereveal: {
        autoEscape: false,
        top: 0,
        width: 162,
        push: true,
        //trigger
      }
    })
  };
})(jQuery, components);
