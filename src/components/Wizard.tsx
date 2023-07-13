import { Button, Form, Steps, message } from 'antd';
import { useState } from 'react';
import validateFields from '../api/validateFields';
import { FormValues } from '../App';
import postData from '../api/postData';

type WizardStep = {
  title: string;
  content: React.ReactElement;
}

type WizardProps = {
  steps: WizardStep[];
  dataFields: FormValues
}

const Wizard = ({ steps, dataFields }: WizardProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const isLastStep = currentStep === steps.length - 1;

  const onFinish = async (values: FormValues) => {
    setIsLoading(true);
    if (!isLastStep) {
      await validateFields(values);
      next();
    }

    if (isLastStep) {
      await postData(dataFields);
      message.success('Details Submitted!')
    }
    setIsLoading(false);
  };

  const next = () => setCurrentStep(currentStep + 1);

  const prev = () => setCurrentStep(currentStep - 1);

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
      <Steps current={currentStep} items={items} />
      <Form
        name="wizard"
        labelCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div className='content-container'>
          {steps[currentStep].content}
        </div>

        <div className='buttons-container'>
          <Button loading={isLoading} disabled={isLoading} type="primary" htmlType='submit'>
            {isLastStep ? 'Submit' : 'Next'}
          </Button>
          {currentStep > 0 && (
            <Button style={{ margin: '0 8px' }} disabled={isLoading} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </Form>
    </>
  );
};

export default Wizard;