import { RedirectType, redirect } from 'next/navigation';

const Home = () => redirect('https://nuestraboda.love/Brenda-y-JoseLuis/', RedirectType.replace);

export default Home;
