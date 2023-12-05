interface ICampaign {
  title: string;
  image: string;
  cta_title: string;
  cta_url: string;
  starts_at: string;
  base64_image_string;
  ends_at: string;
  id: string;
  created_at: string;
  updated_at: string;
}

interface ICampaignForm {
  title: string;
  cta_title: string;
  cta_url: string;
  starts_at: string;
  ends_at: string;
  base64_image_string?: string | ArrayBuffer | null;
}
