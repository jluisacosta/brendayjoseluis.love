import { RedirectType, redirect } from 'next/navigation';

const HiddenInvite = () =>
  redirect('https://nuestraboda.love/Brenda-y-JoseLuis/', RedirectType.replace);

export default HiddenInvite;
