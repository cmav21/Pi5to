
const photos = [
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a53f6ccb2fccd80ae7f6c6af8f289319&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c61d76abcdd6b0f7ef174e0da66a18d&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1fd72b80aa0b43f74015163c2ad6fcc5&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-0.3.5&s=8156fe1c6504a66043fa9e7ea152826b&auto=format&fit=crop&w=541&q=80",
  "https://images.unsplash.com/photo-1529007196863-d07650a3f0ea?ixlib=rb-0.3.5&s=0c449dde64a85448546690f69e9acc5e&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1528932574509-27a7e195a75b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e785a0c88621640a44c283768e332802&auto=format&fit=crop&w=667&q=80",
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42a10871f610c84a108afd8c3750fbae&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7491eb281478f3b97661bae38cbcb34b&auto=format&fit=crop&w=751&q=80",
  "https://images.unsplash.com/photo-1508107536691-b1449928187d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eb4687c19c5233357a72cc7948eb63f0&auto=format&fit=crop&w=500&q=60"
];

export default function () {
  return photos[Math.floor(Math.random() * photos.length)];
}