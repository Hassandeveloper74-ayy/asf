(function(){
var els=document.querySelectorAll('.rv');
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('on')});return}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.12});
els.forEach(function(e,i){e.style.transitionDelay=(i%4)*70+'ms';io.observe(e)});
})();

(function(){var f=document.getElementById('inquiry');if(!f)return;
var CONTACT_EMAIL='contact.zynocta@gmail.com';
var s=new URLSearchParams(location.search).get('service');if(s&&f.service)f.service.value=s;
f.addEventListener('submit',function(ev){ev.preventDefault();var n=f.querySelector('.note');
if(!f.checkValidity()){n.textContent='Please fill in your name, a valid email and a short message.';return}
var sv=f.service.options[f.service.selectedIndex].text;
location.href='mailto:'+CONTACT_EMAIL+'?subject='+encodeURIComponent('Project inquiry: '+sv)+'&body='+encodeURIComponent('Name: '+f.name.value+'\nEmail: '+f.email.value+'\n\n'+f.message.value);
n.textContent='Opening your email app...'})})();
