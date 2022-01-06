/* eslint-disable */
const functions = require('firebase-functions');

exports.sanitizeData = functions.firestore
  .document('Users/{userId}/items/{docId}')
  .onWrite((change, context) => {
    // Get an object with the current document value.
    // If the document does not exist, it has been deleted.
    const document = change.after.exists ? change.after.data() : null;

    if (!document) return true;

    // Get an object with the previous document value (for update or delete)
    const newDocument = change.after.data();
    const newValue = newDocument.value;

    const trimmedValue = newValue.replace(/\s{2,}/, ' ').trim();

    const sanitizedValue =
      trimmedValue.charAt(0).toUpperCase() + trimmedValue.substr(1);

    return change.after.ref.set({
      value: sanitizedValue,
    });
  });
