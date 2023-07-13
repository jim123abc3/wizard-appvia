import { Form } from "antd";

type SummaryData = {
  username: string;
  description: string;
  features: string[];
}

const StepThree = ({ username, description, features }: SummaryData) => {
  return (
    <Form.Item>
      <div>
        <h3>Summary:</h3>
        <p>Name: <strong>{username}</strong></p>
        <p>Description: <strong>{description}</strong></p>
        <p>Selected Features: <strong>{features.join(', ')}</strong></p>
      </div>
    </Form.Item>
  )
}

export default StepThree;