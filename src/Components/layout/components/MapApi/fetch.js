export const getComments = () => {
  return fetch("https://dummyjson.com/comments").then((res) => res.json());
};
export const getNotifications = () => {
  return fetch("https://dummyjson.com/notifications").then((res) => res.json());
};
