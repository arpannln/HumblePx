export const fetchUser = username => (
  $.ajax({
    method: 'GET',
    url: `api/users/${username}`
  })
);

export const fetchUsers = () => (
  $.ajax({
    method: 'GET',
    url: `api/users`
  })
);
