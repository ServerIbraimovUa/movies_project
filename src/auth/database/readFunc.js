import { child, getDatabase, ref, get } from 'firebase/database';

export function readUserData(userId) {
  const dbRef = ref(getDatabase());
  console.log(userId);
  return get(child(dbRef, `users/${userId}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
}
