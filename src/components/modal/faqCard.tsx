/* eslint-disable @typescript-eslint/no-explicit-any */
import { closeIcon } from '../../assets';
import TextInput from '../Input/TextInput';
import TextArea from '../Input/TextArea';
import IconWrap from '../ui/svgWrapper';
import { useFormik } from 'formik';
import { faqFormSchema } from './modal.schema';
import {
  useCreateFaqMutation,
  useEditFaqMutation,
  useGetOneFaqQuery,
} from '../../redux/api/faq';
import { toast } from 'react-toastify';
import ButtonLoader from '../button/buttonLoader';
import { useEffect } from 'react';

interface IFaqData {
  question: string;
  answer: string;
}

const initialFaq = {
  question: '',
  answer: '',
};

const FaqCard = ({ close, id }: { close: () => void; id?: string }) => {
  const [createFaq, { isLoading }] = useCreateFaqMutation();
  const [editFaq, { isLoading: editing }] = useEditFaqMutation();
  const { data: faq } = useGetOneFaqQuery(id as string, {
    skip: id === undefined,
  });
  const formik = useFormik<IFaqData>({
    initialValues: initialFaq,
    validationSchema: faqFormSchema,
    enableReinitialize: true,
    onSubmit: () => {
      onSubmit();
    },
  });

  const {
    values,
    errors,
    handleChange,
    resetForm,
    handleBlur,
    touched,
    handleSubmit,
    setFieldValue,
  } = formik;

  const onSubmit = async () => {
    try {
      if (id) {
        await editFaq({ id: id, data: values });
        toast.success('Faq updated successfully');
      } else {
        await createFaq(values).unwrap();
        toast.success('Faq added successfully');
      }
      close();
      resetForm();
    } catch (error: any) {
      toast.error(error.error);
    }
  };

  useEffect(() => {
    setFieldValue('question', faq?.data?.question);
    setFieldValue('answer', faq?.data?.answer);
  }, [faq]);

  return (
    <div className="w-[500px] min-h-[480px]  p-8 rounded-[12px] bg-white ">
      <div className="flex items-center mb-4 justify-between">
        <h2 className="text-[18px] font-montserrat pb-3 font-semibold">
          FAQ Details
        </h2>
        <IconWrap src={closeIcon} style="cursor-pointer" close={close} />
      </div>
      <form
        className="flex flex-col  overflow-y-auto items-center w-full"
        onSubmit={handleSubmit}
      >
        <TextInput
          error={errors.question ?? ''}
          touched={touched.question}
          name="question"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.question}
          label="Question"
          placeholder="Enter question"
        />
        <TextArea
          error={errors.answer ?? ''}
          value={values.answer}
          name="answer"
          touched={touched.answer}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Answer"
          placeholder="Enter Answer"
        />
        {isLoading || editing ? (
          <button className="text-white bg-[#32C87D] w-full flex items-center justify-center mx-auto py-3 mb-2 mt-5 rounded-md">
            <ButtonLoader />
          </button>
        ) : (
          <button className="text-white bg-[#32C87D] w-full flex items-center justify-center mx-auto py-3 mb-2 mt-5 rounded-md">
            {id ? 'Save Changes' : 'Save FAQ'}
          </button>
        )}
      </form>
    </div>
  );
};

export default FaqCard;
