import * as functions from 'firebase-functions';

export const createTopic = functions.firestore.document('topics/{topicId}').onCreate((change, context) => {
  const val = change.data() || {};

  if (context && context.auth && context.auth.uid) { val.createdBy = context.auth.uid; }

  return change.ref.set(val);
});
