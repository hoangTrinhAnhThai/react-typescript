const api = ""
export function get() {
  return fetch(`${api}/user/`, {
    method: 'GET',
  }).then(response => response.json()
  ).catch(error => console.log(error)
  )
}

