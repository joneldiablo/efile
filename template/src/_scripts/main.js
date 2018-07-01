// Main javascript entry point
// Should handle bootstrapping/starting application

(($, c8s) => {
  components = {
    panel: new c8s.Panel($, '.panel', {})
  };
})(jQuery, components);
