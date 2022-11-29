// import { storage } from './firebase';
// import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
// // import { v4 } from 'uuid';

// export const UploadProfileImage = (image) => {
//   const imageRef = ref(storage, `imageprofile/${image.name + Date.now()}`);
//   return uploadBytes(imageRef, image).then((snapshot) => {
//     return getDownloadURL(snapshot.ref);
//   });
// };
