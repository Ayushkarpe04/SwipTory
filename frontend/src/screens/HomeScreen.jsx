function HomeScreen() {
  const apiUrl = import.meta.env.VITE_BASE_URL;

  return <div>{apiUrl}</div>;
}

export default HomeScreen;
