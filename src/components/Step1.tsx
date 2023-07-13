import { Form, Input } from "antd";

type UserData = {
  username: string;
  description: string;
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
}

const StepOne = ({username, description, updateFields}: UserFormProps) => {

  return (
    <div className='content'>
      <h3>User Details:</h3>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Maximum of 63 chars only!', max: 63 }]}
      >
        <Input value={username} onChange={e => updateFields({ username: e.target.value })} />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Write description!' }]}
      >
        <Input.TextArea value={description} onChange={e => updateFields({ description: e.target.value })} />
      </Form.Item>
    </div>
  )
};

export default StepOne;