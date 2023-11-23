/* eslint-disable @typescript-eslint/no-explicit-any */
import IconWrap from '../ui/svgWrapper';
import { closeIcon } from '../../assets';
import TextInput from '../Input/TextInput';
import UploadFile from '../Input/uploadFile';
import { useCallback, useState } from 'react';
import { useFormik } from 'formik';
import { campaignFormSchema } from './modal.schema';
import { toast } from 'react-toastify';
import { useAddCampaignMutation } from '../../redux/api/campaign';
import ButtonLoader from '../button/buttonLoader';

interface IProps extends ICampaign {
  close: () => void;
}

const CampaignCard = ({
  close,
  title = '',
  cta_title = '',
  cta_url = '',
  ends_at = '',
  starts_at = '',
}: IProps) => {
  const [imageUrl, setImageUrl] = useState<{
    url: string;
    base64: string | ArrayBuffer | null;
  }>({ url: '', base64: null });

  const [addCampaign, { isLoading }] = useAddCampaignMutation();

  const formik = useFormik<ICampaignForm>({
    initialValues: {
      title,
      cta_title,
      cta_url,
      ends_at,
      starts_at,
    },
    validationSchema: campaignFormSchema,
    onSubmit: () => {
      onSubmitForm();
    },
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const objectURL = URL.createObjectURL(acceptedFiles[0]);
    const reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onload = () => {
      const img = (reader.result as string)?.split(',')[1];
      console.log(img);
      setImageUrl({ url: objectURL, base64: img });
    };
    reader.onerror = function (error: any) {
      toast.error(error);
    };
  }, []);

  const {
    values,
    errors,
    handleChange,
    resetForm,
    handleBlur,
    touched,
    handleSubmit,
  } = formik;

  const onSubmitForm = async () => {
    console.log(values, imageUrl);
    values['base64_image_string'] = imageUrl.base64;
    try {
      await addCampaign(values).unwrap();
      toast.success('Campaign added successfully');
      close();
      resetForm();
    } catch (error: any) {
      toast.error(error.error);
    }
  };

  return (
    <div className="w-[500px] h-[550px]  p-8 rounded-[12px] bg-white ">
      <div className="flex items-center mb-4 justify-between">
        <h2 className="text-[18px] font-montserrat pb-3 font-semibold">
          Campaign Details
        </h2>
        <IconWrap src={closeIcon} style="cursor-pointer" close={close} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col h-[450px] overflow-y-auto items-center w-full"
      >
        <TextInput
          error={errors.title ?? ''}
          value={values.title}
          onChange={handleChange}
          name="title"
          onBlur={handleBlur}
          touched={touched.title}
          label="Campaign Title"
          placeholder="Enter title"
        />
        <UploadFile label="Upload Image" onDrop={onDrop} url={imageUrl.url} />
        <TextInput
          error={errors.cta_title ?? ''}
          name="cta_title"
          value={values.cta_title}
          onChange={handleChange}
          onBlur={handleBlur}
          touched={touched.cta_title}
          label="Link CTA Title"
          placeholder="Enter link title"
        />
        <TextInput
          error={errors.cta_url ?? ''}
          value={values.cta_url}
          onChange={handleChange}
          name="cta_url"
          onBlur={handleBlur}
          touched={touched.cta_url}
          label="Link URL"
          placeholder="https://abcdefghij"
        />
        <TextInput
          error={errors.starts_at ?? ''}
          touched={touched.starts_at}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.starts_at}
          name="starts_at"
          label="startss Date"
          type="date"
          placeholder="24/08/2023"
        />
        <TextInput
          error={errors.ends_at ?? ''}
          touched={touched.ends_at}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.ends_at}
          name="ends_at"
          label="End Date"
          type="date"
          placeholder="24/08/2023"
        />
        <button
          type="submit"
          className="text-white bg-[#32C87D] w-full flex items-center justify-center mx-auto py-3 mb-2 mt-2 rounded-md"
        >
          {isLoading ? <ButtonLoader /> : 'Save Campaign'}
        </button>
      </form>
    </div>
  );
};

export default CampaignCard;
