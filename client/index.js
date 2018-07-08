const query = `
{
  candidate {
    name
    age
    job {
      id
      name
    }
  }
}`;

fetch('http://localhost:4000/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query })
})
  .then(res => res.json())
  .then(res => {
    document.getElementById('app').innerText = JSON.stringify(
      res.data,
      null,
      2
    );
  });
