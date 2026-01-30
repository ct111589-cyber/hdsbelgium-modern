import {redirect} from 'next/navigation';

// This redirects "/" to "/en" (or your default locale)
export default function RootPage() {
  redirect('/en'); 
}
