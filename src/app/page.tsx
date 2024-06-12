import { RedirectType, redirect } from 'next/navigation';

const Home = () => redirect('save-the-date', RedirectType.replace);

export default Home;
