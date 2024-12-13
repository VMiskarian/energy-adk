import { redirect } from 'next/navigation';

export default async function NotFound() {
  redirect('/ru');

  return (
    <div>
      <h1>404 Page not found</h1>
    </div>
  );
}
