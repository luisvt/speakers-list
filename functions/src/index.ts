// import * as functions from 'firebase-functions';
//
// export const createTopic = functions.firestore.document('topics/{topicId}').onCreate((snap, context) => {
//   const val = snap.data() || {};
//
//   console.log('context.auth: ', context.auth);
//
//   if (context && context.auth && context.auth.uid) { val.createdBy = context.auth.uid; }
//
//   console.log('val: ', val);
//   return snap.ref.set(val);
// });
