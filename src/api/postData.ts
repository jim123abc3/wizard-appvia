type postProps = {
  username: string;
  description: string;
  features: string[]
}

export default function postData(fields: postProps) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fields);
    }, 1500);
  });
}