function testSwitch(size) {
  switch(size) {
    case 'small':
      console.log('Too small!');
      break;
    case 'medium':
      console.log('Just right!');
      break
    case 'large':
      console.log('Too big!');
      break
    default:
      console.log('Unknown!');
  }
}