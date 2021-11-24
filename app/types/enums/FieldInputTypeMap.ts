/** For all intents and purposes, this is a Map that is actually an Enum
 * type. This is because attempting to access Enum values in this case feels
 * really frustrating. TODO Perhaps I will refactor this soon.
 *
 * @author he-james
 */
const FieldInputTypeMap: Map<string, string> = new Map([
  ['SHORT_ANSWER', 'text'],
  ['LONG_ANSWER', 'textarea'],
  ['SCALE', 'text'],
  ['RANK', 'rank'],
  ['SELECTION', 'select'],
  ['MULTIPLE_SELECTION', 'checkbox'],
  ['DROPDOWN', 'select'],
  ['DATE', 'date'],
  ['EMAIL', 'email'],
  ['TELEPHONE', 'tel'],
  ['SECURE_INPUT', 'password'],
  ['POSTAL_CODE', 'text'],
]);

export default FieldInputTypeMap;
