type ValidateFieldsProps = {
  username: string;
  description: string;
}

export default function validateFields(fields: ValidateFieldsProps) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fields);
    }, 1500);
  });
}