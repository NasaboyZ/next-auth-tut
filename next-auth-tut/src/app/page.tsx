export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Welcome to our super awesome app!</h1>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </main>
  );
}
