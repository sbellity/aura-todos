require(['bower_components/aura/lib/aura'], function(Aura) {
  Aura({ 
    debug: { enable: true }
  }).use('extensions/aura-backbones')
    .use('extensions/aura-templates')
    .start()
});