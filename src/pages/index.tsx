// 렌딩 페이지
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Landing = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/home');
    }, 3000);
  }, []);

  return (
    <div className="container">
      <Image
        src="/images/netflix-logo.gif"
        width={700}
        height={500}
        alt="netflix-logo"
      />
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Landing;
