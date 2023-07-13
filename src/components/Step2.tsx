import { Checkbox, Form } from "antd";

type Features = {
  features: string[],
}

type FeaturesFormProps = Features & {
  updateFields: (fields: Partial<Features>) => void;
}

const options = [
  { name: 'Feature1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum for Feature 1', value: 'Feature1' },
  { name: 'Feature2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum for Feature 2', value: 'Feature2' },
  { name: 'Feature3', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum for Feature 3', value: 'Feature3' },
];

const StepTwo = ({features, updateFields}: FeaturesFormProps) => {
  return (
    <>
      <div className='checkbox-container'>
      <h3>Select Options:</h3>
        <Form.Item>
          <Checkbox.Group value={features} onChange={(values => updateFields({features: values as string[]}))}>
            {options.map((option: any) => (
              <Checkbox key={option.value} value={option.value}>
                <div className='checkbox-text'>
                  <strong>{option.name}</strong>
                  <br />
                  <span>{option.description}</span>
                </div>
              </Checkbox>
            ))}
          </Checkbox.Group>
        </Form.Item>
      </div>
    </>
  );
};


export default StepTwo;