import { useRouter } from 'next/router';

function NestingProjectPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>The NestingProjectPage</h1>
    </div>
  );
}
export default NestingProjectPage;
