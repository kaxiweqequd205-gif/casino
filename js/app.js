const s=[...document.querySelectorAll('.slide')],d=[...document.querySelectorAll('.dot')];let i=0;
const show=n=>{i=(n+s.length)%s.length;s.forEach((x,k)=>x.classList.toggle('on',k===i));d.forEach((x,k)=>x.classList.toggle('on',k===i));};
d.forEach((x,k)=>x.onclick=()=>show(k));
document.querySelector('.prev').onclick=()=>show(i-1);
document.querySelector('.next').onclick=()=>show(i+1);
setInterval(()=>show(i+1),6000);
