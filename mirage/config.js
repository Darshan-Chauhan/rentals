export default function() {
  this.get('/user', () => {
    return { name: 'Luke', password: 'skywalker' };
  });
}