import { Inter } from 'next/font/google';
import Layout from '@/Components/CommonComponents/Layout';
import {app} from "../Config/firebase";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
return (
    <Layout>
      this is home page
    </Layout>
  )
}
