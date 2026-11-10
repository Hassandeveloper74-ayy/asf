/* One-time, conservative capability adaptation. No benchmarking or polling. */
(function(){
  var root=document.documentElement, nav=window.navigator||{};
  var reduced=!!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var coarse=!!(window.matchMedia&&window.matchMedia('(hover: none) and (pointer: coarse)').matches);
  var saveData=!!(nav.connection&&nav.connection.saveData);
  var memory=Number(nav.deviceMemory||0), cores=Number(nav.hardwareConcurrency||0);
  var low=saveData||(memory>0&&memory<=2)||(cores>0&&cores<=2);
  var high=!low&&!coarse&&memory>=8&&cores>=8;
  var standard=!low&&!high;
  root.classList.add(low?'zx-profile-low':high?'zx-profile-high':'zx-profile-standard');
  if(coarse)root.classList.add('zx-touch');
  if(/Android/i.test(nav.userAgent||''))root.classList.add('zx-android');
  if(reduced)root.classList.add('zx-reduced-motion');
  /* Native lazy loading is preferred; only defer non-critical images lacking an explicit policy. */
  if('loading' in HTMLImageElement.prototype){
    var imgs=document.images;
    for(var i=0;i<imgs.length;i++){
      var img=imgs[i];
      if(!img.hasAttribute('loading')&&i>2&&!img.closest('picture[data-critical]'))img.loading='lazy';
      if(img.loading==='lazy'&&!img.hasAttribute('decoding'))img.decoding='async';
    }
  }
})();
