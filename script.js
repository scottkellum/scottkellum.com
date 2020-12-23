const photos = [
  ['<a href="https://anamonroe.com/" target="_blank">Ana Monroe</a>','/profile.jpg'],
  ['<a href="https://tatebot.com/" target="_blank">Tate-Stefan Tozer</a>','/profile2.jpg']
];
const photo = photos[Math.floor(Math.random() * photos.length)];

document.getElementById('photoLink').innerHTML = photo[0];
document.getElementById('photo').setAttribute('src', photo[1]);
