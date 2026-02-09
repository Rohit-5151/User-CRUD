export const userSchema = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
    pattern: /^[A-Za-z ]+$/
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
    pattern: /^[A-Za-z ]+$/
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: true,
    pattern: /^[0-9]{10}$/
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true
  },
  {
  name: "dob",
  label: "Date of Birth",
  type: "date",
  required: false
  }
];
